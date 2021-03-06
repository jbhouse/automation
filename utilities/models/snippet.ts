import { Supplement } from './supplement';

export class Snippet {
    id: string;
    timestamp: number;
    title: string;
    index: string;
    tags: string;
    showing: boolean;
    pinned: boolean;
    supplements: Supplement[];
    constructor(
        id: number = 0,
        title: string = '',
        index: string = '',
        timestamp: number = Date.now(),
        tags: string = '',
        supplements: Supplement[] = [new Supplement()]
    ) {
        this.id = String(id ? id : Math.floor(Math.random() * 1000000000) + 1);
        this.timestamp = timestamp;
        this.title = title;
        this.index = index;
        this.tags = tags;
        this.showing = true; //for search result
        this.pinned = false;
        this.supplements = supplements;
    }

    static createValidSnippet(snippet: Snippet): Snippet {
        snippet.id = snippet.id || String(Math.floor(Math.random() * 1000000000) + 1);
        snippet.timestamp = snippet.timestamp || Date.now();
        snippet.title = snippet.title || '';
        snippet.index = snippet.index || '';
        snippet.tags = snippet.tags || '';
        snippet.showing = snippet.showing === true || snippet.showing === false ? snippet.showing : false;
        snippet.pinned = snippet.pinned === true || snippet.pinned === false ? snippet.pinned : false;
        snippet.supplements = snippet.supplements || [new Supplement()];

        return snippet;
    }

    static createValidSnippets(snippets: Snippet[]): Snippet[] {
        return snippets.map(snippet => this.createValidSnippet(snippet));
    }
}
