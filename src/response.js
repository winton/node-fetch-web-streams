
/**
 * response.js
 *
 * Response class provides content decoding
 */

import { STATUS_CODES } from 'http';
import { parse as parse_url } from 'url';
import Headers from './headers.js';
import Body, { cloneBody , getInstanceName} from './body';

const INTERNALS = Symbol('Response internals');

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
export default class Response {
	constructor(body = null, opts = {}) {
		if (!opts.name) {
			opts.name = "Response";
		}

		Body.call(this, body, opts);

		const status = opts.status || 200;

		this[INTERNALS] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers: new Headers(opts.headers)
		};
	}

	get url() {
		return this[INTERNALS].url;
	}

	get status() {
		return this[INTERNALS].status;
	}

	/**
	 * Convenience property representing if the request ended normally
	 */
	get ok() {
		return this[INTERNALS].status >= 200 && this[INTERNALS].status < 300;
	}

	get statusText() {
		return this[INTERNALS].statusText;
	}

	get headers() {
		return this[INTERNALS].headers;
	}

	/**
	 * Clone this response
	 *
	 * @return  Response
	 */
	clone() {
		return new Response(cloneBody(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			name: `cloned(${getInstanceName(this)})`
		});
	}

	static redirect(url, status) {
		//1. Let parsedURL be the result of parsing url with current settings object’s API base URL.
		//2. If parsedURL is failure, then throw a TypeError.
		const parsedURL = parse_url(url);

		//3. If status is not a redirect status, then throw a RangeError.
		let intStatus = parseInt(status, 10);å
		if(intStatus < 300 || intStatus > 399) {
			throw new RangeError('Not a redirect status');
		}

		//4. Let r be a new Response object, whose response is a new response.
		//5. Set r’s headers to a new Headers object whose guard is "immutable".
		//6. Set r’s response’s status to status.
		//7. Append `Location` to parsedURL, serialized and isomorphic encoded, in r’s response’s header list.
		const r = new Response(new Body(""), {
			url,
			status: intStatus,
			name: `redirected(${url})`,
			headers: new Headers({
				Location: url,
			}, { guard: 'immutable' }),
		});

		//8. Return r.
		return r;
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});
