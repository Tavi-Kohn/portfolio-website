import elasticlunr from "elasticlunrjs";
import { html } from "htm/preact";
import { createElement, render, Component } from "preact";
import { useEffect, useState } from "preact/hooks";

// TODO potentially move into templates directory, or just somewhere other than /static

/**
 * A document with properties set by Zola during the index building phase
 * @typedef {{id: String, path: String, title: String, description: String, body: String}} IndexDoc
 */

/**
 * A single search result
 * @param {IndexDoc} doc
 * @returns
 */
const SearchResult = (doc) => {
  if (!doc) {
    return html`<span
      class="list-group-item list-group-item-secondary list-group-item-action"
    >No results</span>`;
  }
  return html`<a
    class="list-group-item list-group-item-secondary list-group-item-action"
    href=${doc.path}
    ><h4 class="mb-0">${doc.title}</h4>
    <!--<div class="mt-1">${doc.description}</div>-->
    ${!doc.description
      ? html``
      : html`<div class="mt-1">${doc.description}</div>`}
  </a>`;
};

const SearchForm = () => {
  /**
   * Search result array
   * @type {[IndexDoc[], (value: IndexDoc[]) => void]}
   */
  const [results, setResults] = useState([]);
  /**
   * Async loaded index
   * @type {[elasticlunr.Index<IndexDoc>, (value: elasticlunr.Index<IndexDoc>) => void]}
   */
  const [index, setIndex] = useState(null);
  useEffect(() => {
    const load = async () => {
      const res = await fetch("/search_index.en.json");
      const data = await res.json();
      // console.log(data);
      setIndex(elasticlunr.Index.load(data));
    };
    load().catch(console.error);
  }, []);
  return html`<form
    id="primarySearch"
    class="search-results-container z-1"
    role="search"
    onSubmit=${(e) => e.preventDefault()}
  >
    <input
      id="primarySearchInput"
      class="form-control"
      type="search"
      placeholder="Search"
      aria-label="Search"
      onInput=${(e) => {
        const results = index.search(e.target.value, { expand: true });
        const docs = results.map((result) =>
          index.documentStore.getDoc(result.ref)
        );
        console.log(docs.map((d) => d.description));
        setResults(docs);
      }}
    />
    ${index === null
      ? html``
      : html`<div class="list-group search-results">
          ${results.length === 0
            ? SearchResult(null)
            : results.map((res) => SearchResult(res))}
        </div>`}
  </form>`;
};

render(createElement(SearchForm), document.getElementById("primarySearch"));
