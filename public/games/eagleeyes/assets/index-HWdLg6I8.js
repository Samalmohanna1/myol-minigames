;(function () {
	const t = document.createElement('link').relList
	if (t && t.supports && t.supports('modulepreload')) return
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
	new MutationObserver((i) => {
		for (const s of i)
			if (s.type === 'childList')
				for (const o of s.addedNodes)
					o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
	}).observe(document, { childList: !0, subtree: !0 })
	function n(i) {
		const s = {}
		return (
			i.integrity && (s.integrity = i.integrity),
			i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === 'use-credentials'
				? (s.credentials = 'include')
				: i.crossOrigin === 'anonymous'
				? (s.credentials = 'omit')
				: (s.credentials = 'same-origin'),
			s
		)
	}
	function r(i) {
		if (i.ep) return
		i.ep = !0
		const s = n(i)
		fetch(i.href, s)
	}
})()
var jm =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
		? window
		: typeof global < 'u'
		? global
		: typeof self < 'u'
		? self
		: {}
function Qf(e) {
	return e &&
		e.__esModule &&
		Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e
}
var Yf = { exports: {} },
	Ls = {},
	Xf = { exports: {} },
	$ = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fi = Symbol.for('react.element'),
	Fm = Symbol.for('react.portal'),
	Im = Symbol.for('react.fragment'),
	zm = Symbol.for('react.strict_mode'),
	Bm = Symbol.for('react.profiler'),
	Um = Symbol.for('react.provider'),
	$m = Symbol.for('react.context'),
	Wm = Symbol.for('react.forward_ref'),
	Hm = Symbol.for('react.suspense'),
	Gm = Symbol.for('react.memo'),
	bm = Symbol.for('react.lazy'),
	Cu = Symbol.iterator
function Km(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Cu && e[Cu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null)
}
var Zf = {
		isMounted: function () {
			return !1
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	qf = Object.assign,
	Jf = {}
function ur(e, t, n) {
	;(this.props = e),
		(this.context = t),
		(this.refs = Jf),
		(this.updater = n || Zf)
}
ur.prototype.isReactComponent = {}
ur.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		)
	this.updater.enqueueSetState(this, e, t, 'setState')
}
ur.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function ed() {}
ed.prototype = ur.prototype
function ta(e, t, n) {
	;(this.props = e),
		(this.context = t),
		(this.refs = Jf),
		(this.updater = n || Zf)
}
var na = (ta.prototype = new ed())
na.constructor = ta
qf(na, ur.prototype)
na.isPureReactComponent = !0
var Tu = Array.isArray,
	td = Object.prototype.hasOwnProperty,
	ra = { current: null },
	nd = { key: !0, ref: !0, __self: !0, __source: !0 }
function rd(e, t, n) {
	var r,
		i = {},
		s = null,
		o = null
	if (t != null)
		for (r in (t.ref !== void 0 && (o = t.ref),
		t.key !== void 0 && (s = '' + t.key),
		t))
			td.call(t, r) && !nd.hasOwnProperty(r) && (i[r] = t[r])
	var l = arguments.length - 2
	if (l === 1) i.children = n
	else if (1 < l) {
		for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2]
		i.children = a
	}
	if (e && e.defaultProps)
		for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
	return {
		$$typeof: fi,
		type: e,
		key: s,
		ref: o,
		props: i,
		_owner: ra.current,
	}
}
function Qm(e, t) {
	return {
		$$typeof: fi,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	}
}
function ia(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === fi
}
function Ym(e) {
	var t = { '=': '=0', ':': '=2' }
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n]
		})
	)
}
var Eu = /\/+/g
function oo(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? Ym('' + e.key)
		: t.toString(36)
}
function Bi(e, t, n, r, i) {
	var s = typeof e
	;(s === 'undefined' || s === 'boolean') && (e = null)
	var o = !1
	if (e === null) o = !0
	else
		switch (s) {
			case 'string':
			case 'number':
				o = !0
				break
			case 'object':
				switch (e.$$typeof) {
					case fi:
					case Fm:
						o = !0
				}
		}
	if (o)
		return (
			(o = e),
			(i = i(o)),
			(e = r === '' ? '.' + oo(o, 0) : r),
			Tu(i)
				? ((n = ''),
				  e != null && (n = e.replace(Eu, '$&/') + '/'),
				  Bi(i, t, n, '', function (u) {
						return u
				  }))
				: i != null &&
				  (ia(i) &&
						(i = Qm(
							i,
							n +
								(!i.key || (o && o.key === i.key)
									? ''
									: ('' + i.key).replace(Eu, '$&/') + '/') +
								e
						)),
				  t.push(i)),
			1
		)
	if (((o = 0), (r = r === '' ? '.' : r + ':'), Tu(e)))
		for (var l = 0; l < e.length; l++) {
			s = e[l]
			var a = r + oo(s, l)
			o += Bi(s, t, n, a, i)
		}
	else if (((a = Km(e)), typeof a == 'function'))
		for (e = a.call(e), l = 0; !(s = e.next()).done; )
			(s = s.value), (a = r + oo(s, l++)), (o += Bi(s, t, n, a, i))
	else if (s === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		)
	return o
}
function Si(e, t, n) {
	if (e == null) return e
	var r = [],
		i = 0
	return (
		Bi(e, r, '', '', function (s) {
			return t.call(n, s, i++)
		}),
		r
	)
}
function Xm(e) {
	if (e._status === -1) {
		var t = e._result
		;(t = t()),
			t.then(
				function (n) {
					;(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n))
				},
				function (n) {
					;(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n))
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t))
	}
	if (e._status === 1) return e._result.default
	throw e._result
}
var Re = { current: null },
	Ui = { transition: null },
	Zm = {
		ReactCurrentDispatcher: Re,
		ReactCurrentBatchConfig: Ui,
		ReactCurrentOwner: ra,
	}
function id() {
	throw Error('act(...) is not supported in production builds of React.')
}
$.Children = {
	map: Si,
	forEach: function (e, t, n) {
		Si(
			e,
			function () {
				t.apply(this, arguments)
			},
			n
		)
	},
	count: function (e) {
		var t = 0
		return (
			Si(e, function () {
				t++
			}),
			t
		)
	},
	toArray: function (e) {
		return (
			Si(e, function (t) {
				return t
			}) || []
		)
	},
	only: function (e) {
		if (!ia(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			)
		return e
	},
}
$.Component = ur
$.Fragment = Im
$.Profiler = Bm
$.PureComponent = ta
$.StrictMode = zm
$.Suspense = Hm
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zm
$.act = id
$.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		)
	var r = qf({}, e.props),
		i = e.key,
		s = e.ref,
		o = e._owner
	if (t != null) {
		if (
			(t.ref !== void 0 && ((s = t.ref), (o = ra.current)),
			t.key !== void 0 && (i = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps
		for (a in t)
			td.call(t, a) &&
				!nd.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
	}
	var a = arguments.length - 2
	if (a === 1) r.children = n
	else if (1 < a) {
		l = Array(a)
		for (var u = 0; u < a; u++) l[u] = arguments[u + 2]
		r.children = l
	}
	return { $$typeof: fi, type: e.type, key: i, ref: s, props: r, _owner: o }
}
$.createContext = function (e) {
	return (
		(e = {
			$$typeof: $m,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Um, _context: e }),
		(e.Consumer = e)
	)
}
$.createElement = rd
$.createFactory = function (e) {
	var t = rd.bind(null, e)
	return (t.type = e), t
}
$.createRef = function () {
	return { current: null }
}
$.forwardRef = function (e) {
	return { $$typeof: Wm, render: e }
}
$.isValidElement = ia
$.lazy = function (e) {
	return { $$typeof: bm, _payload: { _status: -1, _result: e }, _init: Xm }
}
$.memo = function (e, t) {
	return { $$typeof: Gm, type: e, compare: t === void 0 ? null : t }
}
$.startTransition = function (e) {
	var t = Ui.transition
	Ui.transition = {}
	try {
		e()
	} finally {
		Ui.transition = t
	}
}
$.unstable_act = id
$.useCallback = function (e, t) {
	return Re.current.useCallback(e, t)
}
$.useContext = function (e) {
	return Re.current.useContext(e)
}
$.useDebugValue = function () {}
$.useDeferredValue = function (e) {
	return Re.current.useDeferredValue(e)
}
$.useEffect = function (e, t) {
	return Re.current.useEffect(e, t)
}
$.useId = function () {
	return Re.current.useId()
}
$.useImperativeHandle = function (e, t, n) {
	return Re.current.useImperativeHandle(e, t, n)
}
$.useInsertionEffect = function (e, t) {
	return Re.current.useInsertionEffect(e, t)
}
$.useLayoutEffect = function (e, t) {
	return Re.current.useLayoutEffect(e, t)
}
$.useMemo = function (e, t) {
	return Re.current.useMemo(e, t)
}
$.useReducer = function (e, t, n) {
	return Re.current.useReducer(e, t, n)
}
$.useRef = function (e) {
	return Re.current.useRef(e)
}
$.useState = function (e) {
	return Re.current.useState(e)
}
$.useSyncExternalStore = function (e, t, n) {
	return Re.current.useSyncExternalStore(e, t, n)
}
$.useTransition = function () {
	return Re.current.useTransition()
}
$.version = '18.3.1'
Xf.exports = $
var O = Xf.exports
const qm = Qf(O)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jm = O,
	ev = Symbol.for('react.element'),
	tv = Symbol.for('react.fragment'),
	nv = Object.prototype.hasOwnProperty,
	rv =
		Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	iv = { key: !0, ref: !0, __self: !0, __source: !0 }
function sd(e, t, n) {
	var r,
		i = {},
		s = null,
		o = null
	n !== void 0 && (s = '' + n),
		t.key !== void 0 && (s = '' + t.key),
		t.ref !== void 0 && (o = t.ref)
	for (r in t) nv.call(t, r) && !iv.hasOwnProperty(r) && (i[r] = t[r])
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
	return {
		$$typeof: ev,
		type: e,
		key: s,
		ref: o,
		props: i,
		_owner: rv.current,
	}
}
Ls.Fragment = tv
Ls.jsx = sd
Ls.jsxs = sd
Yf.exports = Ls
var N = Yf.exports,
	Ko = {},
	od = { exports: {} },
	$e = {},
	ld = { exports: {} },
	ad = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
	function t(R, I) {
		var z = R.length
		R.push(I)
		e: for (; 0 < z; ) {
			var Q = (z - 1) >>> 1,
				ie = R[Q]
			if (0 < i(ie, I)) (R[Q] = I), (R[z] = ie), (z = Q)
			else break e
		}
	}
	function n(R) {
		return R.length === 0 ? null : R[0]
	}
	function r(R) {
		if (R.length === 0) return null
		var I = R[0],
			z = R.pop()
		if (z !== I) {
			R[0] = z
			e: for (var Q = 0, ie = R.length, ut = ie >>> 1; Q < ut; ) {
				var gt = 2 * (Q + 1) - 1,
					un = R[gt],
					Je = gt + 1,
					cn = R[Je]
				if (0 > i(un, z))
					Je < ie && 0 > i(cn, un)
						? ((R[Q] = cn), (R[Je] = z), (Q = Je))
						: ((R[Q] = un), (R[gt] = z), (Q = gt))
				else if (Je < ie && 0 > i(cn, z))
					(R[Q] = cn), (R[Je] = z), (Q = Je)
				else break e
			}
		}
		return I
	}
	function i(R, I) {
		var z = R.sortIndex - I.sortIndex
		return z !== 0 ? z : R.id - I.id
	}
	if (
		typeof performance == 'object' &&
		typeof performance.now == 'function'
	) {
		var s = performance
		e.unstable_now = function () {
			return s.now()
		}
	} else {
		var o = Date,
			l = o.now()
		e.unstable_now = function () {
			return o.now() - l
		}
	}
	var a = [],
		u = [],
		c = 1,
		f = null,
		d = 3,
		v = !1,
		g = !1,
		y = !1,
		k = typeof setTimeout == 'function' ? setTimeout : null,
		p = typeof clearTimeout == 'function' ? clearTimeout : null,
		h = typeof setImmediate < 'u' ? setImmediate : null
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling)
	function m(R) {
		for (var I = n(u); I !== null; ) {
			if (I.callback === null) r(u)
			else if (I.startTime <= R)
				r(u), (I.sortIndex = I.expirationTime), t(a, I)
			else break
			I = n(u)
		}
	}
	function w(R) {
		if (((y = !1), m(R), !g))
			if (n(a) !== null) (g = !0), Me(x)
			else {
				var I = n(u)
				I !== null && vt(w, I.startTime - R)
			}
	}
	function x(R, I) {
		;(g = !1), y && ((y = !1), p(E), (E = -1)), (v = !0)
		var z = d
		try {
			for (
				m(I), f = n(a);
				f !== null && (!(f.expirationTime > I) || (R && !F()));

			) {
				var Q = f.callback
				if (typeof Q == 'function') {
					;(f.callback = null), (d = f.priorityLevel)
					var ie = Q(f.expirationTime <= I)
					;(I = e.unstable_now()),
						typeof ie == 'function'
							? (f.callback = ie)
							: f === n(a) && r(a),
						m(I)
				} else r(a)
				f = n(a)
			}
			if (f !== null) var ut = !0
			else {
				var gt = n(u)
				gt !== null && vt(w, gt.startTime - I), (ut = !1)
			}
			return ut
		} finally {
			;(f = null), (d = z), (v = !1)
		}
	}
	var A = !1,
		D = null,
		E = -1,
		B = 5,
		_ = -1
	function F() {
		return !(e.unstable_now() - _ < B)
	}
	function ce() {
		if (D !== null) {
			var R = e.unstable_now()
			_ = R
			var I = !0
			try {
				I = D(!0, R)
			} finally {
				I ? qe() : ((A = !1), (D = null))
			}
		} else A = !1
	}
	var qe
	if (typeof h == 'function')
		qe = function () {
			h(ce)
		}
	else if (typeof MessageChannel < 'u') {
		var Nt = new MessageChannel(),
			le = Nt.port2
		;(Nt.port1.onmessage = ce),
			(qe = function () {
				le.postMessage(null)
			})
	} else
		qe = function () {
			k(ce, 0)
		}
	function Me(R) {
		;(D = R), A || ((A = !0), qe())
	}
	function vt(R, I) {
		E = k(function () {
			R(e.unstable_now())
		}, I)
	}
	;(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (R) {
			R.callback = null
		}),
		(e.unstable_continueExecution = function () {
			g || v || ((g = !0), Me(x))
		}),
		(e.unstable_forceFrameRate = function (R) {
			0 > R || 125 < R
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (B = 0 < R ? Math.floor(1e3 / R) : 5)
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return d
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a)
		}),
		(e.unstable_next = function (R) {
			switch (d) {
				case 1:
				case 2:
				case 3:
					var I = 3
					break
				default:
					I = d
			}
			var z = d
			d = I
			try {
				return R()
			} finally {
				d = z
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (R, I) {
			switch (R) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break
				default:
					R = 3
			}
			var z = d
			d = R
			try {
				return I()
			} finally {
				d = z
			}
		}),
		(e.unstable_scheduleCallback = function (R, I, z) {
			var Q = e.unstable_now()
			switch (
				(typeof z == 'object' && z !== null
					? ((z = z.delay),
					  (z = typeof z == 'number' && 0 < z ? Q + z : Q))
					: (z = Q),
				R)
			) {
				case 1:
					var ie = -1
					break
				case 2:
					ie = 250
					break
				case 5:
					ie = 1073741823
					break
				case 4:
					ie = 1e4
					break
				default:
					ie = 5e3
			}
			return (
				(ie = z + ie),
				(R = {
					id: c++,
					callback: I,
					priorityLevel: R,
					startTime: z,
					expirationTime: ie,
					sortIndex: -1,
				}),
				z > Q
					? ((R.sortIndex = z),
					  t(u, R),
					  n(a) === null &&
							R === n(u) &&
							(y ? (p(E), (E = -1)) : (y = !0), vt(w, z - Q)))
					: ((R.sortIndex = ie),
					  t(a, R),
					  g || v || ((g = !0), Me(x))),
				R
			)
		}),
		(e.unstable_shouldYield = F),
		(e.unstable_wrapCallback = function (R) {
			var I = d
			return function () {
				var z = d
				d = I
				try {
					return R.apply(this, arguments)
				} finally {
					d = z
				}
			}
		})
})(ad)
ld.exports = ad
var sv = ld.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ov = O,
	Be = sv
function T(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
			n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n])
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	)
}
var ud = new Set(),
	Wr = {}
function An(e, t) {
	er(e, t), er(e + 'Capture', t)
}
function er(e, t) {
	for (Wr[e] = t, e = 0; e < t.length; e++) ud.add(t[e])
}
var At = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Qo = Object.prototype.hasOwnProperty,
	lv =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Mu = {},
	Au = {}
function av(e) {
	return Qo.call(Au, e)
		? !0
		: Qo.call(Mu, e)
		? !1
		: lv.test(e)
		? (Au[e] = !0)
		: ((Mu[e] = !0), !1)
}
function uv(e, t, n, r) {
	if (n !== null && n.type === 0) return !1
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)),
				  e !== 'data-' && e !== 'aria-')
		default:
			return !1
	}
}
function cv(e, t, n, r) {
	if (t === null || typeof t > 'u' || uv(e, t, n, r)) return !0
	if (r) return !1
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t
			case 4:
				return t === !1
			case 5:
				return isNaN(t)
			case 6:
				return isNaN(t) || 1 > t
		}
	return !1
}
function Le(e, t, n, r, i, s, o) {
	;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = s),
		(this.removeEmptyString = o)
}
var we = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		we[e] = new Le(e, 0, !1, e, null, !1, !1)
	})
;[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0]
	we[t] = new Le(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	we[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	we[e] = new Le(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		we[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1)
	})
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	we[e] = new Le(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
	we[e] = new Le(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
	we[e] = new Le(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
	we[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var sa = /[\-:]([a-z])/g
function oa(e) {
	return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(sa, oa)
		we[t] = new Le(t, 1, !1, e, null, !1, !1)
	})
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(sa, oa)
		we[t] = new Le(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
	})
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(sa, oa)
	we[t] = new Le(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
	we[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
we.xlinkHref = new Le(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
	we[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function la(e, t, n, r) {
	var i = we.hasOwnProperty(t) ? we[t] : null
	;(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(cv(t, n, i, r) && (n = null),
		r || i === null
			? av(t) &&
			  (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Ot = ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	xi = Symbol.for('react.element'),
	Ln = Symbol.for('react.portal'),
	Vn = Symbol.for('react.fragment'),
	aa = Symbol.for('react.strict_mode'),
	Yo = Symbol.for('react.profiler'),
	cd = Symbol.for('react.provider'),
	fd = Symbol.for('react.context'),
	ua = Symbol.for('react.forward_ref'),
	Xo = Symbol.for('react.suspense'),
	Zo = Symbol.for('react.suspense_list'),
	ca = Symbol.for('react.memo'),
	Ft = Symbol.for('react.lazy'),
	dd = Symbol.for('react.offscreen'),
	Du = Symbol.iterator
function mr(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Du && e[Du]) || e['@@iterator']),
		  typeof e == 'function' ? e : null)
}
var re = Object.assign,
	lo
function Cr(e) {
	if (lo === void 0)
		try {
			throw Error()
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/)
			lo = (t && t[1]) || ''
		}
	return (
		`
` +
		lo +
		e
	)
}
var ao = !1
function uo(e, t) {
	if (!e || ao) return ''
	ao = !0
	var n = Error.prepareStackTrace
	Error.prepareStackTrace = void 0
	try {
		if (t)
			if (
				((t = function () {
					throw Error()
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error()
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, [])
				} catch (u) {
					var r = u
				}
				Reflect.construct(e, [], t)
			} else {
				try {
					t.call()
				} catch (u) {
					r = u
				}
				e.call(t.prototype)
			}
		else {
			try {
				throw Error()
			} catch (u) {
				r = u
			}
			e()
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var i = u.stack.split(`
`),
					s = r.stack.split(`
`),
					o = i.length - 1,
					l = s.length - 1;
				1 <= o && 0 <= l && i[o] !== s[l];

			)
				l--
			for (; 1 <= o && 0 <= l; o--, l--)
				if (i[o] !== s[l]) {
					if (o !== 1 || l !== 1)
						do
							if ((o--, l--, 0 > l || i[o] !== s[l])) {
								var a =
									`
` + i[o].replace(' at new ', ' at ')
								return (
									e.displayName &&
										a.includes('<anonymous>') &&
										(a = a.replace(
											'<anonymous>',
											e.displayName
										)),
									a
								)
							}
						while (1 <= o && 0 <= l)
					break
				}
		}
	} finally {
		;(ao = !1), (Error.prepareStackTrace = n)
	}
	return (e = e ? e.displayName || e.name : '') ? Cr(e) : ''
}
function fv(e) {
	switch (e.tag) {
		case 5:
			return Cr(e.type)
		case 16:
			return Cr('Lazy')
		case 13:
			return Cr('Suspense')
		case 19:
			return Cr('SuspenseList')
		case 0:
		case 2:
		case 15:
			return (e = uo(e.type, !1)), e
		case 11:
			return (e = uo(e.type.render, !1)), e
		case 1:
			return (e = uo(e.type, !0)), e
		default:
			return ''
	}
}
function qo(e) {
	if (e == null) return null
	if (typeof e == 'function') return e.displayName || e.name || null
	if (typeof e == 'string') return e
	switch (e) {
		case Vn:
			return 'Fragment'
		case Ln:
			return 'Portal'
		case Yo:
			return 'Profiler'
		case aa:
			return 'StrictMode'
		case Xo:
			return 'Suspense'
		case Zo:
			return 'SuspenseList'
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case fd:
				return (e.displayName || 'Context') + '.Consumer'
			case cd:
				return (e._context.displayName || 'Context') + '.Provider'
			case ua:
				var t = e.render
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e =
							e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				)
			case ca:
				return (
					(t = e.displayName || null),
					t !== null ? t : qo(e.type) || 'Memo'
				)
			case Ft:
				;(t = e._payload), (e = e._init)
				try {
					return qo(e(t))
				} catch {}
		}
	return null
}
function dv(e) {
	var t = e.type
	switch (e.tag) {
		case 24:
			return 'Cache'
		case 9:
			return (t.displayName || 'Context') + '.Consumer'
		case 10:
			return (t._context.displayName || 'Context') + '.Provider'
		case 18:
			return 'DehydratedFragment'
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName ||
					(e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			)
		case 7:
			return 'Fragment'
		case 5:
			return t
		case 4:
			return 'Portal'
		case 3:
			return 'Root'
		case 6:
			return 'Text'
		case 16:
			return qo(t)
		case 8:
			return t === aa ? 'StrictMode' : 'Mode'
		case 22:
			return 'Offscreen'
		case 12:
			return 'Profiler'
		case 21:
			return 'Scope'
		case 13:
			return 'Suspense'
		case 19:
			return 'SuspenseList'
		case 25:
			return 'TracingMarker'
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null
			if (typeof t == 'string') return t
	}
	return null
}
function Jt(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e
		case 'object':
			return e
		default:
			return ''
	}
}
function hd(e) {
	var t = e.type
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	)
}
function hv(e) {
	var t = hd(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t]
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var i = n.get,
			s = n.set
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this)
				},
				set: function (o) {
					;(r = '' + o), s.call(this, o)
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r
				},
				setValue: function (o) {
					r = '' + o
				},
				stopTracking: function () {
					;(e._valueTracker = null), delete e[t]
				},
			}
		)
	}
}
function Pi(e) {
	e._valueTracker || (e._valueTracker = hv(e))
}
function pd(e) {
	if (!e) return !1
	var t = e._valueTracker
	if (!t) return !0
	var n = t.getValue(),
		r = ''
	return (
		e && (r = hd(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	)
}
function ts(e) {
	if (
		((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
	)
		return null
	try {
		return e.activeElement || e.body
	} catch {
		return e.body
	}
}
function Jo(e, t) {
	var n = t.checked
	return re({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	})
}
function Ru(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked
	;(n = Jt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		})
}
function md(e, t) {
	;(t = t.checked), t != null && la(e, 'checked', t, !1)
}
function el(e, t) {
	md(e, t)
	var n = Jt(t.value),
		r = t.type
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) &&
			  (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n)
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value')
		return
	}
	t.hasOwnProperty('value')
		? tl(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && tl(e, t.type, Jt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked)
}
function Lu(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return
		;(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t)
	}
	;(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n)
}
function tl(e, t, n) {
	;(t !== 'number' || ts(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Tr = Array.isArray
function Qn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {}
		for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0)
	} else {
		for (n = '' + Jt(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
				return
			}
			t !== null || e[i].disabled || (t = e[i])
		}
		t !== null && (t.selected = !0)
	}
}
function nl(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(T(91))
	return re({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	})
}
function Vu(e, t) {
	var n = t.value
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(T(92))
			if (Tr(n)) {
				if (1 < n.length) throw Error(T(93))
				n = n[0]
			}
			t = n
		}
		t == null && (t = ''), (n = t)
	}
	e._wrapperState = { initialValue: Jt(n) }
}
function vd(e, t) {
	var n = Jt(t.value),
		r = Jt(t.defaultValue)
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r)
}
function Ou(e) {
	var t = e.textContent
	t === e._wrapperState.initialValue &&
		t !== '' &&
		t !== null &&
		(e.value = t)
}
function gd(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg'
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML'
		default:
			return 'http://www.w3.org/1999/xhtml'
	}
}
function rl(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? gd(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e
}
var ki,
	yd = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i)
					})
			  }
			: e
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t
		else {
			for (
				ki = ki || document.createElement('div'),
					ki.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = ki.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild)
			for (; t.firstChild; ) e.appendChild(t.firstChild)
		}
	})
function Hr(e, t) {
	if (t) {
		var n = e.firstChild
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t
			return
		}
	}
	e.textContent = t
}
var Rr = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	pv = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Rr).forEach(function (e) {
	pv.forEach(function (t) {
		;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rr[t] = Rr[e])
	})
})
function wd(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n ||
		  typeof t != 'number' ||
		  t === 0 ||
		  (Rr.hasOwnProperty(e) && Rr[e])
		? ('' + t).trim()
		: t + 'px'
}
function Sd(e, t) {
	e = e.style
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = wd(n, t[n], r)
			n === 'float' && (n = 'cssFloat'),
				r ? e.setProperty(n, i) : (e[n] = i)
		}
}
var mv = re(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
)
function il(e, t) {
	if (t) {
		if (mv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(T(137, e))
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(T(60))
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(T(61))
		}
		if (t.style != null && typeof t.style != 'object') throw Error(T(62))
	}
}
function sl(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string'
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1
		default:
			return !0
	}
}
var ol = null
function fa(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	)
}
var ll = null,
	Yn = null,
	Xn = null
function Nu(e) {
	if ((e = pi(e))) {
		if (typeof ll != 'function') throw Error(T(280))
		var t = e.stateNode
		t && ((t = js(t)), ll(e.stateNode, e.type, t))
	}
}
function xd(e) {
	Yn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Yn = e)
}
function Pd() {
	if (Yn) {
		var e = Yn,
			t = Xn
		if (((Xn = Yn = null), Nu(e), t))
			for (e = 0; e < t.length; e++) Nu(t[e])
	}
}
function kd(e, t) {
	return e(t)
}
function Cd() {}
var co = !1
function Td(e, t, n) {
	if (co) return e(t, n)
	co = !0
	try {
		return kd(e, t, n)
	} finally {
		;(co = !1), (Yn !== null || Xn !== null) && (Cd(), Pd())
	}
}
function Gr(e, t) {
	var n = e.stateNode
	if (n === null) return null
	var r = js(n)
	if (r === null) return null
	n = r[t]
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			;(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r)
			break e
		default:
			e = !1
	}
	if (e) return null
	if (n && typeof n != 'function') throw Error(T(231, t, typeof n))
	return n
}
var al = !1
if (At)
	try {
		var vr = {}
		Object.defineProperty(vr, 'passive', {
			get: function () {
				al = !0
			},
		}),
			window.addEventListener('test', vr, vr),
			window.removeEventListener('test', vr, vr)
	} catch {
		al = !1
	}
function vv(e, t, n, r, i, s, o, l, a) {
	var u = Array.prototype.slice.call(arguments, 3)
	try {
		t.apply(n, u)
	} catch (c) {
		this.onError(c)
	}
}
var Lr = !1,
	ns = null,
	rs = !1,
	ul = null,
	gv = {
		onError: function (e) {
			;(Lr = !0), (ns = e)
		},
	}
function yv(e, t, n, r, i, s, o, l, a) {
	;(Lr = !1), (ns = null), vv.apply(gv, arguments)
}
function wv(e, t, n, r, i, s, o, l, a) {
	if ((yv.apply(this, arguments), Lr)) {
		if (Lr) {
			var u = ns
			;(Lr = !1), (ns = null)
		} else throw Error(T(198))
		rs || ((rs = !0), (ul = u))
	}
}
function Dn(e) {
	var t = e,
		n = e
	if (e.alternate) for (; t.return; ) t = t.return
	else {
		e = t
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
		while (e)
	}
	return t.tag === 3 ? n : null
}
function Ed(e) {
	if (e.tag === 13) {
		var t = e.memoizedState
		if (
			(t === null &&
				((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated
	}
	return null
}
function _u(e) {
	if (Dn(e) !== e) throw Error(T(188))
}
function Sv(e) {
	var t = e.alternate
	if (!t) {
		if (((t = Dn(e)), t === null)) throw Error(T(188))
		return t !== e ? null : e
	}
	for (var n = e, r = t; ; ) {
		var i = n.return
		if (i === null) break
		var s = i.alternate
		if (s === null) {
			if (((r = i.return), r !== null)) {
				n = r
				continue
			}
			break
		}
		if (i.child === s.child) {
			for (s = i.child; s; ) {
				if (s === n) return _u(i), e
				if (s === r) return _u(i), t
				s = s.sibling
			}
			throw Error(T(188))
		}
		if (n.return !== r.return) (n = i), (r = s)
		else {
			for (var o = !1, l = i.child; l; ) {
				if (l === n) {
					;(o = !0), (n = i), (r = s)
					break
				}
				if (l === r) {
					;(o = !0), (r = i), (n = s)
					break
				}
				l = l.sibling
			}
			if (!o) {
				for (l = s.child; l; ) {
					if (l === n) {
						;(o = !0), (n = s), (r = i)
						break
					}
					if (l === r) {
						;(o = !0), (r = s), (n = i)
						break
					}
					l = l.sibling
				}
				if (!o) throw Error(T(189))
			}
		}
		if (n.alternate !== r) throw Error(T(190))
	}
	if (n.tag !== 3) throw Error(T(188))
	return n.stateNode.current === n ? e : t
}
function Md(e) {
	return (e = Sv(e)), e !== null ? Ad(e) : null
}
function Ad(e) {
	if (e.tag === 5 || e.tag === 6) return e
	for (e = e.child; e !== null; ) {
		var t = Ad(e)
		if (t !== null) return t
		e = e.sibling
	}
	return null
}
var Dd = Be.unstable_scheduleCallback,
	ju = Be.unstable_cancelCallback,
	xv = Be.unstable_shouldYield,
	Pv = Be.unstable_requestPaint,
	ue = Be.unstable_now,
	kv = Be.unstable_getCurrentPriorityLevel,
	da = Be.unstable_ImmediatePriority,
	Rd = Be.unstable_UserBlockingPriority,
	is = Be.unstable_NormalPriority,
	Cv = Be.unstable_LowPriority,
	Ld = Be.unstable_IdlePriority,
	Vs = null,
	ht = null
function Tv(e) {
	if (ht && typeof ht.onCommitFiberRoot == 'function')
		try {
			ht.onCommitFiberRoot(Vs, e, void 0, (e.current.flags & 128) === 128)
		} catch {}
}
var ot = Math.clz32 ? Math.clz32 : Av,
	Ev = Math.log,
	Mv = Math.LN2
function Av(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Ev(e) / Mv) | 0)) | 0
}
var Ci = 64,
	Ti = 4194304
function Er(e) {
	switch (e & -e) {
		case 1:
			return 1
		case 2:
			return 2
		case 4:
			return 4
		case 8:
			return 8
		case 16:
			return 16
		case 32:
			return 32
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424
		case 134217728:
			return 134217728
		case 268435456:
			return 268435456
		case 536870912:
			return 536870912
		case 1073741824:
			return 1073741824
		default:
			return e
	}
}
function ss(e, t) {
	var n = e.pendingLanes
	if (n === 0) return 0
	var r = 0,
		i = e.suspendedLanes,
		s = e.pingedLanes,
		o = n & 268435455
	if (o !== 0) {
		var l = o & ~i
		l !== 0 ? (r = Er(l)) : ((s &= o), s !== 0 && (r = Er(s)))
	} else (o = n & ~i), o !== 0 ? (r = Er(o)) : s !== 0 && (r = Er(s))
	if (r === 0) return 0
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r),
		(s = t & -t),
		i >= s || (i === 16 && (s & 4194240) !== 0))
	)
		return t
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - ot(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
	return r
}
function Dv(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1
		default:
			return -1
	}
}
function Rv(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			s = e.pendingLanes;
		0 < s;

	) {
		var o = 31 - ot(s),
			l = 1 << o,
			a = i[o]
		a === -1
			? (!(l & n) || l & r) && (i[o] = Dv(l, t))
			: a <= t && (e.expiredLanes |= l),
			(s &= ~l)
	}
}
function cl(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	)
}
function Vd() {
	var e = Ci
	return (Ci <<= 1), !(Ci & 4194240) && (Ci = 64), e
}
function fo(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e)
	return t
}
function di(e, t, n) {
	;(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - ot(t)),
		(e[t] = n)
}
function Lv(e, t) {
	var n = e.pendingLanes & ~t
	;(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements)
	var r = e.eventTimes
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - ot(n),
			s = 1 << i
		;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s)
	}
}
function ha(e, t) {
	var n = (e.entangledLanes |= t)
	for (e = e.entanglements; n; ) {
		var r = 31 - ot(n),
			i = 1 << r
		;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
	}
}
var b = 0
function Od(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Nd,
	pa,
	_d,
	jd,
	Fd,
	fl = !1,
	Ei = [],
	Wt = null,
	Ht = null,
	Gt = null,
	br = new Map(),
	Kr = new Map(),
	zt = [],
	Vv =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		)
function Fu(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			Wt = null
			break
		case 'dragenter':
		case 'dragleave':
			Ht = null
			break
		case 'mouseover':
		case 'mouseout':
			Gt = null
			break
		case 'pointerover':
		case 'pointerout':
			br.delete(t.pointerId)
			break
		case 'gotpointercapture':
		case 'lostpointercapture':
			Kr.delete(t.pointerId)
	}
}
function gr(e, t, n, r, i, s) {
	return e === null || e.nativeEvent !== s
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: s,
				targetContainers: [i],
		  }),
		  t !== null && ((t = pi(t)), t !== null && pa(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e)
}
function Ov(e, t, n, r, i) {
	switch (t) {
		case 'focusin':
			return (Wt = gr(Wt, e, t, n, r, i)), !0
		case 'dragenter':
			return (Ht = gr(Ht, e, t, n, r, i)), !0
		case 'mouseover':
			return (Gt = gr(Gt, e, t, n, r, i)), !0
		case 'pointerover':
			var s = i.pointerId
			return br.set(s, gr(br.get(s) || null, e, t, n, r, i)), !0
		case 'gotpointercapture':
			return (
				(s = i.pointerId),
				Kr.set(s, gr(Kr.get(s) || null, e, t, n, r, i)),
				!0
			)
	}
	return !1
}
function Id(e) {
	var t = vn(e.target)
	if (t !== null) {
		var n = Dn(t)
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Ed(n)), t !== null)) {
					;(e.blockedOn = t),
						Fd(e.priority, function () {
							_d(n)
						})
					return
				}
			} else if (
				t === 3 &&
				n.stateNode.current.memoizedState.isDehydrated
			) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
				return
			}
		}
	}
	e.blockedOn = null
}
function $i(e) {
	if (e.blockedOn !== null) return !1
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
		if (n === null) {
			n = e.nativeEvent
			var r = new n.constructor(n.type, n)
			;(ol = r), n.target.dispatchEvent(r), (ol = null)
		} else return (t = pi(n)), t !== null && pa(t), (e.blockedOn = n), !1
		t.shift()
	}
	return !0
}
function Iu(e, t, n) {
	$i(e) && n.delete(t)
}
function Nv() {
	;(fl = !1),
		Wt !== null && $i(Wt) && (Wt = null),
		Ht !== null && $i(Ht) && (Ht = null),
		Gt !== null && $i(Gt) && (Gt = null),
		br.forEach(Iu),
		Kr.forEach(Iu)
}
function yr(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		fl ||
			((fl = !0),
			Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Nv)))
}
function Qr(e) {
	function t(i) {
		return yr(i, e)
	}
	if (0 < Ei.length) {
		yr(Ei[0], e)
		for (var n = 1; n < Ei.length; n++) {
			var r = Ei[n]
			r.blockedOn === e && (r.blockedOn = null)
		}
	}
	for (
		Wt !== null && yr(Wt, e),
			Ht !== null && yr(Ht, e),
			Gt !== null && yr(Gt, e),
			br.forEach(t),
			Kr.forEach(t),
			n = 0;
		n < zt.length;
		n++
	)
		(r = zt[n]), r.blockedOn === e && (r.blockedOn = null)
	for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
		Id(n), n.blockedOn === null && zt.shift()
}
var Zn = Ot.ReactCurrentBatchConfig,
	os = !0
function _v(e, t, n, r) {
	var i = b,
		s = Zn.transition
	Zn.transition = null
	try {
		;(b = 1), ma(e, t, n, r)
	} finally {
		;(b = i), (Zn.transition = s)
	}
}
function jv(e, t, n, r) {
	var i = b,
		s = Zn.transition
	Zn.transition = null
	try {
		;(b = 4), ma(e, t, n, r)
	} finally {
		;(b = i), (Zn.transition = s)
	}
}
function ma(e, t, n, r) {
	if (os) {
		var i = dl(e, t, n, r)
		if (i === null) Po(e, t, r, ls, n), Fu(e, r)
		else if (Ov(i, e, t, n, r)) r.stopPropagation()
		else if ((Fu(e, r), t & 4 && -1 < Vv.indexOf(e))) {
			for (; i !== null; ) {
				var s = pi(i)
				if (
					(s !== null && Nd(s),
					(s = dl(e, t, n, r)),
					s === null && Po(e, t, r, ls, n),
					s === i)
				)
					break
				i = s
			}
			i !== null && r.stopPropagation()
		} else Po(e, t, r, null, n)
	}
}
var ls = null
function dl(e, t, n, r) {
	if (((ls = null), (e = fa(r)), (e = vn(e)), e !== null))
		if (((t = Dn(e)), t === null)) e = null
		else if (((n = t.tag), n === 13)) {
			if (((e = Ed(t)), e !== null)) return e
			e = null
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null
			e = null
		} else t !== e && (e = null)
	return (ls = e), null
}
function zd(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4
		case 'message':
			switch (kv()) {
				case da:
					return 1
				case Rd:
					return 4
				case is:
				case Cv:
					return 16
				case Ld:
					return 536870912
				default:
					return 16
			}
		default:
			return 16
	}
}
var Ut = null,
	va = null,
	Wi = null
function Bd() {
	if (Wi) return Wi
	var e,
		t = va,
		n = t.length,
		r,
		i = 'value' in Ut ? Ut.value : Ut.textContent,
		s = i.length
	for (e = 0; e < n && t[e] === i[e]; e++);
	var o = n - e
	for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
	return (Wi = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Hi(e) {
	var t = e.keyCode
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	)
}
function Mi() {
	return !0
}
function zu() {
	return !1
}
function We(e) {
	function t(n, r, i, s, o) {
		;(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = s),
			(this.target = o),
			(this.currentTarget = null)
		for (var l in e)
			e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]))
		return (
			(this.isDefaultPrevented = (
				s.defaultPrevented != null
					? s.defaultPrevented
					: s.returnValue === !1
			)
				? Mi
				: zu),
			(this.isPropagationStopped = zu),
			this
		)
	}
	return (
		re(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0
				var n = this.nativeEvent
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' &&
						  (n.returnValue = !1),
					(this.isDefaultPrevented = Mi))
			},
			stopPropagation: function () {
				var n = this.nativeEvent
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' &&
						  (n.cancelBubble = !0),
					(this.isPropagationStopped = Mi))
			},
			persist: function () {},
			isPersistent: Mi,
		}),
		t
	)
}
var cr = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now()
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	ga = We(cr),
	hi = re({}, cr, { view: 0, detail: 0 }),
	Fv = We(hi),
	ho,
	po,
	wr,
	Os = re({}, hi, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ya,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== wr &&
						(wr && e.type === 'mousemove'
							? ((ho = e.screenX - wr.screenX),
							  (po = e.screenY - wr.screenY))
							: (po = ho = 0),
						(wr = e)),
				  ho)
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : po
		},
	}),
	Bu = We(Os),
	Iv = re({}, Os, { dataTransfer: 0 }),
	zv = We(Iv),
	Bv = re({}, hi, { relatedTarget: 0 }),
	mo = We(Bv),
	Uv = re({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	$v = We(Uv),
	Wv = re({}, cr, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData
		},
	}),
	Hv = We(Wv),
	Gv = re({}, cr, { data: 0 }),
	Uu = We(Gv),
	bv = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	Kv = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	Qv = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	}
function Yv(e) {
	var t = this.nativeEvent
	return t.getModifierState
		? t.getModifierState(e)
		: (e = Qv[e])
		? !!t[e]
		: !1
}
function ya() {
	return Yv
}
var Xv = re({}, hi, {
		key: function (e) {
			if (e.key) {
				var t = bv[e.key] || e.key
				if (t !== 'Unidentified') return t
			}
			return e.type === 'keypress'
				? ((e = Hi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? Kv[e.keyCode] || 'Unidentified'
				: ''
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ya,
		charCode: function (e) {
			return e.type === 'keypress' ? Hi(e) : 0
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
		},
		which: function (e) {
			return e.type === 'keypress'
				? Hi(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0
		},
	}),
	Zv = We(Xv),
	qv = re({}, Os, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	$u = We(qv),
	Jv = re({}, hi, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ya,
	}),
	eg = We(Jv),
	tg = re({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	ng = We(tg),
	rg = re({}, Os, {
		deltaX: function (e) {
			return 'deltaX' in e
				? e.deltaX
				: 'wheelDeltaX' in e
				? -e.wheelDeltaX
				: 0
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	ig = We(rg),
	sg = [9, 13, 27, 32],
	wa = At && 'CompositionEvent' in window,
	Vr = null
At && 'documentMode' in document && (Vr = document.documentMode)
var og = At && 'TextEvent' in window && !Vr,
	Ud = At && (!wa || (Vr && 8 < Vr && 11 >= Vr)),
	Wu = ' ',
	Hu = !1
function $d(e, t) {
	switch (e) {
		case 'keyup':
			return sg.indexOf(t.keyCode) !== -1
		case 'keydown':
			return t.keyCode !== 229
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0
		default:
			return !1
	}
}
function Wd(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var On = !1
function lg(e, t) {
	switch (e) {
		case 'compositionend':
			return Wd(t)
		case 'keypress':
			return t.which !== 32 ? null : ((Hu = !0), Wu)
		case 'textInput':
			return (e = t.data), e === Wu && Hu ? null : e
		default:
			return null
	}
}
function ag(e, t) {
	if (On)
		return e === 'compositionend' || (!wa && $d(e, t))
			? ((e = Bd()), (Wi = va = Ut = null), (On = !1), e)
			: null
	switch (e) {
		case 'paste':
			return null
		case 'keypress':
			if (
				!(t.ctrlKey || t.altKey || t.metaKey) ||
				(t.ctrlKey && t.altKey)
			) {
				if (t.char && 1 < t.char.length) return t.char
				if (t.which) return String.fromCharCode(t.which)
			}
			return null
		case 'compositionend':
			return Ud && t.locale !== 'ko' ? null : t.data
		default:
			return null
	}
}
var ug = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
}
function Gu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return t === 'input' ? !!ug[e.type] : t === 'textarea'
}
function Hd(e, t, n, r) {
	xd(r),
		(t = as(t, 'onChange')),
		0 < t.length &&
			((n = new ga('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }))
}
var Or = null,
	Yr = null
function cg(e) {
	th(e, 0)
}
function Ns(e) {
	var t = jn(e)
	if (pd(t)) return e
}
function fg(e, t) {
	if (e === 'change') return t
}
var Gd = !1
if (At) {
	var vo
	if (At) {
		var go = 'oninput' in document
		if (!go) {
			var bu = document.createElement('div')
			bu.setAttribute('oninput', 'return;'),
				(go = typeof bu.oninput == 'function')
		}
		vo = go
	} else vo = !1
	Gd = vo && (!document.documentMode || 9 < document.documentMode)
}
function Ku() {
	Or && (Or.detachEvent('onpropertychange', bd), (Yr = Or = null))
}
function bd(e) {
	if (e.propertyName === 'value' && Ns(Yr)) {
		var t = []
		Hd(t, Yr, e, fa(e)), Td(cg, t)
	}
}
function dg(e, t, n) {
	e === 'focusin'
		? (Ku(), (Or = t), (Yr = n), Or.attachEvent('onpropertychange', bd))
		: e === 'focusout' && Ku()
}
function hg(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return Ns(Yr)
}
function pg(e, t) {
	if (e === 'click') return Ns(t)
}
function mg(e, t) {
	if (e === 'input' || e === 'change') return Ns(t)
}
function vg(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var at = typeof Object.is == 'function' ? Object.is : vg
function Xr(e, t) {
	if (at(e, t)) return !0
	if (
		typeof e != 'object' ||
		e === null ||
		typeof t != 'object' ||
		t === null
	)
		return !1
	var n = Object.keys(e),
		r = Object.keys(t)
	if (n.length !== r.length) return !1
	for (r = 0; r < n.length; r++) {
		var i = n[r]
		if (!Qo.call(t, i) || !at(e[i], t[i])) return !1
	}
	return !0
}
function Qu(e) {
	for (; e && e.firstChild; ) e = e.firstChild
	return e
}
function Yu(e, t) {
	var n = Qu(e)
	e = 0
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e }
			e = r
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling
					break e
				}
				n = n.parentNode
			}
			n = void 0
		}
		n = Qu(n)
	}
}
function Kd(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Kd(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1
}
function Qd() {
	for (var e = window, t = ts(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string'
		} catch {
			n = !1
		}
		if (n) e = t.contentWindow
		else break
		t = ts(e.document)
	}
	return t
}
function Sa(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase()
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	)
}
function gg(e) {
	var t = Qd(),
		n = e.focusedElem,
		r = e.selectionRange
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Kd(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && Sa(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t),
					(n.selectionEnd = Math.min(e, n.value.length))
			else if (
				((e =
					((t = n.ownerDocument || document) && t.defaultView) ||
					window),
				e.getSelection)
			) {
				e = e.getSelection()
				var i = n.textContent.length,
					s = Math.min(r.start, i)
				;(r = r.end === void 0 ? s : Math.min(r.end, i)),
					!e.extend && s > r && ((i = r), (r = s), (s = i)),
					(i = Yu(n, s))
				var o = Yu(n, r)
				i &&
					o &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== o.node ||
						e.focusOffset !== o.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					s > r
						? (e.addRange(t), e.extend(o.node, o.offset))
						: (t.setEnd(o.node, o.offset), e.addRange(t)))
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
		for (
			typeof n.focus == 'function' && n.focus(), n = 0;
			n < t.length;
			n++
		)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top)
	}
}
var yg = At && 'documentMode' in document && 11 >= document.documentMode,
	Nn = null,
	hl = null,
	Nr = null,
	pl = !1
function Xu(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
	pl ||
		Nn == null ||
		Nn !== ts(r) ||
		((r = Nn),
		'selectionStart' in r && Sa(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Nr && Xr(Nr, r)) ||
			((Nr = r),
			(r = as(hl, 'onSelect')),
			0 < r.length &&
				((t = new ga('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Nn))))
}
function Ai(e, t) {
	var n = {}
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	)
}
var _n = {
		animationend: Ai('Animation', 'AnimationEnd'),
		animationiteration: Ai('Animation', 'AnimationIteration'),
		animationstart: Ai('Animation', 'AnimationStart'),
		transitionend: Ai('Transition', 'TransitionEnd'),
	},
	yo = {},
	Yd = {}
At &&
	((Yd = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete _n.animationend.animation,
		delete _n.animationiteration.animation,
		delete _n.animationstart.animation),
	'TransitionEvent' in window || delete _n.transitionend.transition)
function _s(e) {
	if (yo[e]) return yo[e]
	if (!_n[e]) return e
	var t = _n[e],
		n
	for (n in t) if (t.hasOwnProperty(n) && n in Yd) return (yo[e] = t[n])
	return e
}
var Xd = _s('animationend'),
	Zd = _s('animationiteration'),
	qd = _s('animationstart'),
	Jd = _s('transitionend'),
	eh = new Map(),
	Zu =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		)
function rn(e, t) {
	eh.set(e, t), An(t, [e])
}
for (var wo = 0; wo < Zu.length; wo++) {
	var So = Zu[wo],
		wg = So.toLowerCase(),
		Sg = So[0].toUpperCase() + So.slice(1)
	rn(wg, 'on' + Sg)
}
rn(Xd, 'onAnimationEnd')
rn(Zd, 'onAnimationIteration')
rn(qd, 'onAnimationStart')
rn('dblclick', 'onDoubleClick')
rn('focusin', 'onFocus')
rn('focusout', 'onBlur')
rn(Jd, 'onTransitionEnd')
er('onMouseEnter', ['mouseout', 'mouseover'])
er('onMouseLeave', ['mouseout', 'mouseover'])
er('onPointerEnter', ['pointerout', 'pointerover'])
er('onPointerLeave', ['pointerout', 'pointerover'])
An(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(
		' '
	)
)
An(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
)
An('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
An(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
An(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
An(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var Mr =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	xg = new Set(
		'cancel close invalid load scroll toggle'.split(' ').concat(Mr)
	)
function qu(e, t, n) {
	var r = e.type || 'unknown-event'
	;(e.currentTarget = n), wv(r, t, void 0, e), (e.currentTarget = null)
}
function th(e, t) {
	t = (t & 4) !== 0
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event
		r = r.listeners
		e: {
			var s = void 0
			if (t)
				for (var o = r.length - 1; 0 <= o; o--) {
					var l = r[o],
						a = l.instance,
						u = l.currentTarget
					if (((l = l.listener), a !== s && i.isPropagationStopped()))
						break e
					qu(i, l, u), (s = a)
				}
			else
				for (o = 0; o < r.length; o++) {
					if (
						((l = r[o]),
						(a = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						a !== s && i.isPropagationStopped())
					)
						break e
					qu(i, l, u), (s = a)
				}
		}
	}
	if (rs) throw ((e = ul), (rs = !1), (ul = null), e)
}
function Z(e, t) {
	var n = t[wl]
	n === void 0 && (n = t[wl] = new Set())
	var r = e + '__bubble'
	n.has(r) || (nh(t, e, 2, !1), n.add(r))
}
function xo(e, t, n) {
	var r = 0
	t && (r |= 4), nh(n, e, r, t)
}
var Di = '_reactListening' + Math.random().toString(36).slice(2)
function Zr(e) {
	if (!e[Di]) {
		;(e[Di] = !0),
			ud.forEach(function (n) {
				n !== 'selectionchange' &&
					(xg.has(n) || xo(n, !1, e), xo(n, !0, e))
			})
		var t = e.nodeType === 9 ? e : e.ownerDocument
		t === null || t[Di] || ((t[Di] = !0), xo('selectionchange', !1, t))
	}
}
function nh(e, t, n, r) {
	switch (zd(t)) {
		case 1:
			var i = _v
			break
		case 4:
			i = jv
			break
		default:
			i = ma
	}
	;(n = i.bind(null, t, n, e)),
		(i = void 0),
		!al ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1)
}
function Po(e, t, n, r, i) {
	var s = r
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return
			var o = r.tag
			if (o === 3 || o === 4) {
				var l = r.stateNode.containerInfo
				if (l === i || (l.nodeType === 8 && l.parentNode === i)) break
				if (o === 4)
					for (o = r.return; o !== null; ) {
						var a = o.tag
						if (
							(a === 3 || a === 4) &&
							((a = o.stateNode.containerInfo),
							a === i || (a.nodeType === 8 && a.parentNode === i))
						)
							return
						o = o.return
					}
				for (; l !== null; ) {
					if (((o = vn(l)), o === null)) return
					if (((a = o.tag), a === 5 || a === 6)) {
						r = s = o
						continue e
					}
					l = l.parentNode
				}
			}
			r = r.return
		}
	Td(function () {
		var u = s,
			c = fa(n),
			f = []
		e: {
			var d = eh.get(e)
			if (d !== void 0) {
				var v = ga,
					g = e
				switch (e) {
					case 'keypress':
						if (Hi(n) === 0) break e
					case 'keydown':
					case 'keyup':
						v = Zv
						break
					case 'focusin':
						;(g = 'focus'), (v = mo)
						break
					case 'focusout':
						;(g = 'blur'), (v = mo)
						break
					case 'beforeblur':
					case 'afterblur':
						v = mo
						break
					case 'click':
						if (n.button === 2) break e
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						v = Bu
						break
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						v = zv
						break
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						v = eg
						break
					case Xd:
					case Zd:
					case qd:
						v = $v
						break
					case Jd:
						v = ng
						break
					case 'scroll':
						v = Fv
						break
					case 'wheel':
						v = ig
						break
					case 'copy':
					case 'cut':
					case 'paste':
						v = Hv
						break
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						v = $u
				}
				var y = (t & 4) !== 0,
					k = !y && e === 'scroll',
					p = y ? (d !== null ? d + 'Capture' : null) : d
				y = []
				for (var h = u, m; h !== null; ) {
					m = h
					var w = m.stateNode
					if (
						(m.tag === 5 &&
							w !== null &&
							((m = w),
							p !== null &&
								((w = Gr(h, p)),
								w != null && y.push(qr(h, w, m)))),
						k)
					)
						break
					h = h.return
				}
				0 < y.length &&
					((d = new v(d, g, null, n, c)),
					f.push({ event: d, listeners: y }))
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((d = e === 'mouseover' || e === 'pointerover'),
					(v = e === 'mouseout' || e === 'pointerout'),
					d &&
						n !== ol &&
						(g = n.relatedTarget || n.fromElement) &&
						(vn(g) || g[Dt]))
				)
					break e
				if (
					(v || d) &&
					((d =
						c.window === c
							? c
							: (d = c.ownerDocument)
							? d.defaultView || d.parentWindow
							: window),
					v
						? ((g = n.relatedTarget || n.toElement),
						  (v = u),
						  (g = g ? vn(g) : null),
						  g !== null &&
								((k = Dn(g)),
								g !== k || (g.tag !== 5 && g.tag !== 6)) &&
								(g = null))
						: ((v = null), (g = u)),
					v !== g)
				) {
					if (
						((y = Bu),
						(w = 'onMouseLeave'),
						(p = 'onMouseEnter'),
						(h = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((y = $u),
							(w = 'onPointerLeave'),
							(p = 'onPointerEnter'),
							(h = 'pointer')),
						(k = v == null ? d : jn(v)),
						(m = g == null ? d : jn(g)),
						(d = new y(w, h + 'leave', v, n, c)),
						(d.target = k),
						(d.relatedTarget = m),
						(w = null),
						vn(c) === u &&
							((y = new y(p, h + 'enter', g, n, c)),
							(y.target = m),
							(y.relatedTarget = k),
							(w = y)),
						(k = w),
						v && g)
					)
						t: {
							for (y = v, p = g, h = 0, m = y; m; m = Rn(m)) h++
							for (m = 0, w = p; w; w = Rn(w)) m++
							for (; 0 < h - m; ) (y = Rn(y)), h--
							for (; 0 < m - h; ) (p = Rn(p)), m--
							for (; h--; ) {
								if (
									y === p ||
									(p !== null && y === p.alternate)
								)
									break t
								;(y = Rn(y)), (p = Rn(p))
							}
							y = null
						}
					else y = null
					v !== null && Ju(f, d, v, y, !1),
						g !== null && k !== null && Ju(f, k, g, y, !0)
				}
			}
			e: {
				if (
					((d = u ? jn(u) : window),
					(v = d.nodeName && d.nodeName.toLowerCase()),
					v === 'select' || (v === 'input' && d.type === 'file'))
				)
					var x = fg
				else if (Gu(d))
					if (Gd) x = mg
					else {
						x = hg
						var A = dg
					}
				else
					(v = d.nodeName) &&
						v.toLowerCase() === 'input' &&
						(d.type === 'checkbox' || d.type === 'radio') &&
						(x = pg)
				if (x && (x = x(e, u))) {
					Hd(f, x, n, c)
					break e
				}
				A && A(e, d, u),
					e === 'focusout' &&
						(A = d._wrapperState) &&
						A.controlled &&
						d.type === 'number' &&
						tl(d, 'number', d.value)
			}
			switch (((A = u ? jn(u) : window), e)) {
				case 'focusin':
					;(Gu(A) || A.contentEditable === 'true') &&
						((Nn = A), (hl = u), (Nr = null))
					break
				case 'focusout':
					Nr = hl = Nn = null
					break
				case 'mousedown':
					pl = !0
					break
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					;(pl = !1), Xu(f, n, c)
					break
				case 'selectionchange':
					if (yg) break
				case 'keydown':
				case 'keyup':
					Xu(f, n, c)
			}
			var D
			if (wa)
				e: {
					switch (e) {
						case 'compositionstart':
							var E = 'onCompositionStart'
							break e
						case 'compositionend':
							E = 'onCompositionEnd'
							break e
						case 'compositionupdate':
							E = 'onCompositionUpdate'
							break e
					}
					E = void 0
				}
			else
				On
					? $d(e, n) && (E = 'onCompositionEnd')
					: e === 'keydown' &&
					  n.keyCode === 229 &&
					  (E = 'onCompositionStart')
			E &&
				(Ud &&
					n.locale !== 'ko' &&
					(On || E !== 'onCompositionStart'
						? E === 'onCompositionEnd' && On && (D = Bd())
						: ((Ut = c),
						  (va = 'value' in Ut ? Ut.value : Ut.textContent),
						  (On = !0))),
				(A = as(u, E)),
				0 < A.length &&
					((E = new Uu(E, e, null, n, c)),
					f.push({ event: E, listeners: A }),
					D
						? (E.data = D)
						: ((D = Wd(n)), D !== null && (E.data = D)))),
				(D = og ? lg(e, n) : ag(e, n)) &&
					((u = as(u, 'onBeforeInput')),
					0 < u.length &&
						((c = new Uu(
							'onBeforeInput',
							'beforeinput',
							null,
							n,
							c
						)),
						f.push({ event: c, listeners: u }),
						(c.data = D)))
		}
		th(f, t)
	})
}
function qr(e, t, n) {
	return { instance: e, listener: t, currentTarget: n }
}
function as(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var i = e,
			s = i.stateNode
		i.tag === 5 &&
			s !== null &&
			((i = s),
			(s = Gr(e, n)),
			s != null && r.unshift(qr(e, s, i)),
			(s = Gr(e, t)),
			s != null && r.push(qr(e, s, i))),
			(e = e.return)
	}
	return r
}
function Rn(e) {
	if (e === null) return null
	do e = e.return
	while (e && e.tag !== 5)
	return e || null
}
function Ju(e, t, n, r, i) {
	for (var s = t._reactName, o = []; n !== null && n !== r; ) {
		var l = n,
			a = l.alternate,
			u = l.stateNode
		if (a !== null && a === r) break
		l.tag === 5 &&
			u !== null &&
			((l = u),
			i
				? ((a = Gr(n, s)), a != null && o.unshift(qr(n, a, l)))
				: i || ((a = Gr(n, s)), a != null && o.push(qr(n, a, l)))),
			(n = n.return)
	}
	o.length !== 0 && e.push({ event: t, listeners: o })
}
var Pg = /\r\n?/g,
	kg = /\u0000|\uFFFD/g
function ec(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			Pg,
			`
`
		)
		.replace(kg, '')
}
function Ri(e, t, n) {
	if (((t = ec(t)), ec(e) !== t && n)) throw Error(T(425))
}
function us() {}
var ml = null,
	vl = null
function gl(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	)
}
var yl = typeof setTimeout == 'function' ? setTimeout : void 0,
	Cg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	tc = typeof Promise == 'function' ? Promise : void 0,
	Tg =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof tc < 'u'
			? function (e) {
					return tc.resolve(null).then(e).catch(Eg)
			  }
			: yl
function Eg(e) {
	setTimeout(function () {
		throw e
	})
}
function ko(e, t) {
	var n = t,
		r = 0
	do {
		var i = n.nextSibling
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(i), Qr(t)
					return
				}
				r--
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++
		n = i
	} while (n)
	Qr(t)
}
function bt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType
		if (t === 1 || t === 3) break
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
			if (t === '/$') return null
		}
	}
	return e
}
function nc(e) {
	e = e.previousSibling
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e
				t--
			} else n === '/$' && t++
		}
		e = e.previousSibling
	}
	return null
}
var fr = Math.random().toString(36).slice(2),
	dt = '__reactFiber$' + fr,
	Jr = '__reactProps$' + fr,
	Dt = '__reactContainer$' + fr,
	wl = '__reactEvents$' + fr,
	Mg = '__reactListeners$' + fr,
	Ag = '__reactHandles$' + fr
function vn(e) {
	var t = e[dt]
	if (t) return t
	for (var n = e.parentNode; n; ) {
		if ((t = n[Dt] || n[dt])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = nc(e); e !== null; ) {
					if ((n = e[dt])) return n
					e = nc(e)
				}
			return t
		}
		;(e = n), (n = e.parentNode)
	}
	return null
}
function pi(e) {
	return (
		(e = e[dt] || e[Dt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
			? null
			: e
	)
}
function jn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode
	throw Error(T(33))
}
function js(e) {
	return e[Jr] || null
}
var Sl = [],
	Fn = -1
function sn(e) {
	return { current: e }
}
function q(e) {
	0 > Fn || ((e.current = Sl[Fn]), (Sl[Fn] = null), Fn--)
}
function K(e, t) {
	Fn++, (Sl[Fn] = e.current), (e.current = t)
}
var en = {},
	Ee = sn(en),
	Ne = sn(!1),
	kn = en
function tr(e, t) {
	var n = e.type.contextTypes
	if (!n) return en
	var r = e.stateNode
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext
	var i = {},
		s
	for (s in n) i[s] = t[s]
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	)
}
function _e(e) {
	return (e = e.childContextTypes), e != null
}
function cs() {
	q(Ne), q(Ee)
}
function rc(e, t, n) {
	if (Ee.current !== en) throw Error(T(168))
	K(Ee, t), K(Ne, n)
}
function rh(e, t, n) {
	var r = e.stateNode
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n
	r = r.getChildContext()
	for (var i in r) if (!(i in t)) throw Error(T(108, dv(e) || 'Unknown', i))
	return re({}, n, r)
}
function fs(e) {
	return (
		(e =
			((e = e.stateNode) &&
				e.__reactInternalMemoizedMergedChildContext) ||
			en),
		(kn = Ee.current),
		K(Ee, e),
		K(Ne, Ne.current),
		!0
	)
}
function ic(e, t, n) {
	var r = e.stateNode
	if (!r) throw Error(T(169))
	n
		? ((e = rh(e, t, kn)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  q(Ne),
		  q(Ee),
		  K(Ee, e))
		: q(Ne),
		K(Ne, n)
}
var St = null,
	Fs = !1,
	Co = !1
function ih(e) {
	St === null ? (St = [e]) : St.push(e)
}
function Dg(e) {
	;(Fs = !0), ih(e)
}
function on() {
	if (!Co && St !== null) {
		Co = !0
		var e = 0,
			t = b
		try {
			var n = St
			for (b = 1; e < n.length; e++) {
				var r = n[e]
				do r = r(!0)
				while (r !== null)
			}
			;(St = null), (Fs = !1)
		} catch (i) {
			throw (St !== null && (St = St.slice(e + 1)), Dd(da, on), i)
		} finally {
			;(b = t), (Co = !1)
		}
	}
	return null
}
var In = [],
	zn = 0,
	ds = null,
	hs = 0,
	be = [],
	Ke = 0,
	Cn = null,
	xt = 1,
	Pt = ''
function dn(e, t) {
	;(In[zn++] = hs), (In[zn++] = ds), (ds = e), (hs = t)
}
function sh(e, t, n) {
	;(be[Ke++] = xt), (be[Ke++] = Pt), (be[Ke++] = Cn), (Cn = e)
	var r = xt
	e = Pt
	var i = 32 - ot(r) - 1
	;(r &= ~(1 << i)), (n += 1)
	var s = 32 - ot(t) + i
	if (30 < s) {
		var o = i - (i % 5)
		;(s = (r & ((1 << o) - 1)).toString(32)),
			(r >>= o),
			(i -= o),
			(xt = (1 << (32 - ot(t) + i)) | (n << i) | r),
			(Pt = s + e)
	} else (xt = (1 << s) | (n << i) | r), (Pt = e)
}
function xa(e) {
	e.return !== null && (dn(e, 1), sh(e, 1, 0))
}
function Pa(e) {
	for (; e === ds; )
		(ds = In[--zn]), (In[zn] = null), (hs = In[--zn]), (In[zn] = null)
	for (; e === Cn; )
		(Cn = be[--Ke]),
			(be[Ke] = null),
			(Pt = be[--Ke]),
			(be[Ke] = null),
			(xt = be[--Ke]),
			(be[Ke] = null)
}
var ze = null,
	Ie = null,
	J = !1,
	st = null
function oh(e, t) {
	var n = Qe(5, null, null, 0)
	;(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function sc(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type
			return (
				(t =
					t.nodeType !== 1 ||
					n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (ze = e), (Ie = bt(t.firstChild)), !0)
					: !1
			)
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (ze = e), (Ie = null), !0) : !1
			)
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Cn !== null ? { id: xt, overflow: Pt } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = Qe(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (ze = e),
					  (Ie = null),
					  !0)
					: !1
			)
		default:
			return !1
	}
}
function xl(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Pl(e) {
	if (J) {
		var t = Ie
		if (t) {
			var n = t
			if (!sc(e, t)) {
				if (xl(e)) throw Error(T(418))
				t = bt(n.nextSibling)
				var r = ze
				t && sc(e, t)
					? oh(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (J = !1), (ze = e))
			}
		} else {
			if (xl(e)) throw Error(T(418))
			;(e.flags = (e.flags & -4097) | 2), (J = !1), (ze = e)
		}
	}
}
function oc(e) {
	for (
		e = e.return;
		e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

	)
		e = e.return
	ze = e
}
function Li(e) {
	if (e !== ze) return !1
	if (!J) return oc(e), (J = !0), !1
	var t
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !gl(e.type, e.memoizedProps))),
		t && (t = Ie))
	) {
		if (xl(e)) throw (lh(), Error(T(418)))
		for (; t; ) oh(e, t), (t = bt(t.nextSibling))
	}
	if ((oc(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(T(317))
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data
					if (n === '/$') {
						if (t === 0) {
							Ie = bt(e.nextSibling)
							break e
						}
						t--
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++
				}
				e = e.nextSibling
			}
			Ie = null
		}
	} else Ie = ze ? bt(e.stateNode.nextSibling) : null
	return !0
}
function lh() {
	for (var e = Ie; e; ) e = bt(e.nextSibling)
}
function nr() {
	;(Ie = ze = null), (J = !1)
}
function ka(e) {
	st === null ? (st = [e]) : st.push(e)
}
var Rg = Ot.ReactCurrentBatchConfig
function Sr(e, t, n) {
	if (
		((e = n.ref),
		e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(T(309))
				var r = n.stateNode
			}
			if (!r) throw Error(T(147, e))
			var i = r,
				s = '' + e
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === s
				? t.ref
				: ((t = function (o) {
						var l = i.refs
						o === null ? delete l[s] : (l[s] = o)
				  }),
				  (t._stringRef = s),
				  t)
		}
		if (typeof e != 'string') throw Error(T(284))
		if (!n._owner) throw Error(T(290, e))
	}
	return e
}
function Vi(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			T(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	)
}
function lc(e) {
	var t = e._init
	return t(e._payload)
}
function ah(e) {
	function t(p, h) {
		if (e) {
			var m = p.deletions
			m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h)
		}
	}
	function n(p, h) {
		if (!e) return null
		for (; h !== null; ) t(p, h), (h = h.sibling)
		return null
	}
	function r(p, h) {
		for (p = new Map(); h !== null; )
			h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
				(h = h.sibling)
		return p
	}
	function i(p, h) {
		return (p = Xt(p, h)), (p.index = 0), (p.sibling = null), p
	}
	function s(p, h, m) {
		return (
			(p.index = m),
			e
				? ((m = p.alternate),
				  m !== null
						? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
						: ((p.flags |= 2), h))
				: ((p.flags |= 1048576), h)
		)
	}
	function o(p) {
		return e && p.alternate === null && (p.flags |= 2), p
	}
	function l(p, h, m, w) {
		return h === null || h.tag !== 6
			? ((h = Lo(m, p.mode, w)), (h.return = p), h)
			: ((h = i(h, m)), (h.return = p), h)
	}
	function a(p, h, m, w) {
		var x = m.type
		return x === Vn
			? c(p, h, m.props.children, w, m.key)
			: h !== null &&
			  (h.elementType === x ||
					(typeof x == 'object' &&
						x !== null &&
						x.$$typeof === Ft &&
						lc(x) === h.type))
			? ((w = i(h, m.props)), (w.ref = Sr(p, h, m)), (w.return = p), w)
			: ((w = Zi(m.type, m.key, m.props, null, p.mode, w)),
			  (w.ref = Sr(p, h, m)),
			  (w.return = p),
			  w)
	}
	function u(p, h, m, w) {
		return h === null ||
			h.tag !== 4 ||
			h.stateNode.containerInfo !== m.containerInfo ||
			h.stateNode.implementation !== m.implementation
			? ((h = Vo(m, p.mode, w)), (h.return = p), h)
			: ((h = i(h, m.children || [])), (h.return = p), h)
	}
	function c(p, h, m, w, x) {
		return h === null || h.tag !== 7
			? ((h = xn(m, p.mode, w, x)), (h.return = p), h)
			: ((h = i(h, m)), (h.return = p), h)
	}
	function f(p, h, m) {
		if ((typeof h == 'string' && h !== '') || typeof h == 'number')
			return (h = Lo('' + h, p.mode, m)), (h.return = p), h
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case xi:
					return (
						(m = Zi(h.type, h.key, h.props, null, p.mode, m)),
						(m.ref = Sr(p, null, h)),
						(m.return = p),
						m
					)
				case Ln:
					return (h = Vo(h, p.mode, m)), (h.return = p), h
				case Ft:
					var w = h._init
					return f(p, w(h._payload), m)
			}
			if (Tr(h) || mr(h))
				return (h = xn(h, p.mode, m, null)), (h.return = p), h
			Vi(p, h)
		}
		return null
	}
	function d(p, h, m, w) {
		var x = h !== null ? h.key : null
		if ((typeof m == 'string' && m !== '') || typeof m == 'number')
			return x !== null ? null : l(p, h, '' + m, w)
		if (typeof m == 'object' && m !== null) {
			switch (m.$$typeof) {
				case xi:
					return m.key === x ? a(p, h, m, w) : null
				case Ln:
					return m.key === x ? u(p, h, m, w) : null
				case Ft:
					return (x = m._init), d(p, h, x(m._payload), w)
			}
			if (Tr(m) || mr(m)) return x !== null ? null : c(p, h, m, w, null)
			Vi(p, m)
		}
		return null
	}
	function v(p, h, m, w, x) {
		if ((typeof w == 'string' && w !== '') || typeof w == 'number')
			return (p = p.get(m) || null), l(h, p, '' + w, x)
		if (typeof w == 'object' && w !== null) {
			switch (w.$$typeof) {
				case xi:
					return (
						(p = p.get(w.key === null ? m : w.key) || null),
						a(h, p, w, x)
					)
				case Ln:
					return (
						(p = p.get(w.key === null ? m : w.key) || null),
						u(h, p, w, x)
					)
				case Ft:
					var A = w._init
					return v(p, h, m, A(w._payload), x)
			}
			if (Tr(w) || mr(w))
				return (p = p.get(m) || null), c(h, p, w, x, null)
			Vi(h, w)
		}
		return null
	}
	function g(p, h, m, w) {
		for (
			var x = null, A = null, D = h, E = (h = 0), B = null;
			D !== null && E < m.length;
			E++
		) {
			D.index > E ? ((B = D), (D = null)) : (B = D.sibling)
			var _ = d(p, D, m[E], w)
			if (_ === null) {
				D === null && (D = B)
				break
			}
			e && D && _.alternate === null && t(p, D),
				(h = s(_, h, E)),
				A === null ? (x = _) : (A.sibling = _),
				(A = _),
				(D = B)
		}
		if (E === m.length) return n(p, D), J && dn(p, E), x
		if (D === null) {
			for (; E < m.length; E++)
				(D = f(p, m[E], w)),
					D !== null &&
						((h = s(D, h, E)),
						A === null ? (x = D) : (A.sibling = D),
						(A = D))
			return J && dn(p, E), x
		}
		for (D = r(p, D); E < m.length; E++)
			(B = v(D, p, E, m[E], w)),
				B !== null &&
					(e &&
						B.alternate !== null &&
						D.delete(B.key === null ? E : B.key),
					(h = s(B, h, E)),
					A === null ? (x = B) : (A.sibling = B),
					(A = B))
		return (
			e &&
				D.forEach(function (F) {
					return t(p, F)
				}),
			J && dn(p, E),
			x
		)
	}
	function y(p, h, m, w) {
		var x = mr(m)
		if (typeof x != 'function') throw Error(T(150))
		if (((m = x.call(m)), m == null)) throw Error(T(151))
		for (
			var A = (x = null), D = h, E = (h = 0), B = null, _ = m.next();
			D !== null && !_.done;
			E++, _ = m.next()
		) {
			D.index > E ? ((B = D), (D = null)) : (B = D.sibling)
			var F = d(p, D, _.value, w)
			if (F === null) {
				D === null && (D = B)
				break
			}
			e && D && F.alternate === null && t(p, D),
				(h = s(F, h, E)),
				A === null ? (x = F) : (A.sibling = F),
				(A = F),
				(D = B)
		}
		if (_.done) return n(p, D), J && dn(p, E), x
		if (D === null) {
			for (; !_.done; E++, _ = m.next())
				(_ = f(p, _.value, w)),
					_ !== null &&
						((h = s(_, h, E)),
						A === null ? (x = _) : (A.sibling = _),
						(A = _))
			return J && dn(p, E), x
		}
		for (D = r(p, D); !_.done; E++, _ = m.next())
			(_ = v(D, p, E, _.value, w)),
				_ !== null &&
					(e &&
						_.alternate !== null &&
						D.delete(_.key === null ? E : _.key),
					(h = s(_, h, E)),
					A === null ? (x = _) : (A.sibling = _),
					(A = _))
		return (
			e &&
				D.forEach(function (ce) {
					return t(p, ce)
				}),
			J && dn(p, E),
			x
		)
	}
	function k(p, h, m, w) {
		if (
			(typeof m == 'object' &&
				m !== null &&
				m.type === Vn &&
				m.key === null &&
				(m = m.props.children),
			typeof m == 'object' && m !== null)
		) {
			switch (m.$$typeof) {
				case xi:
					e: {
						for (var x = m.key, A = h; A !== null; ) {
							if (A.key === x) {
								if (((x = m.type), x === Vn)) {
									if (A.tag === 7) {
										n(p, A.sibling),
											(h = i(A, m.props.children)),
											(h.return = p),
											(p = h)
										break e
									}
								} else if (
									A.elementType === x ||
									(typeof x == 'object' &&
										x !== null &&
										x.$$typeof === Ft &&
										lc(x) === A.type)
								) {
									n(p, A.sibling),
										(h = i(A, m.props)),
										(h.ref = Sr(p, A, m)),
										(h.return = p),
										(p = h)
									break e
								}
								n(p, A)
								break
							} else t(p, A)
							A = A.sibling
						}
						m.type === Vn
							? ((h = xn(m.props.children, p.mode, w, m.key)),
							  (h.return = p),
							  (p = h))
							: ((w = Zi(
									m.type,
									m.key,
									m.props,
									null,
									p.mode,
									w
							  )),
							  (w.ref = Sr(p, h, m)),
							  (w.return = p),
							  (p = w))
					}
					return o(p)
				case Ln:
					e: {
						for (A = m.key; h !== null; ) {
							if (h.key === A)
								if (
									h.tag === 4 &&
									h.stateNode.containerInfo ===
										m.containerInfo &&
									h.stateNode.implementation ===
										m.implementation
								) {
									n(p, h.sibling),
										(h = i(h, m.children || [])),
										(h.return = p),
										(p = h)
									break e
								} else {
									n(p, h)
									break
								}
							else t(p, h)
							h = h.sibling
						}
						;(h = Vo(m, p.mode, w)), (h.return = p), (p = h)
					}
					return o(p)
				case Ft:
					return (A = m._init), k(p, h, A(m._payload), w)
			}
			if (Tr(m)) return g(p, h, m, w)
			if (mr(m)) return y(p, h, m, w)
			Vi(p, m)
		}
		return (typeof m == 'string' && m !== '') || typeof m == 'number'
			? ((m = '' + m),
			  h !== null && h.tag === 6
					? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
					: (n(p, h),
					  (h = Lo(m, p.mode, w)),
					  (h.return = p),
					  (p = h)),
			  o(p))
			: n(p, h)
	}
	return k
}
var rr = ah(!0),
	uh = ah(!1),
	ps = sn(null),
	ms = null,
	Bn = null,
	Ca = null
function Ta() {
	Ca = Bn = ms = null
}
function Ea(e) {
	var t = ps.current
	q(ps), (e._currentValue = t)
}
function kl(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break
		e = e.return
	}
}
function qn(e, t) {
	;(ms = e),
		(Ca = Bn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Oe = !0), (e.firstContext = null))
}
function Xe(e) {
	var t = e._currentValue
	if (Ca !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
			if (ms === null) throw Error(T(308))
			;(Bn = e), (ms.dependencies = { lanes: 0, firstContext: e })
		} else Bn = Bn.next = e
	return t
}
var gn = null
function Ma(e) {
	gn === null ? (gn = [e]) : gn.push(e)
}
function ch(e, t, n, r) {
	var i = t.interleaved
	return (
		i === null ? ((n.next = n), Ma(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		Rt(e, r)
	)
}
function Rt(e, t) {
	e.lanes |= t
	var n = e.alternate
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return)
	return n.tag === 3 ? n.stateNode : null
}
var It = !1
function Aa(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	}
}
function fh(e, t) {
	;(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			})
}
function Ct(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	}
}
function Kt(e, t, n) {
	var r = e.updateQueue
	if (r === null) return null
	if (((r = r.shared), W & 2)) {
		var i = r.pending
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			Rt(e, n)
		)
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), Ma(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		Rt(e, n)
	)
}
function Gi(e, t, n) {
	if (
		((t = t.updateQueue),
		t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), ha(e, n)
	}
}
function ac(e, t) {
	var n = e.updateQueue,
		r = e.alternate
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			s = null
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var o = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				}
				s === null ? (i = s = o) : (s = s.next = o), (n = n.next)
			} while (n !== null)
			s === null ? (i = s = t) : (s = s.next = t)
		} else i = s = t
		;(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: s,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n)
		return
	}
	;(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t)
}
function vs(e, t, n, r) {
	var i = e.updateQueue
	It = !1
	var s = i.firstBaseUpdate,
		o = i.lastBaseUpdate,
		l = i.shared.pending
	if (l !== null) {
		i.shared.pending = null
		var a = l,
			u = a.next
		;(a.next = null), o === null ? (s = u) : (o.next = u), (o = a)
		var c = e.alternate
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== o &&
				(l === null ? (c.firstBaseUpdate = u) : (l.next = u),
				(c.lastBaseUpdate = a)))
	}
	if (s !== null) {
		var f = i.baseState
		;(o = 0), (c = u = a = null), (l = s)
		do {
			var d = l.lane,
				v = l.eventTime
			if ((r & d) === d) {
				c !== null &&
					(c = c.next =
						{
							eventTime: v,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						})
				e: {
					var g = e,
						y = l
					switch (((d = t), (v = n), y.tag)) {
						case 1:
							if (((g = y.payload), typeof g == 'function')) {
								f = g.call(v, f, d)
								break e
							}
							f = g
							break e
						case 3:
							g.flags = (g.flags & -65537) | 128
						case 0:
							if (
								((g = y.payload),
								(d =
									typeof g == 'function'
										? g.call(v, f, d)
										: g),
								d == null)
							)
								break e
							f = re({}, f, d)
							break e
						case 2:
							It = !0
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(d = i.effects),
					d === null ? (i.effects = [l]) : d.push(l))
			} else
				(v = {
					eventTime: v,
					lane: d,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null ? ((u = c = v), (a = f)) : (c = c.next = v),
					(o |= d)
			if (((l = l.next), l === null)) {
				if (((l = i.shared.pending), l === null)) break
				;(d = l),
					(l = d.next),
					(d.next = null),
					(i.lastBaseUpdate = d),
					(i.shared.pending = null)
			}
		} while (!0)
		if (
			(c === null && (a = f),
			(i.baseState = a),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t
			do (o |= i.lane), (i = i.next)
			while (i !== t)
		} else s === null && (i.shared.lanes = 0)
		;(En |= o), (e.lanes = o), (e.memoizedState = f)
	}
}
function uc(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function'))
					throw Error(T(191, i))
				i.call(r)
			}
		}
}
var mi = {},
	pt = sn(mi),
	ei = sn(mi),
	ti = sn(mi)
function yn(e) {
	if (e === mi) throw Error(T(174))
	return e
}
function Da(e, t) {
	switch ((K(ti, t), K(ei, e), K(pt, mi), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : rl(null, '')
			break
		default:
			;(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = rl(t, e))
	}
	q(pt), K(pt, t)
}
function ir() {
	q(pt), q(ei), q(ti)
}
function dh(e) {
	yn(ti.current)
	var t = yn(pt.current),
		n = rl(t, e.type)
	t !== n && (K(ei, e), K(pt, n))
}
function Ra(e) {
	ei.current === e && (q(pt), q(ei))
}
var ee = sn(0)
function gs(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState
			if (
				n !== null &&
				((n = n.dehydrated),
				n === null || n.data === '$?' || n.data === '$!')
			)
				return t
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t
		} else if (t.child !== null) {
			;(t.child.return = t), (t = t.child)
			continue
		}
		if (t === e) break
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null
			t = t.return
		}
		;(t.sibling.return = t.return), (t = t.sibling)
	}
	return null
}
var To = []
function La() {
	for (var e = 0; e < To.length; e++)
		To[e]._workInProgressVersionPrimary = null
	To.length = 0
}
var bi = Ot.ReactCurrentDispatcher,
	Eo = Ot.ReactCurrentBatchConfig,
	Tn = 0,
	ne = null,
	de = null,
	pe = null,
	ys = !1,
	_r = !1,
	ni = 0,
	Lg = 0
function Se() {
	throw Error(T(321))
}
function Va(e, t) {
	if (t === null) return !1
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!at(e[n], t[n])) return !1
	return !0
}
function Oa(e, t, n, r, i, s) {
	if (
		((Tn = s),
		(ne = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(bi.current = e === null || e.memoizedState === null ? _g : jg),
		(e = n(r, i)),
		_r)
	) {
		s = 0
		do {
			if (((_r = !1), (ni = 0), 25 <= s)) throw Error(T(301))
			;(s += 1),
				(pe = de = null),
				(t.updateQueue = null),
				(bi.current = Fg),
				(e = n(r, i))
		} while (_r)
	}
	if (
		((bi.current = ws),
		(t = de !== null && de.next !== null),
		(Tn = 0),
		(pe = de = ne = null),
		(ys = !1),
		t)
	)
		throw Error(T(300))
	return e
}
function Na() {
	var e = ni !== 0
	return (ni = 0), e
}
function ft() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	}
	return pe === null ? (ne.memoizedState = pe = e) : (pe = pe.next = e), pe
}
function Ze() {
	if (de === null) {
		var e = ne.alternate
		e = e !== null ? e.memoizedState : null
	} else e = de.next
	var t = pe === null ? ne.memoizedState : pe.next
	if (t !== null) (pe = t), (de = e)
	else {
		if (e === null) throw Error(T(310))
		;(de = e),
			(e = {
				memoizedState: de.memoizedState,
				baseState: de.baseState,
				baseQueue: de.baseQueue,
				queue: de.queue,
				next: null,
			}),
			pe === null ? (ne.memoizedState = pe = e) : (pe = pe.next = e)
	}
	return pe
}
function ri(e, t) {
	return typeof t == 'function' ? t(e) : t
}
function Mo(e) {
	var t = Ze(),
		n = t.queue
	if (n === null) throw Error(T(311))
	n.lastRenderedReducer = e
	var r = de,
		i = r.baseQueue,
		s = n.pending
	if (s !== null) {
		if (i !== null) {
			var o = i.next
			;(i.next = s.next), (s.next = o)
		}
		;(r.baseQueue = i = s), (n.pending = null)
	}
	if (i !== null) {
		;(s = i.next), (r = r.baseState)
		var l = (o = null),
			a = null,
			u = s
		do {
			var c = u.lane
			if ((Tn & c) === c)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action))
			else {
				var f = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				}
				a === null ? ((l = a = f), (o = r)) : (a = a.next = f),
					(ne.lanes |= c),
					(En |= c)
			}
			u = u.next
		} while (u !== null && u !== s)
		a === null ? (o = r) : (a.next = l),
			at(r, t.memoizedState) || (Oe = !0),
			(t.memoizedState = r),
			(t.baseState = o),
			(t.baseQueue = a),
			(n.lastRenderedState = r)
	}
	if (((e = n.interleaved), e !== null)) {
		i = e
		do (s = i.lane), (ne.lanes |= s), (En |= s), (i = i.next)
		while (i !== e)
	} else i === null && (n.lanes = 0)
	return [t.memoizedState, n.dispatch]
}
function Ao(e) {
	var t = Ze(),
		n = t.queue
	if (n === null) throw Error(T(311))
	n.lastRenderedReducer = e
	var r = n.dispatch,
		i = n.pending,
		s = t.memoizedState
	if (i !== null) {
		n.pending = null
		var o = (i = i.next)
		do (s = e(s, o.action)), (o = o.next)
		while (o !== i)
		at(s, t.memoizedState) || (Oe = !0),
			(t.memoizedState = s),
			t.baseQueue === null && (t.baseState = s),
			(n.lastRenderedState = s)
	}
	return [s, r]
}
function hh() {}
function ph(e, t) {
	var n = ne,
		r = Ze(),
		i = t(),
		s = !at(r.memoizedState, i)
	if (
		(s && ((r.memoizedState = i), (Oe = !0)),
		(r = r.queue),
		_a(gh.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || s || (pe !== null && pe.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			ii(9, vh.bind(null, n, r, i, t), void 0, null),
			me === null)
		)
			throw Error(T(349))
		Tn & 30 || mh(n, t, i)
	}
	return i
}
function mh(e, t, n) {
	;(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = ne.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (ne.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function vh(e, t, n, r) {
	;(t.value = n), (t.getSnapshot = r), yh(t) && wh(e)
}
function gh(e, t, n) {
	return n(function () {
		yh(t) && wh(e)
	})
}
function yh(e) {
	var t = e.getSnapshot
	e = e.value
	try {
		var n = t()
		return !at(e, n)
	} catch {
		return !0
	}
}
function wh(e) {
	var t = Rt(e, 1)
	t !== null && lt(t, e, 1, -1)
}
function cc(e) {
	var t = ft()
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ri,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = Ng.bind(null, ne, e)),
		[t.memoizedState, e]
	)
}
function ii(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = ne.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (ne.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next),
					  (n.next = e),
					  (e.next = r),
					  (t.lastEffect = e))),
		e
	)
}
function Sh() {
	return Ze().memoizedState
}
function Ki(e, t, n, r) {
	var i = ft()
	;(ne.flags |= e),
		(i.memoizedState = ii(1 | t, n, void 0, r === void 0 ? null : r))
}
function Is(e, t, n, r) {
	var i = Ze()
	r = r === void 0 ? null : r
	var s = void 0
	if (de !== null) {
		var o = de.memoizedState
		if (((s = o.destroy), r !== null && Va(r, o.deps))) {
			i.memoizedState = ii(t, n, s, r)
			return
		}
	}
	;(ne.flags |= e), (i.memoizedState = ii(1 | t, n, s, r))
}
function fc(e, t) {
	return Ki(8390656, 8, e, t)
}
function _a(e, t) {
	return Is(2048, 8, e, t)
}
function xh(e, t) {
	return Is(4, 2, e, t)
}
function Ph(e, t) {
	return Is(4, 4, e, t)
}
function kh(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null)
			}
		)
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null
			}
		)
}
function Ch(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Is(4, 4, kh.bind(null, t, e), n)
	)
}
function ja() {}
function Th(e, t) {
	var n = Ze()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && Va(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e)
}
function Eh(e, t) {
	var n = Ze()
	t = t === void 0 ? null : t
	var r = n.memoizedState
	return r !== null && t !== null && Va(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e)
}
function Mh(e, t, n) {
	return Tn & 21
		? (at(n, t) ||
				((n = Vd()), (ne.lanes |= n), (En |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Oe = !0)),
		  (e.memoizedState = n))
}
function Vg(e, t) {
	var n = b
	;(b = n !== 0 && 4 > n ? n : 4), e(!0)
	var r = Eo.transition
	Eo.transition = {}
	try {
		e(!1), t()
	} finally {
		;(b = n), (Eo.transition = r)
	}
}
function Ah() {
	return Ze().memoizedState
}
function Og(e, t, n) {
	var r = Yt(e)
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Dh(e))
	)
		Rh(t, n)
	else if (((n = ch(e, t, n, r)), n !== null)) {
		var i = De()
		lt(n, e, r, i), Lh(n, t, r)
	}
}
function Ng(e, t, n) {
	var r = Yt(e),
		i = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}
	if (Dh(e)) Rh(t, i)
	else {
		var s = e.alternate
		if (
			e.lanes === 0 &&
			(s === null || s.lanes === 0) &&
			((s = t.lastRenderedReducer), s !== null)
		)
			try {
				var o = t.lastRenderedState,
					l = s(o, n)
				if (((i.hasEagerState = !0), (i.eagerState = l), at(l, o))) {
					var a = t.interleaved
					a === null
						? ((i.next = i), Ma(t))
						: ((i.next = a.next), (a.next = i)),
						(t.interleaved = i)
					return
				}
			} catch {
			} finally {
			}
		;(n = ch(e, t, i, r)),
			n !== null && ((i = De()), lt(n, e, r, i), Lh(n, t, r))
	}
}
function Dh(e) {
	var t = e.alternate
	return e === ne || (t !== null && t === ne)
}
function Rh(e, t) {
	_r = ys = !0
	var n = e.pending
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t)
}
function Lh(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes
		;(r &= e.pendingLanes), (n |= r), (t.lanes = n), ha(e, n)
	}
}
var ws = {
		readContext: Xe,
		useCallback: Se,
		useContext: Se,
		useEffect: Se,
		useImperativeHandle: Se,
		useInsertionEffect: Se,
		useLayoutEffect: Se,
		useMemo: Se,
		useReducer: Se,
		useRef: Se,
		useState: Se,
		useDebugValue: Se,
		useDeferredValue: Se,
		useTransition: Se,
		useMutableSource: Se,
		useSyncExternalStore: Se,
		useId: Se,
		unstable_isNewReconciler: !1,
	},
	_g = {
		readContext: Xe,
		useCallback: function (e, t) {
			return (ft().memoizedState = [e, t === void 0 ? null : t]), e
		},
		useContext: Xe,
		useEffect: fc,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Ki(4194308, 4, kh.bind(null, t, e), n)
			)
		},
		useLayoutEffect: function (e, t) {
			return Ki(4194308, 4, e, t)
		},
		useInsertionEffect: function (e, t) {
			return Ki(4, 2, e, t)
		},
		useMemo: function (e, t) {
			var n = ft()
			return (
				(t = t === void 0 ? null : t),
				(e = e()),
				(n.memoizedState = [e, t]),
				e
			)
		},
		useReducer: function (e, t, n) {
			var r = ft()
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = Og.bind(null, ne, e)),
				[r.memoizedState, e]
			)
		},
		useRef: function (e) {
			var t = ft()
			return (e = { current: e }), (t.memoizedState = e)
		},
		useState: cc,
		useDebugValue: ja,
		useDeferredValue: function (e) {
			return (ft().memoizedState = e)
		},
		useTransition: function () {
			var e = cc(!1),
				t = e[0]
			return (e = Vg.bind(null, e[1])), (ft().memoizedState = e), [t, e]
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = ne,
				i = ft()
			if (J) {
				if (n === void 0) throw Error(T(407))
				n = n()
			} else {
				if (((n = t()), me === null)) throw Error(T(349))
				Tn & 30 || mh(r, t, n)
			}
			i.memoizedState = n
			var s = { value: n, getSnapshot: t }
			return (
				(i.queue = s),
				fc(gh.bind(null, r, s, e), [e]),
				(r.flags |= 2048),
				ii(9, vh.bind(null, r, s, n, t), void 0, null),
				n
			)
		},
		useId: function () {
			var e = ft(),
				t = me.identifierPrefix
			if (J) {
				var n = Pt,
					r = xt
				;(n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = ni++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':')
			} else (n = Lg++), (t = ':' + t + 'r' + n.toString(32) + ':')
			return (e.memoizedState = t)
		},
		unstable_isNewReconciler: !1,
	},
	jg = {
		readContext: Xe,
		useCallback: Th,
		useContext: Xe,
		useEffect: _a,
		useImperativeHandle: Ch,
		useInsertionEffect: xh,
		useLayoutEffect: Ph,
		useMemo: Eh,
		useReducer: Mo,
		useRef: Sh,
		useState: function () {
			return Mo(ri)
		},
		useDebugValue: ja,
		useDeferredValue: function (e) {
			var t = Ze()
			return Mh(t, de.memoizedState, e)
		},
		useTransition: function () {
			var e = Mo(ri)[0],
				t = Ze().memoizedState
			return [e, t]
		},
		useMutableSource: hh,
		useSyncExternalStore: ph,
		useId: Ah,
		unstable_isNewReconciler: !1,
	},
	Fg = {
		readContext: Xe,
		useCallback: Th,
		useContext: Xe,
		useEffect: _a,
		useImperativeHandle: Ch,
		useInsertionEffect: xh,
		useLayoutEffect: Ph,
		useMemo: Eh,
		useReducer: Ao,
		useRef: Sh,
		useState: function () {
			return Ao(ri)
		},
		useDebugValue: ja,
		useDeferredValue: function (e) {
			var t = Ze()
			return de === null
				? (t.memoizedState = e)
				: Mh(t, de.memoizedState, e)
		},
		useTransition: function () {
			var e = Ao(ri)[0],
				t = Ze().memoizedState
			return [e, t]
		},
		useMutableSource: hh,
		useSyncExternalStore: ph,
		useId: Ah,
		unstable_isNewReconciler: !1,
	}
function rt(e, t) {
	if (e && e.defaultProps) {
		;(t = re({}, t)), (e = e.defaultProps)
		for (var n in e) t[n] === void 0 && (t[n] = e[n])
		return t
	}
	return t
}
function Cl(e, t, n, r) {
	;(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : re({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n)
}
var zs = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? Dn(e) === e : !1
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals
		var r = De(),
			i = Yt(e),
			s = Ct(r, i)
		;(s.payload = t),
			n != null && (s.callback = n),
			(t = Kt(e, s, i)),
			t !== null && (lt(t, e, i, r), Gi(t, e, i))
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals
		var r = De(),
			i = Yt(e),
			s = Ct(r, i)
		;(s.tag = 1),
			(s.payload = t),
			n != null && (s.callback = n),
			(t = Kt(e, s, i)),
			t !== null && (lt(t, e, i, r), Gi(t, e, i))
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals
		var n = De(),
			r = Yt(e),
			i = Ct(n, r)
		;(i.tag = 2),
			t != null && (i.callback = t),
			(t = Kt(e, i, r)),
			t !== null && (lt(t, e, r, n), Gi(t, e, r))
	},
}
function dc(e, t, n, r, i, s, o) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, s, o)
			: t.prototype && t.prototype.isPureReactComponent
			? !Xr(n, r) || !Xr(i, s)
			: !0
	)
}
function Vh(e, t, n) {
	var r = !1,
		i = en,
		s = t.contextType
	return (
		typeof s == 'object' && s !== null
			? (s = Xe(s))
			: ((i = _e(t) ? kn : Ee.current),
			  (r = t.contextTypes),
			  (s = (r = r != null) ? tr(e, i) : en)),
		(t = new t(n, s)),
		(e.memoizedState =
			t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = zs),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = s)),
		t
	)
}
function hc(e, t, n, r) {
	;(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && zs.enqueueReplaceState(t, t.state, null)
}
function Tl(e, t, n, r) {
	var i = e.stateNode
	;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), Aa(e)
	var s = t.contextType
	typeof s == 'object' && s !== null
		? (i.context = Xe(s))
		: ((s = _e(t) ? kn : Ee.current), (i.context = tr(e, s))),
		(i.state = e.memoizedState),
		(s = t.getDerivedStateFromProps),
		typeof s == 'function' && (Cl(e, t, s, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' &&
				typeof i.componentWillMount != 'function') ||
			((t = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && zs.enqueueReplaceState(i, i.state, null),
			vs(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function sr(e, t) {
	try {
		var n = '',
			r = t
		do (n += fv(r)), (r = r.return)
		while (r)
		var i = n
	} catch (s) {
		i =
			`
Error generating stack: ` +
			s.message +
			`
` +
			s.stack
	}
	return { value: e, source: t, stack: i, digest: null }
}
function Do(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function El(e, t) {
	try {
		console.error(t.value)
	} catch (n) {
		setTimeout(function () {
			throw n
		})
	}
}
var Ig = typeof WeakMap == 'function' ? WeakMap : Map
function Oh(e, t, n) {
	;(n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null })
	var r = t.value
	return (
		(n.callback = function () {
			xs || ((xs = !0), (jl = r)), El(e, t)
		}),
		n
	)
}
function Nh(e, t, n) {
	;(n = Ct(-1, n)), (n.tag = 3)
	var r = e.type.getDerivedStateFromError
	if (typeof r == 'function') {
		var i = t.value
		;(n.payload = function () {
			return r(i)
		}),
			(n.callback = function () {
				El(e, t)
			})
	}
	var s = e.stateNode
	return (
		s !== null &&
			typeof s.componentDidCatch == 'function' &&
			(n.callback = function () {
				El(e, t),
					typeof r != 'function' &&
						(Qt === null ? (Qt = new Set([this])) : Qt.add(this))
				var o = t.stack
				this.componentDidCatch(t.value, {
					componentStack: o !== null ? o : '',
				})
			}),
		n
	)
}
function pc(e, t, n) {
	var r = e.pingCache
	if (r === null) {
		r = e.pingCache = new Ig()
		var i = new Set()
		r.set(t, i)
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
	i.has(n) || (i.add(n), (e = qg.bind(null, e, t, n)), t.then(e, e))
}
function mc(e) {
	do {
		var t
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState),
				(t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e
		e = e.return
	} while (e !== null)
	return null
}
function vc(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = Ct(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
				  (n.lanes |= 1)),
		  e)
}
var zg = Ot.ReactCurrentOwner,
	Oe = !1
function Ae(e, t, n, r) {
	t.child = e === null ? uh(t, null, n, r) : rr(t, e.child, n, r)
}
function gc(e, t, n, r, i) {
	n = n.render
	var s = t.ref
	return (
		qn(t, i),
		(r = Oa(e, t, n, r, s, i)),
		(n = Na()),
		e !== null && !Oe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  Lt(e, t, i))
			: (J && n && xa(t), (t.flags |= 1), Ae(e, t, r, i), t.child)
	)
}
function yc(e, t, n, r, i) {
	if (e === null) {
		var s = n.type
		return typeof s == 'function' &&
			!Ha(s) &&
			s.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = s), _h(e, t, s, r, i))
			: ((e = Zi(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e))
	}
	if (((s = e.child), !(e.lanes & i))) {
		var o = s.memoizedProps
		if (
			((n = n.compare),
			(n = n !== null ? n : Xr),
			n(o, r) && e.ref === t.ref)
		)
			return Lt(e, t, i)
	}
	return (
		(t.flags |= 1),
		(e = Xt(s, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	)
}
function _h(e, t, n, r, i) {
	if (e !== null) {
		var s = e.memoizedProps
		if (Xr(s, r) && e.ref === t.ref)
			if (((Oe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
				e.flags & 131072 && (Oe = !0)
			else return (t.lanes = e.lanes), Lt(e, t, i)
	}
	return Ml(e, t, n, r, i)
}
function jh(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		s = e !== null ? e.memoizedState : null
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				K($n, Fe),
				(Fe |= n)
		else {
			if (!(n & 1073741824))
				return (
					(e = s !== null ? s.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					K($n, Fe),
					(Fe |= e),
					null
				)
			;(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				(r = s !== null ? s.baseLanes : n),
				K($n, Fe),
				(Fe |= r)
		}
	else
		s !== null
			? ((r = s.baseLanes | n), (t.memoizedState = null))
			: (r = n),
			K($n, Fe),
			(Fe |= r)
	return Ae(e, t, i, n), t.child
}
function Fh(e, t) {
	var n = t.ref
	;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152))
}
function Ml(e, t, n, r, i) {
	var s = _e(n) ? kn : Ee.current
	return (
		(s = tr(t, s)),
		qn(t, i),
		(n = Oa(e, t, n, r, s, i)),
		(r = Na()),
		e !== null && !Oe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  Lt(e, t, i))
			: (J && r && xa(t), (t.flags |= 1), Ae(e, t, n, i), t.child)
	)
}
function wc(e, t, n, r, i) {
	if (_e(n)) {
		var s = !0
		fs(t)
	} else s = !1
	if ((qn(t, i), t.stateNode === null))
		Qi(e, t), Vh(t, n, r), Tl(t, n, r, i), (r = !0)
	else if (e === null) {
		var o = t.stateNode,
			l = t.memoizedProps
		o.props = l
		var a = o.context,
			u = n.contextType
		typeof u == 'object' && u !== null
			? (u = Xe(u))
			: ((u = _e(n) ? kn : Ee.current), (u = tr(t, u)))
		var c = n.getDerivedStateFromProps,
			f =
				typeof c == 'function' ||
				typeof o.getSnapshotBeforeUpdate == 'function'
		f ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((l !== r || a !== u) && hc(t, o, r, u)),
			(It = !1)
		var d = t.memoizedState
		;(o.state = d),
			vs(t, r, o, i),
			(a = t.memoizedState),
			l !== r || d !== a || Ne.current || It
				? (typeof c == 'function' &&
						(Cl(t, n, c, r), (a = t.memoizedState)),
				  (l = It || dc(t, n, l, r, d, a, u))
						? (f ||
								(typeof o.UNSAFE_componentWillMount !=
									'function' &&
									typeof o.componentWillMount !=
										'function') ||
								(typeof o.componentWillMount == 'function' &&
									o.componentWillMount(),
								typeof o.UNSAFE_componentWillMount ==
									'function' &&
									o.UNSAFE_componentWillMount()),
						  typeof o.componentDidMount == 'function' &&
								(t.flags |= 4194308))
						: (typeof o.componentDidMount == 'function' &&
								(t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = a)),
				  (o.props = r),
				  (o.state = a),
				  (o.context = u),
				  (r = l))
				: (typeof o.componentDidMount == 'function' &&
						(t.flags |= 4194308),
				  (r = !1))
	} else {
		;(o = t.stateNode),
			fh(e, t),
			(l = t.memoizedProps),
			(u = t.type === t.elementType ? l : rt(t.type, l)),
			(o.props = u),
			(f = t.pendingProps),
			(d = o.context),
			(a = n.contextType),
			typeof a == 'object' && a !== null
				? (a = Xe(a))
				: ((a = _e(n) ? kn : Ee.current), (a = tr(t, a)))
		var v = n.getDerivedStateFromProps
		;(c =
			typeof v == 'function' ||
			typeof o.getSnapshotBeforeUpdate == 'function') ||
			(typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof o.componentWillReceiveProps != 'function') ||
			((l !== f || d !== a) && hc(t, o, r, a)),
			(It = !1),
			(d = t.memoizedState),
			(o.state = d),
			vs(t, r, o, i)
		var g = t.memoizedState
		l !== f || d !== g || Ne.current || It
			? (typeof v == 'function' &&
					(Cl(t, n, v, r), (g = t.memoizedState)),
			  (u = It || dc(t, n, u, r, d, g, a) || !1)
					? (c ||
							(typeof o.UNSAFE_componentWillUpdate !=
								'function' &&
								typeof o.componentWillUpdate != 'function') ||
							(typeof o.componentWillUpdate == 'function' &&
								o.componentWillUpdate(r, g, a),
							typeof o.UNSAFE_componentWillUpdate == 'function' &&
								o.UNSAFE_componentWillUpdate(r, g, a)),
					  typeof o.componentDidUpdate == 'function' &&
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate == 'function' &&
							(t.flags |= 1024))
					: (typeof o.componentDidUpdate != 'function' ||
							(l === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 4),
					  typeof o.getSnapshotBeforeUpdate != 'function' ||
							(l === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = g)),
			  (o.props = r),
			  (o.state = g),
			  (o.context = a),
			  (r = u))
			: (typeof o.componentDidUpdate != 'function' ||
					(l === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 4),
			  typeof o.getSnapshotBeforeUpdate != 'function' ||
					(l === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1))
	}
	return Al(e, t, n, r, s, i)
}
function Al(e, t, n, r, i, s) {
	Fh(e, t)
	var o = (t.flags & 128) !== 0
	if (!r && !o) return i && ic(t, n, !1), Lt(e, t, s)
	;(r = t.stateNode), (zg.current = t)
	var l =
		o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
	return (
		(t.flags |= 1),
		e !== null && o
			? ((t.child = rr(t, e.child, null, s)),
			  (t.child = rr(t, null, l, s)))
			: Ae(e, t, l, s),
		(t.memoizedState = r.state),
		i && ic(t, n, !0),
		t.child
	)
}
function Ih(e) {
	var t = e.stateNode
	t.pendingContext
		? rc(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && rc(e, t.context, !1),
		Da(e, t.containerInfo)
}
function Sc(e, t, n, r, i) {
	return nr(), ka(i), (t.flags |= 256), Ae(e, t, n, r), t.child
}
var Dl = { dehydrated: null, treeContext: null, retryLane: 0 }
function Rl(e) {
	return { baseLanes: e, cachePool: null, transitions: null }
}
function zh(e, t, n) {
	var r = t.pendingProps,
		i = ee.current,
		s = !1,
		o = (t.flags & 128) !== 0,
		l
	if (
		((l = o) ||
			(l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		l
			? ((s = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		K(ee, i & 1),
		e === null)
	)
		return (
			Pl(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((o = r.children),
				  (e = r.fallback),
				  s
						? ((r = t.mode),
						  (s = t.child),
						  (o = { mode: 'hidden', children: o }),
						  !(r & 1) && s !== null
								? ((s.childLanes = 0), (s.pendingProps = o))
								: (s = $s(o, r, 0, null)),
						  (e = xn(e, r, n, null)),
						  (s.return = t),
						  (e.return = t),
						  (s.sibling = e),
						  (t.child = s),
						  (t.child.memoizedState = Rl(n)),
						  (t.memoizedState = Dl),
						  e)
						: Fa(t, o))
		)
	if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return Bg(e, t, o, r, l, i, n)
	if (s) {
		;(s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling)
		var a = { mode: 'hidden', children: r.children }
		return (
			!(o & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = a),
				  (t.deletions = null))
				: ((r = Xt(i, a)),
				  (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null
				? (s = Xt(l, s))
				: ((s = xn(s, o, n, null)), (s.flags |= 2)),
			(s.return = t),
			(r.return = t),
			(r.sibling = s),
			(t.child = r),
			(r = s),
			(s = t.child),
			(o = e.child.memoizedState),
			(o =
				o === null
					? Rl(n)
					: {
							baseLanes: o.baseLanes | n,
							cachePool: null,
							transitions: o.transitions,
					  }),
			(s.memoizedState = o),
			(s.childLanes = e.childLanes & ~n),
			(t.memoizedState = Dl),
			r
		)
	}
	return (
		(s = e.child),
		(e = s.sibling),
		(r = Xt(s, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	)
}
function Fa(e, t) {
	return (
		(t = $s({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	)
}
function Oi(e, t, n, r) {
	return (
		r !== null && ka(r),
		rr(t, e.child, null, n),
		(e = Fa(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	)
}
function Bg(e, t, n, r, i, s, o) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Do(Error(T(422)))), Oi(e, t, o, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((s = r.fallback),
			  (i = t.mode),
			  (r = $s({ mode: 'visible', children: r.children }, i, 0, null)),
			  (s = xn(s, i, o, null)),
			  (s.flags |= 2),
			  (r.return = t),
			  (s.return = t),
			  (r.sibling = s),
			  (t.child = r),
			  t.mode & 1 && rr(t, e.child, null, o),
			  (t.child.memoizedState = Rl(o)),
			  (t.memoizedState = Dl),
			  s)
	if (!(t.mode & 1)) return Oi(e, t, o, null)
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
		return (
			(r = l), (s = Error(T(419))), (r = Do(s, r, void 0)), Oi(e, t, o, r)
		)
	}
	if (((l = (o & e.childLanes) !== 0), Oe || l)) {
		if (((r = me), r !== null)) {
			switch (o & -o) {
				case 4:
					i = 2
					break
				case 16:
					i = 8
					break
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					i = 32
					break
				case 536870912:
					i = 268435456
					break
				default:
					i = 0
			}
			;(i = i & (r.suspendedLanes | o) ? 0 : i),
				i !== 0 &&
					i !== s.retryLane &&
					((s.retryLane = i), Rt(e, i), lt(r, e, i, -1))
		}
		return Wa(), (r = Do(Error(T(421)))), Oi(e, t, o, r)
	}
	return i.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Jg.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = s.treeContext),
		  (Ie = bt(i.nextSibling)),
		  (ze = t),
		  (J = !0),
		  (st = null),
		  e !== null &&
				((be[Ke++] = xt),
				(be[Ke++] = Pt),
				(be[Ke++] = Cn),
				(xt = e.id),
				(Pt = e.overflow),
				(Cn = t)),
		  (t = Fa(t, r.children)),
		  (t.flags |= 4096),
		  t)
}
function xc(e, t, n) {
	e.lanes |= t
	var r = e.alternate
	r !== null && (r.lanes |= t), kl(e.return, t, n)
}
function Ro(e, t, n, r, i) {
	var s = e.memoizedState
	s === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((s.isBackwards = t),
		  (s.rendering = null),
		  (s.renderingStartTime = 0),
		  (s.last = r),
		  (s.tail = n),
		  (s.tailMode = i))
}
function Bh(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		s = r.tail
	if ((Ae(e, t, r.children, n), (r = ee.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128)
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && xc(e, n, t)
				else if (e.tag === 19) xc(e, n, t)
				else if (e.child !== null) {
					;(e.child.return = e), (e = e.child)
					continue
				}
				if (e === t) break e
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e
					e = e.return
				}
				;(e.sibling.return = e.return), (e = e.sibling)
			}
		r &= 1
	}
	if ((K(ee, r), !(t.mode & 1))) t.memoizedState = null
	else
		switch (i) {
			case 'forwards':
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && gs(e) === null && (i = n),
						(n = n.sibling)
				;(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					Ro(t, !1, i, n, s)
				break
			case 'backwards':
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && gs(e) === null)) {
						t.child = i
						break
					}
					;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
				}
				Ro(t, !0, n, null, s)
				break
			case 'together':
				Ro(t, !1, null, null, void 0)
				break
			default:
				t.memoizedState = null
		}
	return t.child
}
function Qi(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Lt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(En |= t.lanes),
		!(n & t.childLanes))
	)
		return null
	if (e !== null && t.child !== e.child) throw Error(T(153))
	if (t.child !== null) {
		for (
			e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling),
				(n = n.sibling = Xt(e, e.pendingProps)),
				(n.return = t)
		n.sibling = null
	}
	return t.child
}
function Ug(e, t, n) {
	switch (t.tag) {
		case 3:
			Ih(t), nr()
			break
		case 5:
			dh(t)
			break
		case 1:
			_e(t.type) && fs(t)
			break
		case 4:
			Da(t, t.stateNode.containerInfo)
			break
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value
			K(ps, r._currentValue), (r._currentValue = i)
			break
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (K(ee, ee.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? zh(e, t, n)
					: (K(ee, ee.current & 1),
					  (e = Lt(e, t, n)),
					  e !== null ? e.sibling : null)
			K(ee, ee.current & 1)
			break
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Bh(e, t, n)
				t.flags |= 128
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null),
					(i.tail = null),
					(i.lastEffect = null)),
				K(ee, ee.current),
				r)
			)
				break
			return null
		case 22:
		case 23:
			return (t.lanes = 0), jh(e, t, n)
	}
	return Lt(e, t, n)
}
var Uh, Ll, $h, Wh
Uh = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
		else if (n.tag !== 4 && n.child !== null) {
			;(n.child.return = n), (n = n.child)
			continue
		}
		if (n === t) break
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return
			n = n.return
		}
		;(n.sibling.return = n.return), (n = n.sibling)
	}
}
Ll = function () {}
$h = function (e, t, n, r) {
	var i = e.memoizedProps
	if (i !== r) {
		;(e = t.stateNode), yn(pt.current)
		var s = null
		switch (n) {
			case 'input':
				;(i = Jo(e, i)), (r = Jo(e, r)), (s = [])
				break
			case 'select':
				;(i = re({}, i, { value: void 0 })),
					(r = re({}, r, { value: void 0 })),
					(s = [])
				break
			case 'textarea':
				;(i = nl(e, i)), (r = nl(e, r)), (s = [])
				break
			default:
				typeof i.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = us)
		}
		il(n, r)
		var o
		n = null
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === 'style') {
					var l = i[u]
					for (o in l)
						l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(Wr.hasOwnProperty(u)
							? s || (s = [])
							: (s = s || []).push(u, null))
		for (u in r) {
			var a = r[u]
			if (
				((l = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && a !== l && (a != null || l != null))
			)
				if (u === 'style')
					if (l) {
						for (o in l)
							!l.hasOwnProperty(o) ||
								(a && a.hasOwnProperty(o)) ||
								(n || (n = {}), (n[o] = ''))
						for (o in a)
							a.hasOwnProperty(o) &&
								l[o] !== a[o] &&
								(n || (n = {}), (n[o] = a[o]))
					} else n || (s || (s = []), s.push(u, n)), (n = a)
				else
					u === 'dangerouslySetInnerHTML'
						? ((a = a ? a.__html : void 0),
						  (l = l ? l.__html : void 0),
						  a != null && l !== a && (s = s || []).push(u, a))
						: u === 'children'
						? (typeof a != 'string' && typeof a != 'number') ||
						  (s = s || []).push(u, '' + a)
						: u !== 'suppressContentEditableWarning' &&
						  u !== 'suppressHydrationWarning' &&
						  (Wr.hasOwnProperty(u)
								? (a != null &&
										u === 'onScroll' &&
										Z('scroll', e),
								  s || l === a || (s = []))
								: (s = s || []).push(u, a))
		}
		n && (s = s || []).push('style', n)
		var u = s
		;(t.updateQueue = u) && (t.flags |= 4)
	}
}
Wh = function (e, t, n, r) {
	n !== r && (t.flags |= 4)
}
function xr(e, t) {
	if (!J)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling)
				n === null ? (e.tail = null) : (n.sibling = null)
				break
			case 'collapsed':
				n = e.tail
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling)
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null)
		}
}
function xe(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling)
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling)
	return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function $g(e, t, n) {
	var r = t.pendingProps
	switch ((Pa(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return xe(t), null
		case 1:
			return _e(t.type) && cs(), xe(t), null
		case 3:
			return (
				(r = t.stateNode),
				ir(),
				q(Ne),
				q(Ee),
				La(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(Li(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024),
						  st !== null && (zl(st), (st = null)))),
				Ll(e, t),
				xe(t),
				null
			)
		case 5:
			Ra(t)
			var i = yn(ti.current)
			if (((n = t.type), e !== null && t.stateNode != null))
				$h(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(T(166))
					return xe(t), null
				}
				if (((e = yn(pt.current)), Li(t))) {
					;(r = t.stateNode), (n = t.type)
					var s = t.memoizedProps
					switch (
						((r[dt] = t), (r[Jr] = s), (e = (t.mode & 1) !== 0), n)
					) {
						case 'dialog':
							Z('cancel', r), Z('close', r)
							break
						case 'iframe':
						case 'object':
						case 'embed':
							Z('load', r)
							break
						case 'video':
						case 'audio':
							for (i = 0; i < Mr.length; i++) Z(Mr[i], r)
							break
						case 'source':
							Z('error', r)
							break
						case 'img':
						case 'image':
						case 'link':
							Z('error', r), Z('load', r)
							break
						case 'details':
							Z('toggle', r)
							break
						case 'input':
							Ru(r, s), Z('invalid', r)
							break
						case 'select':
							;(r._wrapperState = { wasMultiple: !!s.multiple }),
								Z('invalid', r)
							break
						case 'textarea':
							Vu(r, s), Z('invalid', r)
					}
					il(n, s), (i = null)
					for (var o in s)
						if (s.hasOwnProperty(o)) {
							var l = s[o]
							o === 'children'
								? typeof l == 'string'
									? r.textContent !== l &&
									  (s.suppressHydrationWarning !== !0 &&
											Ri(r.textContent, l, e),
									  (i = ['children', l]))
									: typeof l == 'number' &&
									  r.textContent !== '' + l &&
									  (s.suppressHydrationWarning !== !0 &&
											Ri(r.textContent, l, e),
									  (i = ['children', '' + l]))
								: Wr.hasOwnProperty(o) &&
								  l != null &&
								  o === 'onScroll' &&
								  Z('scroll', r)
						}
					switch (n) {
						case 'input':
							Pi(r), Lu(r, s, !0)
							break
						case 'textarea':
							Pi(r), Ou(r)
							break
						case 'select':
						case 'option':
							break
						default:
							typeof s.onClick == 'function' && (r.onclick = us)
					}
					;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
				} else {
					;(o = i.nodeType === 9 ? i : i.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = gd(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = o.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = o.createElement(n, { is: r.is }))
								: ((e = o.createElement(n)),
								  n === 'select' &&
										((o = e),
										r.multiple
											? (o.multiple = !0)
											: r.size && (o.size = r.size)))
							: (e = o.createElementNS(e, n)),
						(e[dt] = t),
						(e[Jr] = r),
						Uh(e, t, !1, !1),
						(t.stateNode = e)
					e: {
						switch (((o = sl(n, r)), n)) {
							case 'dialog':
								Z('cancel', e), Z('close', e), (i = r)
								break
							case 'iframe':
							case 'object':
							case 'embed':
								Z('load', e), (i = r)
								break
							case 'video':
							case 'audio':
								for (i = 0; i < Mr.length; i++) Z(Mr[i], e)
								i = r
								break
							case 'source':
								Z('error', e), (i = r)
								break
							case 'img':
							case 'image':
							case 'link':
								Z('error', e), Z('load', e), (i = r)
								break
							case 'details':
								Z('toggle', e), (i = r)
								break
							case 'input':
								Ru(e, r), (i = Jo(e, r)), Z('invalid', e)
								break
							case 'option':
								i = r
								break
							case 'select':
								;(e._wrapperState = {
									wasMultiple: !!r.multiple,
								}),
									(i = re({}, r, { value: void 0 })),
									Z('invalid', e)
								break
							case 'textarea':
								Vu(e, r), (i = nl(e, r)), Z('invalid', e)
								break
							default:
								i = r
						}
						il(n, i), (l = i)
						for (s in l)
							if (l.hasOwnProperty(s)) {
								var a = l[s]
								s === 'style'
									? Sd(e, a)
									: s === 'dangerouslySetInnerHTML'
									? ((a = a ? a.__html : void 0),
									  a != null && yd(e, a))
									: s === 'children'
									? typeof a == 'string'
										? (n !== 'textarea' || a !== '') &&
										  Hr(e, a)
										: typeof a == 'number' && Hr(e, '' + a)
									: s !== 'suppressContentEditableWarning' &&
									  s !== 'suppressHydrationWarning' &&
									  s !== 'autoFocus' &&
									  (Wr.hasOwnProperty(s)
											? a != null &&
											  s === 'onScroll' &&
											  Z('scroll', e)
											: a != null && la(e, s, a, o))
							}
						switch (n) {
							case 'input':
								Pi(e), Lu(e, r, !1)
								break
							case 'textarea':
								Pi(e), Ou(e)
								break
							case 'option':
								r.value != null &&
									e.setAttribute('value', '' + Jt(r.value))
								break
							case 'select':
								;(e.multiple = !!r.multiple),
									(s = r.value),
									s != null
										? Qn(e, !!r.multiple, s, !1)
										: r.defaultValue != null &&
										  Qn(
												e,
												!!r.multiple,
												r.defaultValue,
												!0
										  )
								break
							default:
								typeof i.onClick == 'function' &&
									(e.onclick = us)
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus
								break e
							case 'img':
								r = !0
								break e
							default:
								r = !1
						}
					}
					r && (t.flags |= 4)
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
			}
			return xe(t), null
		case 6:
			if (e && t.stateNode != null) Wh(e, t, e.memoizedProps, r)
			else {
				if (typeof r != 'string' && t.stateNode === null)
					throw Error(T(166))
				if (((n = yn(ti.current)), yn(pt.current), Li(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[dt] = t),
						(s = r.nodeValue !== n) && ((e = ze), e !== null))
					)
						switch (e.tag) {
							case 3:
								Ri(r.nodeValue, n, (e.mode & 1) !== 0)
								break
							case 5:
								e.memoizedProps.suppressHydrationWarning !==
									!0 && Ri(r.nodeValue, n, (e.mode & 1) !== 0)
						}
					s && (t.flags |= 4)
				} else
					(r = (
						n.nodeType === 9 ? n : n.ownerDocument
					).createTextNode(r)),
						(r[dt] = t),
						(t.stateNode = r)
			}
			return xe(t), null
		case 13:
			if (
				(q(ee),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null &&
						e.memoizedState.dehydrated !== null))
			) {
				if (J && Ie !== null && t.mode & 1 && !(t.flags & 128))
					lh(), nr(), (t.flags |= 98560), (s = !1)
				else if (((s = Li(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!s) throw Error(T(318))
						if (
							((s = t.memoizedState),
							(s = s !== null ? s.dehydrated : null),
							!s)
						)
							throw Error(T(317))
						s[dt] = t
					} else
						nr(),
							!(t.flags & 128) && (t.memoizedState = null),
							(t.flags |= 4)
					xe(t), (s = !1)
				} else st !== null && (zl(st), (st = null)), (s = !0)
				if (!s) return t.flags & 65536 ? t : null
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || ee.current & 1
								? he === 0 && (he = 3)
								: Wa())),
				  t.updateQueue !== null && (t.flags |= 4),
				  xe(t),
				  null)
		case 4:
			return (
				ir(),
				Ll(e, t),
				e === null && Zr(t.stateNode.containerInfo),
				xe(t),
				null
			)
		case 10:
			return Ea(t.type._context), xe(t), null
		case 17:
			return _e(t.type) && cs(), xe(t), null
		case 19:
			if ((q(ee), (s = t.memoizedState), s === null)) return xe(t), null
			if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
				if (r) xr(s, !1)
				else {
					if (he !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((o = gs(e)), o !== null)) {
								for (
									t.flags |= 128,
										xr(s, !1),
										r = o.updateQueue,
										r !== null &&
											((t.updateQueue = r),
											(t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(s = n),
										(e = r),
										(s.flags &= 14680066),
										(o = s.alternate),
										o === null
											? ((s.childLanes = 0),
											  (s.lanes = e),
											  (s.child = null),
											  (s.subtreeFlags = 0),
											  (s.memoizedProps = null),
											  (s.memoizedState = null),
											  (s.updateQueue = null),
											  (s.dependencies = null),
											  (s.stateNode = null))
											: ((s.childLanes = o.childLanes),
											  (s.lanes = o.lanes),
											  (s.child = o.child),
											  (s.subtreeFlags = 0),
											  (s.deletions = null),
											  (s.memoizedProps =
													o.memoizedProps),
											  (s.memoizedState =
													o.memoizedState),
											  (s.updateQueue = o.updateQueue),
											  (s.type = o.type),
											  (e = o.dependencies),
											  (s.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext:
																	e.firstContext,
														  })),
										(n = n.sibling)
								return K(ee, (ee.current & 1) | 2), t.child
							}
							e = e.sibling
						}
					s.tail !== null &&
						ue() > or &&
						((t.flags |= 128),
						(r = !0),
						xr(s, !1),
						(t.lanes = 4194304))
				}
			else {
				if (!r)
					if (((e = gs(o)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							xr(s, !0),
							s.tail === null &&
								s.tailMode === 'hidden' &&
								!o.alternate &&
								!J)
						)
							return xe(t), null
					} else
						2 * ue() - s.renderingStartTime > or &&
							n !== 1073741824 &&
							((t.flags |= 128),
							(r = !0),
							xr(s, !1),
							(t.lanes = 4194304))
				s.isBackwards
					? ((o.sibling = t.child), (t.child = o))
					: ((n = s.last),
					  n !== null ? (n.sibling = o) : (t.child = o),
					  (s.last = o))
			}
			return s.tail !== null
				? ((t = s.tail),
				  (s.rendering = t),
				  (s.tail = t.sibling),
				  (s.renderingStartTime = ue()),
				  (t.sibling = null),
				  (n = ee.current),
				  K(ee, r ? (n & 1) | 2 : n & 1),
				  t)
				: (xe(t), null)
		case 22:
		case 23:
			return (
				$a(),
				(r = t.memoizedState !== null),
				e !== null &&
					(e.memoizedState !== null) !== r &&
					(t.flags |= 8192),
				r && t.mode & 1
					? Fe & 1073741824 &&
					  (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: xe(t),
				null
			)
		case 24:
			return null
		case 25:
			return null
	}
	throw Error(T(156, t.tag))
}
function Wg(e, t) {
	switch ((Pa(t), t.tag)) {
		case 1:
			return (
				_e(t.type) && cs(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 3:
			return (
				ir(),
				q(Ne),
				q(Ee),
				La(),
				(e = t.flags),
				e & 65536 && !(e & 128)
					? ((t.flags = (e & -65537) | 128), t)
					: null
			)
		case 5:
			return Ra(t), null
		case 13:
			if (
				(q(ee),
				(e = t.memoizedState),
				e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(T(340))
				nr()
			}
			return (
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			)
		case 19:
			return q(ee), null
		case 4:
			return ir(), null
		case 10:
			return Ea(t.type._context), null
		case 22:
		case 23:
			return $a(), null
		case 24:
			return null
		default:
			return null
	}
}
var Ni = !1,
	ke = !1,
	Hg = typeof WeakSet == 'function' ? WeakSet : Set,
	L = null
function Un(e, t) {
	var n = e.ref
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null)
			} catch (r) {
				oe(e, t, r)
			}
		else n.current = null
}
function Vl(e, t, n) {
	try {
		n()
	} catch (r) {
		oe(e, t, r)
	}
}
var Pc = !1
function Gg(e, t) {
	if (((ml = os), (e = Qd()), Sa(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd }
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window
				var r = n.getSelection && n.getSelection()
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode
					var i = r.anchorOffset,
						s = r.focusNode
					r = r.focusOffset
					try {
						n.nodeType, s.nodeType
					} catch {
						n = null
						break e
					}
					var o = 0,
						l = -1,
						a = -1,
						u = 0,
						c = 0,
						f = e,
						d = null
					t: for (;;) {
						for (
							var v;
							f !== n ||
								(i !== 0 && f.nodeType !== 3) ||
								(l = o + i),
								f !== s ||
									(r !== 0 && f.nodeType !== 3) ||
									(a = o + r),
								f.nodeType === 3 && (o += f.nodeValue.length),
								(v = f.firstChild) !== null;

						)
							(d = f), (f = v)
						for (;;) {
							if (f === e) break t
							if (
								(d === n && ++u === i && (l = o),
								d === s && ++c === r && (a = o),
								(v = f.nextSibling) !== null)
							)
								break
							;(f = d), (d = f.parentNode)
						}
						f = v
					}
					n = l === -1 || a === -1 ? null : { start: l, end: a }
				} else n = null
			}
		n = n || { start: 0, end: 0 }
	} else n = null
	for (
		vl = { focusedElem: e, selectionRange: n }, os = !1, L = t;
		L !== null;

	)
		if (
			((t = L),
			(e = t.child),
			(t.subtreeFlags & 1028) !== 0 && e !== null)
		)
			(e.return = t), (L = e)
		else
			for (; L !== null; ) {
				t = L
				try {
					var g = t.alternate
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break
							case 1:
								if (g !== null) {
									var y = g.memoizedProps,
										k = g.memoizedState,
										p = t.stateNode,
										h = p.getSnapshotBeforeUpdate(
											t.elementType === t.type
												? y
												: rt(t.type, y),
											k
										)
									p.__reactInternalSnapshotBeforeUpdate = h
								}
								break
							case 3:
								var m = t.stateNode.containerInfo
								m.nodeType === 1
									? (m.textContent = '')
									: m.nodeType === 9 &&
									  m.documentElement &&
									  m.removeChild(m.documentElement)
								break
							case 5:
							case 6:
							case 4:
							case 17:
								break
							default:
								throw Error(T(163))
						}
				} catch (w) {
					oe(t, t.return, w)
				}
				if (((e = t.sibling), e !== null)) {
					;(e.return = t.return), (L = e)
					break
				}
				L = t.return
			}
	return (g = Pc), (Pc = !1), g
}
function jr(e, t, n) {
	var r = t.updateQueue
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next)
		do {
			if ((i.tag & e) === e) {
				var s = i.destroy
				;(i.destroy = void 0), s !== void 0 && Vl(t, n, s)
			}
			i = i.next
		} while (i !== r)
	}
}
function Bs(e, t) {
	if (
		((t = t.updateQueue),
		(t = t !== null ? t.lastEffect : null),
		t !== null)
	) {
		var n = (t = t.next)
		do {
			if ((n.tag & e) === e) {
				var r = n.create
				n.destroy = r()
			}
			n = n.next
		} while (n !== t)
	}
}
function Ol(e) {
	var t = e.ref
	if (t !== null) {
		var n = e.stateNode
		switch (e.tag) {
			case 5:
				e = n
				break
			default:
				e = n
		}
		typeof t == 'function' ? t(e) : (t.current = e)
	}
}
function Hh(e) {
	var t = e.alternate
	t !== null && ((e.alternate = null), Hh(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[dt],
				delete t[Jr],
				delete t[wl],
				delete t[Mg],
				delete t[Ag])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null)
}
function Gh(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function kc(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Gh(e.return)) return null
			e = e.return
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e
			;(e.child.return = e), (e = e.child)
		}
		if (!(e.flags & 2)) return e.stateNode
	}
}
function Nl(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = us))
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Nl(e, t, n), e = e.sibling; e !== null; )
			Nl(e, t, n), (e = e.sibling)
}
function _l(e, t, n) {
	var r = e.tag
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
	else if (r !== 4 && ((e = e.child), e !== null))
		for (_l(e, t, n), e = e.sibling; e !== null; )
			_l(e, t, n), (e = e.sibling)
}
var ve = null,
	it = !1
function _t(e, t, n) {
	for (n = n.child; n !== null; ) bh(e, t, n), (n = n.sibling)
}
function bh(e, t, n) {
	if (ht && typeof ht.onCommitFiberUnmount == 'function')
		try {
			ht.onCommitFiberUnmount(Vs, n)
		} catch {}
	switch (n.tag) {
		case 5:
			ke || Un(n, t)
		case 6:
			var r = ve,
				i = it
			;(ve = null),
				_t(e, t, n),
				(ve = r),
				(it = i),
				ve !== null &&
					(it
						? ((e = ve),
						  (n = n.stateNode),
						  e.nodeType === 8
								? e.parentNode.removeChild(n)
								: e.removeChild(n))
						: ve.removeChild(n.stateNode))
			break
		case 18:
			ve !== null &&
				(it
					? ((e = ve),
					  (n = n.stateNode),
					  e.nodeType === 8
							? ko(e.parentNode, n)
							: e.nodeType === 1 && ko(e, n),
					  Qr(e))
					: ko(ve, n.stateNode))
			break
		case 4:
			;(r = ve),
				(i = it),
				(ve = n.stateNode.containerInfo),
				(it = !0),
				_t(e, t, n),
				(ve = r),
				(it = i)
			break
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!ke &&
				((r = n.updateQueue),
				r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next
				do {
					var s = i,
						o = s.destroy
					;(s = s.tag),
						o !== void 0 && (s & 2 || s & 4) && Vl(n, t, o),
						(i = i.next)
				} while (i !== r)
			}
			_t(e, t, n)
			break
		case 1:
			if (
				!ke &&
				(Un(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					;(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount()
				} catch (l) {
					oe(n, t, l)
				}
			_t(e, t, n)
			break
		case 21:
			_t(e, t, n)
			break
		case 22:
			n.mode & 1
				? ((ke = (r = ke) || n.memoizedState !== null),
				  _t(e, t, n),
				  (ke = r))
				: _t(e, t, n)
			break
		default:
			_t(e, t, n)
	}
}
function Cc(e) {
	var t = e.updateQueue
	if (t !== null) {
		e.updateQueue = null
		var n = e.stateNode
		n === null && (n = e.stateNode = new Hg()),
			t.forEach(function (r) {
				var i = ey.bind(null, e, r)
				n.has(r) || (n.add(r), r.then(i, i))
			})
	}
}
function nt(e, t) {
	var n = t.deletions
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r]
			try {
				var s = e,
					o = t,
					l = o
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							;(ve = l.stateNode), (it = !1)
							break e
						case 3:
							;(ve = l.stateNode.containerInfo), (it = !0)
							break e
						case 4:
							;(ve = l.stateNode.containerInfo), (it = !0)
							break e
					}
					l = l.return
				}
				if (ve === null) throw Error(T(160))
				bh(s, o, i), (ve = null), (it = !1)
				var a = i.alternate
				a !== null && (a.return = null), (i.return = null)
			} catch (u) {
				oe(i, t, u)
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Kh(t, e), (t = t.sibling)
}
function Kh(e, t) {
	var n = e.alternate,
		r = e.flags
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((nt(t, e), ct(e), r & 4)) {
				try {
					jr(3, e, e.return), Bs(3, e)
				} catch (y) {
					oe(e, e.return, y)
				}
				try {
					jr(5, e, e.return)
				} catch (y) {
					oe(e, e.return, y)
				}
			}
			break
		case 1:
			nt(t, e), ct(e), r & 512 && n !== null && Un(n, n.return)
			break
		case 5:
			if (
				(nt(t, e),
				ct(e),
				r & 512 && n !== null && Un(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode
				try {
					Hr(i, '')
				} catch (y) {
					oe(e, e.return, y)
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var s = e.memoizedProps,
					o = n !== null ? n.memoizedProps : s,
					l = e.type,
					a = e.updateQueue
				if (((e.updateQueue = null), a !== null))
					try {
						l === 'input' &&
							s.type === 'radio' &&
							s.name != null &&
							md(i, s),
							sl(l, o)
						var u = sl(l, s)
						for (o = 0; o < a.length; o += 2) {
							var c = a[o],
								f = a[o + 1]
							c === 'style'
								? Sd(i, f)
								: c === 'dangerouslySetInnerHTML'
								? yd(i, f)
								: c === 'children'
								? Hr(i, f)
								: la(i, c, f, u)
						}
						switch (l) {
							case 'input':
								el(i, s)
								break
							case 'textarea':
								vd(i, s)
								break
							case 'select':
								var d = i._wrapperState.wasMultiple
								i._wrapperState.wasMultiple = !!s.multiple
								var v = s.value
								v != null
									? Qn(i, !!s.multiple, v, !1)
									: d !== !!s.multiple &&
									  (s.defaultValue != null
											? Qn(
													i,
													!!s.multiple,
													s.defaultValue,
													!0
											  )
											: Qn(
													i,
													!!s.multiple,
													s.multiple ? [] : '',
													!1
											  ))
						}
						i[Jr] = s
					} catch (y) {
						oe(e, e.return, y)
					}
			}
			break
		case 6:
			if ((nt(t, e), ct(e), r & 4)) {
				if (e.stateNode === null) throw Error(T(162))
				;(i = e.stateNode), (s = e.memoizedProps)
				try {
					i.nodeValue = s
				} catch (y) {
					oe(e, e.return, y)
				}
			}
			break
		case 3:
			if (
				(nt(t, e),
				ct(e),
				r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Qr(t.containerInfo)
				} catch (y) {
					oe(e, e.return, y)
				}
			break
		case 4:
			nt(t, e), ct(e)
			break
		case 13:
			nt(t, e),
				ct(e),
				(i = e.child),
				i.flags & 8192 &&
					((s = i.memoizedState !== null),
					(i.stateNode.isHidden = s),
					!s ||
						(i.alternate !== null &&
							i.alternate.memoizedState !== null) ||
						(Ba = ue())),
				r & 4 && Cc(e)
			break
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1
					? ((ke = (u = ke) || c), nt(t, e), (ke = u))
					: nt(t, e),
				ct(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (L = e, c = e.child; c !== null; ) {
						for (f = L = c; L !== null; ) {
							switch (((d = L), (v = d.child), d.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									jr(4, d, d.return)
									break
								case 1:
									Un(d, d.return)
									var g = d.stateNode
									if (
										typeof g.componentWillUnmount ==
										'function'
									) {
										;(r = d), (n = d.return)
										try {
											;(t = r),
												(g.props = t.memoizedProps),
												(g.state = t.memoizedState),
												g.componentWillUnmount()
										} catch (y) {
											oe(r, n, y)
										}
									}
									break
								case 5:
									Un(d, d.return)
									break
								case 22:
									if (d.memoizedState !== null) {
										Ec(f)
										continue
									}
							}
							v !== null ? ((v.return = d), (L = v)) : Ec(f)
						}
						c = c.sibling
					}
				e: for (c = null, f = e; ; ) {
					if (f.tag === 5) {
						if (c === null) {
							c = f
							try {
								;(i = f.stateNode),
									u
										? ((s = i.style),
										  typeof s.setProperty == 'function'
												? s.setProperty(
														'display',
														'none',
														'important'
												  )
												: (s.display = 'none'))
										: ((l = f.stateNode),
										  (a = f.memoizedProps.style),
										  (o =
												a != null &&
												a.hasOwnProperty('display')
													? a.display
													: null),
										  (l.style.display = wd('display', o)))
							} catch (y) {
								oe(e, e.return, y)
							}
						}
					} else if (f.tag === 6) {
						if (c === null)
							try {
								f.stateNode.nodeValue = u ? '' : f.memoizedProps
							} catch (y) {
								oe(e, e.return, y)
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						;(f.child.return = f), (f = f.child)
						continue
					}
					if (f === e) break e
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e
						c === f && (c = null), (f = f.return)
					}
					c === f && (c = null),
						(f.sibling.return = f.return),
						(f = f.sibling)
				}
			}
			break
		case 19:
			nt(t, e), ct(e), r & 4 && Cc(e)
			break
		case 21:
			break
		default:
			nt(t, e), ct(e)
	}
}
function ct(e) {
	var t = e.flags
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Gh(n)) {
						var r = n
						break e
					}
					n = n.return
				}
				throw Error(T(160))
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode
					r.flags & 32 && (Hr(i, ''), (r.flags &= -33))
					var s = kc(e)
					_l(e, s, i)
					break
				case 3:
				case 4:
					var o = r.stateNode.containerInfo,
						l = kc(e)
					Nl(e, l, o)
					break
				default:
					throw Error(T(161))
			}
		} catch (a) {
			oe(e, e.return, a)
		}
		e.flags &= -3
	}
	t & 4096 && (e.flags &= -4097)
}
function bg(e, t, n) {
	;(L = e), Qh(e)
}
function Qh(e, t, n) {
	for (var r = (e.mode & 1) !== 0; L !== null; ) {
		var i = L,
			s = i.child
		if (i.tag === 22 && r) {
			var o = i.memoizedState !== null || Ni
			if (!o) {
				var l = i.alternate,
					a = (l !== null && l.memoizedState !== null) || ke
				l = Ni
				var u = ke
				if (((Ni = o), (ke = a) && !u))
					for (L = i; L !== null; )
						(o = L),
							(a = o.child),
							o.tag === 22 && o.memoizedState !== null
								? Mc(i)
								: a !== null
								? ((a.return = o), (L = a))
								: Mc(i)
				for (; s !== null; ) (L = s), Qh(s), (s = s.sibling)
				;(L = i), (Ni = l), (ke = u)
			}
			Tc(e)
		} else
			i.subtreeFlags & 8772 && s !== null
				? ((s.return = i), (L = s))
				: Tc(e)
	}
}
function Tc(e) {
	for (; L !== null; ) {
		var t = L
		if (t.flags & 8772) {
			var n = t.alternate
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							ke || Bs(5, t)
							break
						case 1:
							var r = t.stateNode
							if (t.flags & 4 && !ke)
								if (n === null) r.componentDidMount()
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: rt(t.type, n.memoizedProps)
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									)
								}
							var s = t.updateQueue
							s !== null && uc(t, s, r)
							break
						case 3:
							var o = t.updateQueue
							if (o !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode
											break
										case 1:
											n = t.child.stateNode
									}
								uc(t, o, n)
							}
							break
						case 5:
							var l = t.stateNode
							if (n === null && t.flags & 4) {
								n = l
								var a = t.memoizedProps
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										a.autoFocus && n.focus()
										break
									case 'img':
										a.src && (n.src = a.src)
								}
							}
							break
						case 6:
							break
						case 4:
							break
						case 12:
							break
						case 13:
							if (t.memoizedState === null) {
								var u = t.alternate
								if (u !== null) {
									var c = u.memoizedState
									if (c !== null) {
										var f = c.dehydrated
										f !== null && Qr(f)
									}
								}
							}
							break
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break
						default:
							throw Error(T(163))
					}
				ke || (t.flags & 512 && Ol(t))
			} catch (d) {
				oe(t, t.return, d)
			}
		}
		if (t === e) {
			L = null
			break
		}
		if (((n = t.sibling), n !== null)) {
			;(n.return = t.return), (L = n)
			break
		}
		L = t.return
	}
}
function Ec(e) {
	for (; L !== null; ) {
		var t = L
		if (t === e) {
			L = null
			break
		}
		var n = t.sibling
		if (n !== null) {
			;(n.return = t.return), (L = n)
			break
		}
		L = t.return
	}
}
function Mc(e) {
	for (; L !== null; ) {
		var t = L
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return
					try {
						Bs(4, t)
					} catch (a) {
						oe(t, n, a)
					}
					break
				case 1:
					var r = t.stateNode
					if (typeof r.componentDidMount == 'function') {
						var i = t.return
						try {
							r.componentDidMount()
						} catch (a) {
							oe(t, i, a)
						}
					}
					var s = t.return
					try {
						Ol(t)
					} catch (a) {
						oe(t, s, a)
					}
					break
				case 5:
					var o = t.return
					try {
						Ol(t)
					} catch (a) {
						oe(t, o, a)
					}
			}
		} catch (a) {
			oe(t, t.return, a)
		}
		if (t === e) {
			L = null
			break
		}
		var l = t.sibling
		if (l !== null) {
			;(l.return = t.return), (L = l)
			break
		}
		L = t.return
	}
}
var Kg = Math.ceil,
	Ss = Ot.ReactCurrentDispatcher,
	Ia = Ot.ReactCurrentOwner,
	Ye = Ot.ReactCurrentBatchConfig,
	W = 0,
	me = null,
	fe = null,
	ye = 0,
	Fe = 0,
	$n = sn(0),
	he = 0,
	si = null,
	En = 0,
	Us = 0,
	za = 0,
	Fr = null,
	Ve = null,
	Ba = 0,
	or = 1 / 0,
	wt = null,
	xs = !1,
	jl = null,
	Qt = null,
	_i = !1,
	$t = null,
	Ps = 0,
	Ir = 0,
	Fl = null,
	Yi = -1,
	Xi = 0
function De() {
	return W & 6 ? ue() : Yi !== -1 ? Yi : (Yi = ue())
}
function Yt(e) {
	return e.mode & 1
		? W & 2 && ye !== 0
			? ye & -ye
			: Rg.transition !== null
			? (Xi === 0 && (Xi = Vd()), Xi)
			: ((e = b),
			  e !== 0 ||
					((e = window.event), (e = e === void 0 ? 16 : zd(e.type))),
			  e)
		: 1
}
function lt(e, t, n, r) {
	if (50 < Ir) throw ((Ir = 0), (Fl = null), Error(T(185)))
	di(e, n, r),
		(!(W & 2) || e !== me) &&
			(e === me && (!(W & 2) && (Us |= n), he === 4 && Bt(e, ye)),
			je(e, r),
			n === 1 &&
				W === 0 &&
				!(t.mode & 1) &&
				((or = ue() + 500), Fs && on()))
}
function je(e, t) {
	var n = e.callbackNode
	Rv(e, t)
	var r = ss(e, e === me ? ye : 0)
	if (r === 0)
		n !== null && ju(n), (e.callbackNode = null), (e.callbackPriority = 0)
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && ju(n), t === 1))
			e.tag === 0 ? Dg(Ac.bind(null, e)) : ih(Ac.bind(null, e)),
				Tg(function () {
					!(W & 6) && on()
				}),
				(n = null)
		else {
			switch (Od(r)) {
				case 1:
					n = da
					break
				case 4:
					n = Rd
					break
				case 16:
					n = is
					break
				case 536870912:
					n = Ld
					break
				default:
					n = is
			}
			n = np(n, Yh.bind(null, e))
		}
		;(e.callbackPriority = t), (e.callbackNode = n)
	}
}
function Yh(e, t) {
	if (((Yi = -1), (Xi = 0), W & 6)) throw Error(T(327))
	var n = e.callbackNode
	if (Jn() && e.callbackNode !== n) return null
	var r = ss(e, e === me ? ye : 0)
	if (r === 0) return null
	if (r & 30 || r & e.expiredLanes || t) t = ks(e, r)
	else {
		t = r
		var i = W
		W |= 2
		var s = Zh()
		;(me !== e || ye !== t) && ((wt = null), (or = ue() + 500), Sn(e, t))
		do
			try {
				Xg()
				break
			} catch (l) {
				Xh(e, l)
			}
		while (!0)
		Ta(),
			(Ss.current = s),
			(W = i),
			fe !== null ? (t = 0) : ((me = null), (ye = 0), (t = he))
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = cl(e)), i !== 0 && ((r = i), (t = Il(e, i)))),
			t === 1)
		)
			throw ((n = si), Sn(e, 0), Bt(e, r), je(e, ue()), n)
		if (t === 6) Bt(e, r)
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!Qg(i) &&
					((t = ks(e, r)),
					t === 2 &&
						((s = cl(e)), s !== 0 && ((r = s), (t = Il(e, s)))),
					t === 1))
			)
				throw ((n = si), Sn(e, 0), Bt(e, r), je(e, ue()), n)
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(T(345))
				case 2:
					hn(e, Ve, wt)
					break
				case 3:
					if (
						(Bt(e, r),
						(r & 130023424) === r &&
							((t = Ba + 500 - ue()), 10 < t))
					) {
						if (ss(e, 0) !== 0) break
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							De(), (e.pingedLanes |= e.suspendedLanes & i)
							break
						}
						e.timeoutHandle = yl(hn.bind(null, e, Ve, wt), t)
						break
					}
					hn(e, Ve, wt)
					break
				case 4:
					if ((Bt(e, r), (r & 4194240) === r)) break
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var o = 31 - ot(r)
						;(s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s)
					}
					if (
						((r = i),
						(r = ue() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * Kg(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = yl(hn.bind(null, e, Ve, wt), r)
						break
					}
					hn(e, Ve, wt)
					break
				case 5:
					hn(e, Ve, wt)
					break
				default:
					throw Error(T(329))
			}
		}
	}
	return je(e, ue()), e.callbackNode === n ? Yh.bind(null, e) : null
}
function Il(e, t) {
	var n = Fr
	return (
		e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256),
		(e = ks(e, t)),
		e !== 2 && ((t = Ve), (Ve = n), t !== null && zl(t)),
		e
	)
}
function zl(e) {
	Ve === null ? (Ve = e) : Ve.push.apply(Ve, e)
}
function Qg(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						s = i.getSnapshot
					i = i.value
					try {
						if (!at(s(), i)) return !1
					} catch {
						return !1
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n)
		else {
			if (t === e) break
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0
				t = t.return
			}
			;(t.sibling.return = t.return), (t = t.sibling)
		}
	}
	return !0
}
function Bt(e, t) {
	for (
		t &= ~za,
			t &= ~Us,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - ot(t),
			r = 1 << n
		;(e[n] = -1), (t &= ~r)
	}
}
function Ac(e) {
	if (W & 6) throw Error(T(327))
	Jn()
	var t = ss(e, 0)
	if (!(t & 1)) return je(e, ue()), null
	var n = ks(e, t)
	if (e.tag !== 0 && n === 2) {
		var r = cl(e)
		r !== 0 && ((t = r), (n = Il(e, r)))
	}
	if (n === 1) throw ((n = si), Sn(e, 0), Bt(e, t), je(e, ue()), n)
	if (n === 6) throw Error(T(345))
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		hn(e, Ve, wt),
		je(e, ue()),
		null
	)
}
function Ua(e, t) {
	var n = W
	W |= 1
	try {
		return e(t)
	} finally {
		;(W = n), W === 0 && ((or = ue() + 500), Fs && on())
	}
}
function Mn(e) {
	$t !== null && $t.tag === 0 && !(W & 6) && Jn()
	var t = W
	W |= 1
	var n = Ye.transition,
		r = b
	try {
		if (((Ye.transition = null), (b = 1), e)) return e()
	} finally {
		;(b = r), (Ye.transition = n), (W = t), !(W & 6) && on()
	}
}
function $a() {
	;(Fe = $n.current), q($n)
}
function Sn(e, t) {
	;(e.finishedWork = null), (e.finishedLanes = 0)
	var n = e.timeoutHandle
	if ((n !== -1 && ((e.timeoutHandle = -1), Cg(n)), fe !== null))
		for (n = fe.return; n !== null; ) {
			var r = n
			switch ((Pa(r), r.tag)) {
				case 1:
					;(r = r.type.childContextTypes), r != null && cs()
					break
				case 3:
					ir(), q(Ne), q(Ee), La()
					break
				case 5:
					Ra(r)
					break
				case 4:
					ir()
					break
				case 13:
					q(ee)
					break
				case 19:
					q(ee)
					break
				case 10:
					Ea(r.type._context)
					break
				case 22:
				case 23:
					$a()
			}
			n = n.return
		}
	if (
		((me = e),
		(fe = e = Xt(e.current, null)),
		(ye = Fe = t),
		(he = 0),
		(si = null),
		(za = Us = En = 0),
		(Ve = Fr = null),
		gn !== null)
	) {
		for (t = 0; t < gn.length; t++)
			if (((n = gn[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null
				var i = r.next,
					s = n.pending
				if (s !== null) {
					var o = s.next
					;(s.next = i), (r.next = o)
				}
				n.pending = r
			}
		gn = null
	}
	return e
}
function Xh(e, t) {
	do {
		var n = fe
		try {
			if ((Ta(), (bi.current = ws), ys)) {
				for (var r = ne.memoizedState; r !== null; ) {
					var i = r.queue
					i !== null && (i.pending = null), (r = r.next)
				}
				ys = !1
			}
			if (
				((Tn = 0),
				(pe = de = ne = null),
				(_r = !1),
				(ni = 0),
				(Ia.current = null),
				n === null || n.return === null)
			) {
				;(he = 1), (si = t), (fe = null)
				break
			}
			e: {
				var s = e,
					o = n.return,
					l = n,
					a = t
				if (
					((t = ye),
					(l.flags |= 32768),
					a !== null &&
						typeof a == 'object' &&
						typeof a.then == 'function')
				) {
					var u = a,
						c = l,
						f = c.tag
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var d = c.alternate
						d
							? ((c.updateQueue = d.updateQueue),
							  (c.memoizedState = d.memoizedState),
							  (c.lanes = d.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null))
					}
					var v = mc(o)
					if (v !== null) {
						;(v.flags &= -257),
							vc(v, o, l, s, t),
							v.mode & 1 && pc(s, u, t),
							(t = v),
							(a = u)
						var g = t.updateQueue
						if (g === null) {
							var y = new Set()
							y.add(a), (t.updateQueue = y)
						} else g.add(a)
						break e
					} else {
						if (!(t & 1)) {
							pc(s, u, t), Wa()
							break e
						}
						a = Error(T(426))
					}
				} else if (J && l.mode & 1) {
					var k = mc(o)
					if (k !== null) {
						!(k.flags & 65536) && (k.flags |= 256),
							vc(k, o, l, s, t),
							ka(sr(a, l))
						break e
					}
				}
				;(s = a = sr(a, l)),
					he !== 4 && (he = 2),
					Fr === null ? (Fr = [s]) : Fr.push(s),
					(s = o)
				do {
					switch (s.tag) {
						case 3:
							;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
							var p = Oh(s, a, t)
							ac(s, p)
							break e
						case 1:
							l = a
							var h = s.type,
								m = s.stateNode
							if (
								!(s.flags & 128) &&
								(typeof h.getDerivedStateFromError ==
									'function' ||
									(m !== null &&
										typeof m.componentDidCatch ==
											'function' &&
										(Qt === null || !Qt.has(m))))
							) {
								;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
								var w = Nh(s, l, t)
								ac(s, w)
								break e
							}
					}
					s = s.return
				} while (s !== null)
			}
			Jh(n)
		} catch (x) {
			;(t = x), fe === n && n !== null && (fe = n = n.return)
			continue
		}
		break
	} while (!0)
}
function Zh() {
	var e = Ss.current
	return (Ss.current = ws), e === null ? ws : e
}
function Wa() {
	;(he === 0 || he === 3 || he === 2) && (he = 4),
		me === null || (!(En & 268435455) && !(Us & 268435455)) || Bt(me, ye)
}
function ks(e, t) {
	var n = W
	W |= 2
	var r = Zh()
	;(me !== e || ye !== t) && ((wt = null), Sn(e, t))
	do
		try {
			Yg()
			break
		} catch (i) {
			Xh(e, i)
		}
	while (!0)
	if ((Ta(), (W = n), (Ss.current = r), fe !== null)) throw Error(T(261))
	return (me = null), (ye = 0), he
}
function Yg() {
	for (; fe !== null; ) qh(fe)
}
function Xg() {
	for (; fe !== null && !xv(); ) qh(fe)
}
function qh(e) {
	var t = tp(e.alternate, e, Fe)
	;(e.memoizedProps = e.pendingProps),
		t === null ? Jh(e) : (fe = t),
		(Ia.current = null)
}
function Jh(e) {
	var t = e
	do {
		var n = t.alternate
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Wg(n, t)), n !== null)) {
				;(n.flags &= 32767), (fe = n)
				return
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
			else {
				;(he = 6), (fe = null)
				return
			}
		} else if (((n = $g(n, t, Fe)), n !== null)) {
			fe = n
			return
		}
		if (((t = t.sibling), t !== null)) {
			fe = t
			return
		}
		fe = t = e
	} while (t !== null)
	he === 0 && (he = 5)
}
function hn(e, t, n) {
	var r = b,
		i = Ye.transition
	try {
		;(Ye.transition = null), (b = 1), Zg(e, t, n, r)
	} finally {
		;(Ye.transition = i), (b = r)
	}
	return null
}
function Zg(e, t, n, r) {
	do Jn()
	while ($t !== null)
	if (W & 6) throw Error(T(327))
	n = e.finishedWork
	var i = e.finishedLanes
	if (n === null) return null
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(T(177))
	;(e.callbackNode = null), (e.callbackPriority = 0)
	var s = n.lanes | n.childLanes
	if (
		(Lv(e, s),
		e === me && ((fe = me = null), (ye = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			_i ||
			((_i = !0),
			np(is, function () {
				return Jn(), null
			})),
		(s = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || s)
	) {
		;(s = Ye.transition), (Ye.transition = null)
		var o = b
		b = 1
		var l = W
		;(W |= 4),
			(Ia.current = null),
			Gg(e, n),
			Kh(n, e),
			gg(vl),
			(os = !!ml),
			(vl = ml = null),
			(e.current = n),
			bg(n),
			Pv(),
			(W = l),
			(b = o),
			(Ye.transition = s)
	} else e.current = n
	if (
		(_i && ((_i = !1), ($t = e), (Ps = i)),
		(s = e.pendingLanes),
		s === 0 && (Qt = null),
		Tv(n.stateNode),
		je(e, ue()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]),
				r(i.value, { componentStack: i.stack, digest: i.digest })
	if (xs) throw ((xs = !1), (e = jl), (jl = null), e)
	return (
		Ps & 1 && e.tag !== 0 && Jn(),
		(s = e.pendingLanes),
		s & 1 ? (e === Fl ? Ir++ : ((Ir = 0), (Fl = e))) : (Ir = 0),
		on(),
		null
	)
}
function Jn() {
	if ($t !== null) {
		var e = Od(Ps),
			t = Ye.transition,
			n = b
		try {
			if (((Ye.transition = null), (b = 16 > e ? 16 : e), $t === null))
				var r = !1
			else {
				if (((e = $t), ($t = null), (Ps = 0), W & 6))
					throw Error(T(331))
				var i = W
				for (W |= 4, L = e.current; L !== null; ) {
					var s = L,
						o = s.child
					if (L.flags & 16) {
						var l = s.deletions
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var u = l[a]
								for (L = u; L !== null; ) {
									var c = L
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											jr(8, c, s)
									}
									var f = c.child
									if (f !== null) (f.return = c), (L = f)
									else
										for (; L !== null; ) {
											c = L
											var d = c.sibling,
												v = c.return
											if ((Hh(c), c === u)) {
												L = null
												break
											}
											if (d !== null) {
												;(d.return = v), (L = d)
												break
											}
											L = v
										}
								}
							}
							var g = s.alternate
							if (g !== null) {
								var y = g.child
								if (y !== null) {
									g.child = null
									do {
										var k = y.sibling
										;(y.sibling = null), (y = k)
									} while (y !== null)
								}
							}
							L = s
						}
					}
					if (s.subtreeFlags & 2064 && o !== null)
						(o.return = s), (L = o)
					else
						e: for (; L !== null; ) {
							if (((s = L), s.flags & 2048))
								switch (s.tag) {
									case 0:
									case 11:
									case 15:
										jr(9, s, s.return)
								}
							var p = s.sibling
							if (p !== null) {
								;(p.return = s.return), (L = p)
								break e
							}
							L = s.return
						}
				}
				var h = e.current
				for (L = h; L !== null; ) {
					o = L
					var m = o.child
					if (o.subtreeFlags & 2064 && m !== null)
						(m.return = o), (L = m)
					else
						e: for (o = h; L !== null; ) {
							if (((l = L), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											Bs(9, l)
									}
								} catch (x) {
									oe(l, l.return, x)
								}
							if (l === o) {
								L = null
								break e
							}
							var w = l.sibling
							if (w !== null) {
								;(w.return = l.return), (L = w)
								break e
							}
							L = l.return
						}
				}
				if (
					((W = i),
					on(),
					ht && typeof ht.onPostCommitFiberRoot == 'function')
				)
					try {
						ht.onPostCommitFiberRoot(Vs, e)
					} catch {}
				r = !0
			}
			return r
		} finally {
			;(b = n), (Ye.transition = t)
		}
	}
	return !1
}
function Dc(e, t, n) {
	;(t = sr(n, t)),
		(t = Oh(e, t, 1)),
		(e = Kt(e, t, 1)),
		(t = De()),
		e !== null && (di(e, 1, t), je(e, t))
}
function oe(e, t, n) {
	if (e.tag === 3) Dc(e, e, n)
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Dc(t, e, n)
				break
			} else if (t.tag === 1) {
				var r = t.stateNode
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Qt === null || !Qt.has(r)))
				) {
					;(e = sr(n, e)),
						(e = Nh(t, e, 1)),
						(t = Kt(t, e, 1)),
						(e = De()),
						t !== null && (di(t, 1, e), je(t, e))
					break
				}
			}
			t = t.return
		}
}
function qg(e, t, n) {
	var r = e.pingCache
	r !== null && r.delete(t),
		(t = De()),
		(e.pingedLanes |= e.suspendedLanes & n),
		me === e &&
			(ye & n) === n &&
			(he === 4 ||
			(he === 3 && (ye & 130023424) === ye && 500 > ue() - Ba)
				? Sn(e, 0)
				: (za |= n)),
		je(e, t)
}
function ep(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = Ti), (Ti <<= 1), !(Ti & 130023424) && (Ti = 4194304))
			: (t = 1))
	var n = De()
	;(e = Rt(e, t)), e !== null && (di(e, t, n), je(e, n))
}
function Jg(e) {
	var t = e.memoizedState,
		n = 0
	t !== null && (n = t.retryLane), ep(e, n)
}
function ey(e, t) {
	var n = 0
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState
			i !== null && (n = i.retryLane)
			break
		case 19:
			r = e.stateNode
			break
		default:
			throw Error(T(314))
	}
	r !== null && r.delete(t), ep(e, n)
}
var tp
tp = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Ne.current) Oe = !0
		else {
			if (!(e.lanes & n) && !(t.flags & 128))
				return (Oe = !1), Ug(e, t, n)
			Oe = !!(e.flags & 131072)
		}
	else (Oe = !1), J && t.flags & 1048576 && sh(t, hs, t.index)
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type
			Qi(e, t), (e = t.pendingProps)
			var i = tr(t, Ee.current)
			qn(t, n), (i = Oa(null, t, r, e, i, n))
			var s = Na()
			return (
				(t.flags |= 1),
				typeof i == 'object' &&
				i !== null &&
				typeof i.render == 'function' &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  _e(r) ? ((s = !0), fs(t)) : (s = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0
								? i.state
								: null),
					  Aa(t),
					  (i.updater = zs),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  Tl(t, r, e, n),
					  (t = Al(null, t, r, !0, s, n)))
					: ((t.tag = 0),
					  J && s && xa(t),
					  Ae(null, t, i, n),
					  (t = t.child)),
				t
			)
		case 16:
			r = t.elementType
			e: {
				switch (
					(Qi(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = ny(r)),
					(e = rt(r, e)),
					i)
				) {
					case 0:
						t = Ml(null, t, r, e, n)
						break e
					case 1:
						t = wc(null, t, r, e, n)
						break e
					case 11:
						t = gc(null, t, r, e, n)
						break e
					case 14:
						t = yc(null, t, r, rt(r.type, e), n)
						break e
				}
				throw Error(T(306, r, ''))
			}
			return t
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : rt(r, i)),
				Ml(e, t, r, i, n)
			)
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : rt(r, i)),
				wc(e, t, r, i, n)
			)
		case 3:
			e: {
				if ((Ih(t), e === null)) throw Error(T(387))
				;(r = t.pendingProps),
					(s = t.memoizedState),
					(i = s.element),
					fh(e, t),
					vs(t, r, null, n)
				var o = t.memoizedState
				if (((r = o.element), s.isDehydrated))
					if (
						((s = {
							element: r,
							isDehydrated: !1,
							cache: o.cache,
							pendingSuspenseBoundaries:
								o.pendingSuspenseBoundaries,
							transitions: o.transitions,
						}),
						(t.updateQueue.baseState = s),
						(t.memoizedState = s),
						t.flags & 256)
					) {
						;(i = sr(Error(T(423)), t)), (t = Sc(e, t, r, n, i))
						break e
					} else if (r !== i) {
						;(i = sr(Error(T(424)), t)), (t = Sc(e, t, r, n, i))
						break e
					} else
						for (
							Ie = bt(t.stateNode.containerInfo.firstChild),
								ze = t,
								J = !0,
								st = null,
								n = uh(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling)
				else {
					if ((nr(), r === i)) {
						t = Lt(e, t, n)
						break e
					}
					Ae(e, t, r, n)
				}
				t = t.child
			}
			return t
		case 5:
			return (
				dh(t),
				e === null && Pl(t),
				(r = t.type),
				(i = t.pendingProps),
				(s = e !== null ? e.memoizedProps : null),
				(o = i.children),
				gl(r, i)
					? (o = null)
					: s !== null && gl(r, s) && (t.flags |= 32),
				Fh(e, t),
				Ae(e, t, o, n),
				t.child
			)
		case 6:
			return e === null && Pl(t), null
		case 13:
			return zh(e, t, n)
		case 4:
			return (
				Da(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = rr(t, null, r, n)) : Ae(e, t, r, n),
				t.child
			)
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : rt(r, i)),
				gc(e, t, r, i, n)
			)
		case 7:
			return Ae(e, t, t.pendingProps, n), t.child
		case 8:
			return Ae(e, t, t.pendingProps.children, n), t.child
		case 12:
			return Ae(e, t, t.pendingProps.children, n), t.child
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(s = t.memoizedProps),
					(o = i.value),
					K(ps, r._currentValue),
					(r._currentValue = o),
					s !== null)
				)
					if (at(s.value, o)) {
						if (s.children === i.children && !Ne.current) {
							t = Lt(e, t, n)
							break e
						}
					} else
						for (
							s = t.child, s !== null && (s.return = t);
							s !== null;

						) {
							var l = s.dependencies
							if (l !== null) {
								o = s.child
								for (var a = l.firstContext; a !== null; ) {
									if (a.context === r) {
										if (s.tag === 1) {
											;(a = Ct(-1, n & -n)), (a.tag = 2)
											var u = s.updateQueue
											if (u !== null) {
												u = u.shared
												var c = u.pending
												c === null
													? (a.next = a)
													: ((a.next = c.next),
													  (c.next = a)),
													(u.pending = a)
											}
										}
										;(s.lanes |= n),
											(a = s.alternate),
											a !== null && (a.lanes |= n),
											kl(s.return, n, t),
											(l.lanes |= n)
										break
									}
									a = a.next
								}
							} else if (s.tag === 10)
								o = s.type === t.type ? null : s.child
							else if (s.tag === 18) {
								if (((o = s.return), o === null))
									throw Error(T(341))
								;(o.lanes |= n),
									(l = o.alternate),
									l !== null && (l.lanes |= n),
									kl(o, n, t),
									(o = s.sibling)
							} else o = s.child
							if (o !== null) o.return = s
							else
								for (o = s; o !== null; ) {
									if (o === t) {
										o = null
										break
									}
									if (((s = o.sibling), s !== null)) {
										;(s.return = o.return), (o = s)
										break
									}
									o = o.return
								}
							s = o
						}
				Ae(e, t, i.children, n), (t = t.child)
			}
			return t
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				qn(t, n),
				(i = Xe(i)),
				(r = r(i)),
				(t.flags |= 1),
				Ae(e, t, r, n),
				t.child
			)
		case 14:
			return (
				(r = t.type),
				(i = rt(r, t.pendingProps)),
				(i = rt(r.type, i)),
				yc(e, t, r, i, n)
			)
		case 15:
			return _h(e, t, t.type, t.pendingProps, n)
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : rt(r, i)),
				Qi(e, t),
				(t.tag = 1),
				_e(r) ? ((e = !0), fs(t)) : (e = !1),
				qn(t, n),
				Vh(t, r, i),
				Tl(t, r, i, n),
				Al(null, t, r, !0, e, n)
			)
		case 19:
			return Bh(e, t, n)
		case 22:
			return jh(e, t, n)
	}
	throw Error(T(156, t.tag))
}
function np(e, t) {
	return Dd(e, t)
}
function ty(e, t, n, r) {
	;(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null)
}
function Qe(e, t, n, r) {
	return new ty(e, t, n, r)
}
function Ha(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent)
}
function ny(e) {
	if (typeof e == 'function') return Ha(e) ? 1 : 0
	if (e != null) {
		if (((e = e.$$typeof), e === ua)) return 11
		if (e === ca) return 14
	}
	return 2
}
function Xt(e, t) {
	var n = e.alternate
	return (
		n === null
			? ((n = Qe(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null
				? null
				: { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	)
}
function Zi(e, t, n, r, i, s) {
	var o = 2
	if (((r = e), typeof e == 'function')) Ha(e) && (o = 1)
	else if (typeof e == 'string') o = 5
	else
		e: switch (e) {
			case Vn:
				return xn(n.children, i, s, t)
			case aa:
				;(o = 8), (i |= 8)
				break
			case Yo:
				return (
					(e = Qe(12, n, t, i | 2)),
					(e.elementType = Yo),
					(e.lanes = s),
					e
				)
			case Xo:
				return (
					(e = Qe(13, n, t, i)),
					(e.elementType = Xo),
					(e.lanes = s),
					e
				)
			case Zo:
				return (
					(e = Qe(19, n, t, i)),
					(e.elementType = Zo),
					(e.lanes = s),
					e
				)
			case dd:
				return $s(n, i, s, t)
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case cd:
							o = 10
							break e
						case fd:
							o = 9
							break e
						case ua:
							o = 11
							break e
						case ca:
							o = 14
							break e
						case Ft:
							;(o = 16), (r = null)
							break e
					}
				throw Error(T(130, e == null ? e : typeof e, ''))
		}
	return (
		(t = Qe(o, n, t, i)),
		(t.elementType = e),
		(t.type = r),
		(t.lanes = s),
		t
	)
}
function xn(e, t, n, r) {
	return (e = Qe(7, e, r, t)), (e.lanes = n), e
}
function $s(e, t, n, r) {
	return (
		(e = Qe(22, e, r, t)),
		(e.elementType = dd),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	)
}
function Lo(e, t, n) {
	return (e = Qe(6, e, null, t)), (e.lanes = n), e
}
function Vo(e, t, n) {
	return (
		(t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	)
}
function ry(e, t, n, r, i) {
	;(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = fo(0)),
		(this.expirationTimes = fo(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = fo(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null)
}
function Ga(e, t, n, r, i, s, o, l, a) {
	return (
		(e = new ry(e, t, n, l, a)),
		t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
		(s = Qe(3, null, null, t)),
		(e.current = s),
		(s.stateNode = e),
		(s.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		Aa(s),
		e
	)
}
function iy(e, t, n) {
	var r =
		3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
	return {
		$$typeof: Ln,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	}
}
function rp(e) {
	if (!e) return en
	e = e._reactInternals
	e: {
		if (Dn(e) !== e || e.tag !== 1) throw Error(T(170))
		var t = e
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context
					break e
				case 1:
					if (_e(t.type)) {
						t =
							t.stateNode
								.__reactInternalMemoizedMergedChildContext
						break e
					}
			}
			t = t.return
		} while (t !== null)
		throw Error(T(171))
	}
	if (e.tag === 1) {
		var n = e.type
		if (_e(n)) return rh(e, n, t)
	}
	return t
}
function ip(e, t, n, r, i, s, o, l, a) {
	return (
		(e = Ga(n, r, !0, e, i, s, o, l, a)),
		(e.context = rp(null)),
		(n = e.current),
		(r = De()),
		(i = Yt(n)),
		(s = Ct(r, i)),
		(s.callback = t ?? null),
		Kt(n, s, i),
		(e.current.lanes = i),
		di(e, i, r),
		je(e, r),
		e
	)
}
function Ws(e, t, n, r) {
	var i = t.current,
		s = De(),
		o = Yt(i)
	return (
		(n = rp(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = Ct(s, o)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Kt(i, t, o)),
		e !== null && (lt(e, i, o, s), Gi(e, i, o)),
		o
	)
}
function Cs(e) {
	if (((e = e.current), !e.child)) return null
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode
		default:
			return e.child.stateNode
	}
}
function Rc(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane
		e.retryLane = n !== 0 && n < t ? n : t
	}
}
function ba(e, t) {
	Rc(e, t), (e = e.alternate) && Rc(e, t)
}
function sy() {
	return null
}
var sp =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e)
		  }
function Ka(e) {
	this._internalRoot = e
}
Hs.prototype.render = Ka.prototype.render = function (e) {
	var t = this._internalRoot
	if (t === null) throw Error(T(409))
	Ws(e, t, null, null)
}
Hs.prototype.unmount = Ka.prototype.unmount = function () {
	var e = this._internalRoot
	if (e !== null) {
		this._internalRoot = null
		var t = e.containerInfo
		Mn(function () {
			Ws(null, e, null, null)
		}),
			(t[Dt] = null)
	}
}
function Hs(e) {
	this._internalRoot = e
}
Hs.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = jd()
		e = { blockedOn: null, target: e, priority: t }
		for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
		zt.splice(n, 0, e), n === 0 && Id(e)
	}
}
function Qa(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Gs(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 ||
				e.nodeValue !== ' react-mount-point-unstable '))
	)
}
function Lc() {}
function oy(e, t, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var s = r
			r = function () {
				var u = Cs(o)
				s.call(u)
			}
		}
		var o = ip(t, r, e, 0, null, !1, !1, '', Lc)
		return (
			(e._reactRootContainer = o),
			(e[Dt] = o.current),
			Zr(e.nodeType === 8 ? e.parentNode : e),
			Mn(),
			o
		)
	}
	for (; (i = e.lastChild); ) e.removeChild(i)
	if (typeof r == 'function') {
		var l = r
		r = function () {
			var u = Cs(a)
			l.call(u)
		}
	}
	var a = Ga(e, 0, !1, null, null, !1, !1, '', Lc)
	return (
		(e._reactRootContainer = a),
		(e[Dt] = a.current),
		Zr(e.nodeType === 8 ? e.parentNode : e),
		Mn(function () {
			Ws(t, a, n, r)
		}),
		a
	)
}
function bs(e, t, n, r, i) {
	var s = n._reactRootContainer
	if (s) {
		var o = s
		if (typeof i == 'function') {
			var l = i
			i = function () {
				var a = Cs(o)
				l.call(a)
			}
		}
		Ws(t, o, e, i)
	} else o = oy(n, t, e, i, r)
	return Cs(o)
}
Nd = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode
			if (t.current.memoizedState.isDehydrated) {
				var n = Er(t.pendingLanes)
				n !== 0 &&
					(ha(t, n | 1),
					je(t, ue()),
					!(W & 6) && ((or = ue() + 500), on()))
			}
			break
		case 13:
			Mn(function () {
				var r = Rt(e, 1)
				if (r !== null) {
					var i = De()
					lt(r, e, 1, i)
				}
			}),
				ba(e, 1)
	}
}
pa = function (e) {
	if (e.tag === 13) {
		var t = Rt(e, 134217728)
		if (t !== null) {
			var n = De()
			lt(t, e, 134217728, n)
		}
		ba(e, 134217728)
	}
}
_d = function (e) {
	if (e.tag === 13) {
		var t = Yt(e),
			n = Rt(e, t)
		if (n !== null) {
			var r = De()
			lt(n, e, t, r)
		}
		ba(e, t)
	}
}
jd = function () {
	return b
}
Fd = function (e, t) {
	var n = b
	try {
		return (b = e), t()
	} finally {
		b = n
	}
}
ll = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((el(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode
				for (
					n = n.querySelectorAll(
						'input[name=' +
							JSON.stringify('' + t) +
							'][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t]
					if (r !== e && r.form === e.form) {
						var i = js(r)
						if (!i) throw Error(T(90))
						pd(r), el(r, i)
					}
				}
			}
			break
		case 'textarea':
			vd(e, n)
			break
		case 'select':
			;(t = n.value), t != null && Qn(e, !!n.multiple, t, !1)
	}
}
kd = Ua
Cd = Mn
var ly = { usingClientEntryPoint: !1, Events: [pi, jn, js, xd, Pd, Ua] },
	Pr = {
		findFiberByHostInstance: vn,
		bundleType: 0,
		version: '18.3.1',
		rendererPackageName: 'react-dom',
	},
	ay = {
		bundleType: Pr.bundleType,
		version: Pr.version,
		rendererPackageName: Pr.rendererPackageName,
		rendererConfig: Pr.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: Ot.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Md(e)), e === null ? null : e.stateNode
		},
		findFiberByHostInstance: Pr.findFiberByHostInstance || sy,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
	}
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var ji = __REACT_DEVTOOLS_GLOBAL_HOOK__
	if (!ji.isDisabled && ji.supportsFiber)
		try {
			;(Vs = ji.inject(ay)), (ht = ji)
		} catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ly
$e.createPortal = function (e, t) {
	var n =
		2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
	if (!Qa(t)) throw Error(T(200))
	return iy(e, t, null, n)
}
$e.createRoot = function (e, t) {
	if (!Qa(e)) throw Error(T(299))
	var n = !1,
		r = '',
		i = sp
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = Ga(e, 1, !1, null, null, n, !1, r, i)),
		(e[Dt] = t.current),
		Zr(e.nodeType === 8 ? e.parentNode : e),
		new Ka(t)
	)
}
$e.findDOMNode = function (e) {
	if (e == null) return null
	if (e.nodeType === 1) return e
	var t = e._reactInternals
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(T(188))
			: ((e = Object.keys(e).join(',')), Error(T(268, e)))
	return (e = Md(t)), (e = e === null ? null : e.stateNode), e
}
$e.flushSync = function (e) {
	return Mn(e)
}
$e.hydrate = function (e, t, n) {
	if (!Gs(t)) throw Error(T(200))
	return bs(null, e, t, !0, n)
}
$e.hydrateRoot = function (e, t, n) {
	if (!Qa(e)) throw Error(T(405))
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		s = '',
		o = sp
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
		(t = ip(t, null, e, 1, n ?? null, i, !1, s, o)),
		(e[Dt] = t.current),
		Zr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i)
	return new Hs(t)
}
$e.render = function (e, t, n) {
	if (!Gs(t)) throw Error(T(200))
	return bs(null, e, t, !1, n)
}
$e.unmountComponentAtNode = function (e) {
	if (!Gs(e)) throw Error(T(40))
	return e._reactRootContainer
		? (Mn(function () {
				bs(null, null, e, !1, function () {
					;(e._reactRootContainer = null), (e[Dt] = null)
				})
		  }),
		  !0)
		: !1
}
$e.unstable_batchedUpdates = Ua
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!Gs(n)) throw Error(T(200))
	if (e == null || e._reactInternals === void 0) throw Error(T(38))
	return bs(e, t, n, !1, r)
}
$e.version = '18.3.1-next-f1338f8080-20240426'
function op() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(op)
		} catch (e) {
			console.error(e)
		}
}
op(), (od.exports = $e)
var uy = od.exports,
	Vc = uy
;(Ko.createRoot = Vc.createRoot), (Ko.hydrateRoot = Vc.hydrateRoot)
const Oo = [
		{
			src: 'Abstract-Arch--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Arch-Door--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Circle-Sharp-Half--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Cloud-Horizontal--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Cross--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Donut--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Half-Moon--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Loading--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Nail-Cape--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Nose--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Oval-Sharp--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Petal--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Pine-Nature--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Rainbow--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Sunset--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Abstract-Water-Shadow-Line--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Circle-Half--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Circle-Point-Target--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Circle-Spin--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Cloud-Half--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Curve-Line--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Flash--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Flower-Marigold-Nature--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Flower-Spin-Nature--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Line-Ribbon--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Star-Cosmos--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Star-Ribbon-Cross--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Star-Sparkle--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Tree-Leaves-Nature--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
		{
			src: 'Triangle-Diamond--Streamline-Geometric-Shapes.svg',
			level: 'level-one',
			matched: !1,
		},
	],
	cy = [
		{
			src: 'Elements-organic-shape-abstract-arch-thick.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-arch-thin.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-clay.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-comet.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-filter-funnel.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-footprint-tulip.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-fork.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-leg.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-m-bird.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-nose.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-orange-fruit.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-paint.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-peanut.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-sparkle-dash.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-tag-square-trapezoid.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-three-nose.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-triangular-boomerang.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-waffle-reticulum.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-abstract-wave.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-bird-nature.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-bubble.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-bush-big-nature.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-bush-curly-nature.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-circle--loading-spin.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-circle-curly.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-circle-stone-rock.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-circle.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-crown.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-heart.svg',
			level: 'level-two',
			matched: !1,
		},
		{
			src: 'Elements-organic-shape-vase-ton.svg',
			level: 'level-two',
			matched: !1,
		},
	],
	fy = [
		{
			src: 'Abril Fatface - Display.svg',
			level: 'level-three',
			matched: !1,
		},
		{
			src: 'Amatic SC - Handwriting.svg',
			level: 'level-three',
			matched: !1,
		},
		{
			src: 'Architects Daughter - Handwriting.svg',
			level: 'level-three',
			matched: !1,
		},
		{ src: 'Arvo - Serif.svg', level: 'level-three', matched: !1 },
		{ src: 'Baloo 2 - Display.svg', level: 'level-three', matched: !1 },
		{ src: 'Bangers - Display.svg', level: 'level-three', matched: !1 },
		{ src: 'Bebas Neue - Display.svg', level: 'level-three', matched: !1 },
		{
			src: 'Courier Prime - Monospace.svg',
			level: 'level-three',
			matched: !1,
		},
		{ src: 'Crimson Text - Serif.svg', level: 'level-three', matched: !1 },
		{
			src: 'Dancing Script - Handwriting.svg',
			level: 'level-three',
			matched: !1,
		},
		{
			src: 'Fira Sans - Sans-serif.svg',
			level: 'level-three',
			matched: !1,
		},
		{
			src: 'Great Vibes - Handwriting.svg',
			level: 'level-three',
			matched: !1,
		},
		{
			src: 'IBM Plex Mono - Monospace.svg',
			level: 'level-three',
			matched: !1,
		},
		{
			src: 'Inconsolata - Monospace.svg',
			level: 'level-three',
			matched: !1,
		},
		{ src: 'Lato - Sans-serif.svg', level: 'level-three', matched: !1 },
		{ src: 'Lobster - Display.svg', level: 'level-three', matched: !1 },
		{ src: 'Lora - Serif.svg', level: 'level-three', matched: !1 },
		{ src: 'Merriweather - Serif.svg', level: 'level-three', matched: !1 },
		{
			src: 'Montserrat - Sans-serif.svg',
			level: 'level-three',
			matched: !1,
		},
		{ src: 'Noto Serif - Serif.svg', level: 'level-three', matched: !1 },
		{ src: 'Nunito - Sans-serif.svg', level: 'level-three', matched: !1 },
		{
			src: 'Open Sans - Sans-serif.svg',
			level: 'level-three',
			matched: !1,
		},
		{ src: 'Oswald - Sans-serif.svg', level: 'level-three', matched: !1 },
		{
			src: 'Pacifico - Handwriting.svg',
			level: 'level-three',
			matched: !1,
		},
		{
			src: 'Playfair Display - Serif.svg',
			level: 'level-three',
			matched: !1,
		},
		{ src: 'PT Sans - Sans-serif.svg', level: 'level-three', matched: !1 },
		{ src: 'Raleway - Sans-serif.svg', level: 'level-three', matched: !1 },
		{ src: 'Roboto - Sans-serif.svg', level: 'level-three', matched: !1 },
		{
			src: 'Source Sans Pro - Sans-serif.svg',
			level: 'level-three',
			matched: !1,
		},
		{ src: 'Ubuntu - Sans-serif.svg', level: 'level-three', matched: !1 },
	],
	dy = ({
		src: e,
		level: t,
		id: n,
		handleChoice: r,
		flipped: i,
		disabled: s,
		cardBack: o,
		matched: l,
	}) => {
		const a = {
				src: e,
				level: t,
				id: n,
				matched: l,
				flipped: i,
				disabled: s,
			},
			[u, c] = O.useState(!1)
		O.useEffect(() => {
			if (i && l) {
				const d = setTimeout(() => {
					c(!0)
				}, 200)
				return () => clearTimeout(d)
			} else c(!1)
		}, [i, l])
		const f = () => {
			s || r(a)
		}
		return N.jsx('div', {
			className: 'card w-full mx-auto hover:cursor-pointer',
			children: N.jsxs('div', {
				className: i ? 'flipped' : '',
				children: [
					N.jsx('img', {
						className: 'front mx-auto',
						src: `assets/${t}/${e}`,
						alt: e,
					}),
					N.jsx('img', {
						className: 'back mx-auto bg-purple-100/55',
						src: `assets/card-backs/${o}`,
						alt: 'back of card.',
						onClick: f,
					}),
					t === 'level-three' &&
						N.jsx('p', {
							className: `absolute opacity-0 bottom--1 bg-white-100 w-full text-step--1 text-black-300 font-bold text-center transform transition-all duration-500 ease-in-out ${
								u
									? 'opacity-100 bottom-0'
									: 'opacity-0 bottom--1'
							}`,
							children: e.split('-')[0],
						}),
				],
			}),
		})
	}
var lp = { exports: {} }
;(function (e, t) {
	;(function (n, r) {
		e.exports = r(O)
	})(typeof self < 'u' ? self : jm, function (n) {
		return (function (r) {
			var i = {}
			function s(o) {
				if (i[o]) return i[o].exports
				var l = (i[o] = { i: o, l: !1, exports: {} })
				return (
					r[o].call(l.exports, l, l.exports, s), (l.l = !0), l.exports
				)
			}
			return (
				(s.m = r),
				(s.c = i),
				(s.d = function (o, l, a) {
					s.o(o, l) ||
						Object.defineProperty(o, l, { enumerable: !0, get: a })
				}),
				(s.r = function (o) {
					typeof Symbol < 'u' &&
						Symbol.toStringTag &&
						Object.defineProperty(o, Symbol.toStringTag, {
							value: 'Module',
						}),
						Object.defineProperty(o, '__esModule', { value: !0 })
				}),
				(s.t = function (o, l) {
					if (
						(1 & l && (o = s(o)),
						8 & l ||
							(4 & l &&
								typeof o == 'object' &&
								o &&
								o.__esModule))
					)
						return o
					var a = Object.create(null)
					if (
						(s.r(a),
						Object.defineProperty(a, 'default', {
							enumerable: !0,
							value: o,
						}),
						2 & l && typeof o != 'string')
					)
						for (var u in o)
							s.d(
								a,
								u,
								function (c) {
									return o[c]
								}.bind(null, u)
							)
					return a
				}),
				(s.n = function (o) {
					var l =
						o && o.__esModule
							? function () {
									return o.default
							  }
							: function () {
									return o
							  }
					return s.d(l, 'a', l), l
				}),
				(s.o = function (o, l) {
					return Object.prototype.hasOwnProperty.call(o, l)
				}),
				(s.p = ''),
				s((s.s = 2))
			)
		})([
			function (r, i) {
				r.exports = n
			},
			function (r, i, s) {
				var o = {
					linear: function (l, a, u, c) {
						return ((u - a) * l) / c + a
					},
					easeInQuad: function (l, a, u, c) {
						return (u - a) * (l /= c) * l + a
					},
					easeOutQuad: function (l, a, u, c) {
						return -(u - a) * (l /= c) * (l - 2) + a
					},
					easeInOutQuad: function (l, a, u, c) {
						var f = u - a
						return (l /= c / 2) < 1
							? (f / 2) * l * l + a
							: (-f / 2) * (--l * (l - 2) - 1) + a
					},
					easeInCubic: function (l, a, u, c) {
						return (u - a) * (l /= c) * l * l + a
					},
					easeOutCubic: function (l, a, u, c) {
						return (u - a) * ((l = l / c - 1) * l * l + 1) + a
					},
					easeInOutCubic: function (l, a, u, c) {
						var f = u - a
						return (l /= c / 2) < 1
							? (f / 2) * l * l * l + a
							: (f / 2) * ((l -= 2) * l * l + 2) + a
					},
					easeInQuart: function (l, a, u, c) {
						return (u - a) * (l /= c) * l * l * l + a
					},
					easeOutQuart: function (l, a, u, c) {
						return -(u - a) * ((l = l / c - 1) * l * l * l - 1) + a
					},
					easeInOutQuart: function (l, a, u, c) {
						var f = u - a
						return (l /= c / 2) < 1
							? (f / 2) * l * l * l * l + a
							: (-f / 2) * ((l -= 2) * l * l * l - 2) + a
					},
					easeInQuint: function (l, a, u, c) {
						return (u - a) * (l /= c) * l * l * l * l + a
					},
					easeOutQuint: function (l, a, u, c) {
						return (
							(u - a) * ((l = l / c - 1) * l * l * l * l + 1) + a
						)
					},
					easeInOutQuint: function (l, a, u, c) {
						var f = u - a
						return (l /= c / 2) < 1
							? (f / 2) * l * l * l * l * l + a
							: (f / 2) * ((l -= 2) * l * l * l * l + 2) + a
					},
					easeInSine: function (l, a, u, c) {
						var f = u - a
						return -f * Math.cos((l / c) * (Math.PI / 2)) + f + a
					},
					easeOutSine: function (l, a, u, c) {
						return (u - a) * Math.sin((l / c) * (Math.PI / 2)) + a
					},
					easeInOutSine: function (l, a, u, c) {
						return (
							(-(u - a) / 2) * (Math.cos((Math.PI * l) / c) - 1) +
							a
						)
					},
					easeInExpo: function (l, a, u, c) {
						return l == 0
							? a
							: (u - a) * Math.pow(2, 10 * (l / c - 1)) + a
					},
					easeOutExpo: function (l, a, u, c) {
						var f = u - a
						return l == c
							? a + f
							: f * (1 - Math.pow(2, (-10 * l) / c)) + a
					},
					easeInOutExpo: function (l, a, u, c) {
						var f = u - a
						return l === 0
							? a
							: l === c
							? a + f
							: (l /= c / 2) < 1
							? (f / 2) * Math.pow(2, 10 * (l - 1)) + a
							: (f / 2) * (2 - Math.pow(2, -10 * --l)) + a
					},
					easeInCirc: function (l, a, u, c) {
						return -(u - a) * (Math.sqrt(1 - (l /= c) * l) - 1) + a
					},
					easeOutCirc: function (l, a, u, c) {
						return (u - a) * Math.sqrt(1 - (l = l / c - 1) * l) + a
					},
					easeInOutCirc: function (l, a, u, c) {
						var f = u - a
						return (l /= c / 2) < 1
							? (-f / 2) * (Math.sqrt(1 - l * l) - 1) + a
							: (f / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + a
					},
					easeInElastic: function (l, a, u, c) {
						var f,
							d,
							v,
							g = u - a
						return (
							(v = 1.70158),
							l === 0
								? a
								: (l /= c) == 1
								? a + g
								: ((d = 0) || (d = 0.3 * c),
								  (f = g) < Math.abs(g)
										? ((f = g), (v = d / 4))
										: (v =
												(d / (2 * Math.PI)) *
												Math.asin(g / f)),
								  -f *
										Math.pow(2, 10 * (l -= 1)) *
										Math.sin(
											((l * c - v) * (2 * Math.PI)) / d
										) +
										a)
						)
					},
					easeOutElastic: function (l, a, u, c) {
						var f,
							d,
							v,
							g = u - a
						return (
							(v = 1.70158),
							l === 0
								? a
								: (l /= c) == 1
								? a + g
								: ((d = 0) || (d = 0.3 * c),
								  (f = g) < Math.abs(g)
										? ((f = g), (v = d / 4))
										: (v =
												(d / (2 * Math.PI)) *
												Math.asin(g / f)),
								  f *
										Math.pow(2, -10 * l) *
										Math.sin(
											((l * c - v) * (2 * Math.PI)) / d
										) +
										g +
										a)
						)
					},
					easeInOutElastic: function (l, a, u, c) {
						var f,
							d,
							v,
							g = u - a
						return (
							(v = 1.70158),
							l === 0
								? a
								: (l /= c / 2) == 2
								? a + g
								: ((d = 0) || (d = c * 0.44999999999999996),
								  (f = g) < Math.abs(g)
										? ((f = g), (v = d / 4))
										: (v =
												(d / (2 * Math.PI)) *
												Math.asin(g / f)),
								  l < 1
										? f *
												Math.pow(2, 10 * (l -= 1)) *
												Math.sin(
													((l * c - v) *
														(2 * Math.PI)) /
														d
												) *
												-0.5 +
										  a
										: f *
												Math.pow(2, -10 * (l -= 1)) *
												Math.sin(
													((l * c - v) *
														(2 * Math.PI)) /
														d
												) *
												0.5 +
										  g +
										  a)
						)
					},
					easeInBack: function (l, a, u, c, f) {
						return (
							f === void 0 && (f = 1.70158),
							(u - a) * (l /= c) * l * ((f + 1) * l - f) + a
						)
					},
					easeOutBack: function (l, a, u, c, f) {
						return (
							f === void 0 && (f = 1.70158),
							(u - a) *
								((l = l / c - 1) * l * ((f + 1) * l + f) + 1) +
								a
						)
					},
					easeInOutBack: function (l, a, u, c, f) {
						var d = u - a
						return (
							f === void 0 && (f = 1.70158),
							(l /= c / 2) < 1
								? (d / 2) *
										(l * l * ((1 + (f *= 1.525)) * l - f)) +
								  a
								: (d / 2) *
										((l -= 2) *
											l *
											((1 + (f *= 1.525)) * l + f) +
											2) +
								  a
						)
					},
					easeInBounce: function (l, a, u, c) {
						var f = u - a
						return f - o.easeOutBounce(c - l, 0, f, c) + a
					},
					easeOutBounce: function (l, a, u, c) {
						var f = u - a
						return (l /= c) < 0.36363636363636365
							? f * (7.5625 * l * l) + a
							: l < 0.7272727272727273
							? f *
									(7.5625 * (l -= 0.5454545454545454) * l +
										0.75) +
							  a
							: l < 0.9090909090909091
							? f *
									(7.5625 * (l -= 0.8181818181818182) * l +
										0.9375) +
							  a
							: f *
									(7.5625 * (l -= 0.9545454545454546) * l +
										0.984375) +
							  a
					},
					easeInOutBounce: function (l, a, u, c) {
						var f = u - a
						return l < c / 2
							? 0.5 * o.easeInBounce(2 * l, 0, f, c) + a
							: 0.5 * o.easeOutBounce(2 * l - c, 0, f, c) +
									0.5 * f +
									a
					},
				}
				r.exports = o
			},
			function (r, i, s) {
				r.exports = s(3)
			},
			function (r, i, s) {
				s.r(i),
					s.d(i, 'ReactConfetti', function () {
						return cn
					})
				var o,
					l,
					a = s(0),
					u = s.n(a),
					c = s(1),
					f = s.n(c)
				function d(S, C) {
					return S + Math.random() * (C - S)
				}
				function v(S, C) {
					for (var M = 0; M < C.length; M++) {
						var P = C[M]
						;(P.enumerable = P.enumerable || !1),
							(P.configurable = !0),
							'value' in P && (P.writable = !0),
							Object.defineProperty(S, P.key, P)
					}
				}
				function g(S, C, M) {
					return (
						C in S
							? Object.defineProperty(S, C, {
									value: M,
									enumerable: !0,
									configurable: !0,
									writable: !0,
							  })
							: (S[C] = M),
						S
					)
				}
				;(function (S) {
					;(S[(S.Circle = 0)] = 'Circle'),
						(S[(S.Square = 1)] = 'Square'),
						(S[(S.Strip = 2)] = 'Strip')
				})(o || (o = {})),
					(function (S) {
						;(S[(S.Positive = 1)] = 'Positive'),
							(S[(S.Negative = -1)] = 'Negative')
					})(l || (l = {}))
				var y = (function () {
					function S(P, H, V, U) {
						;(function (to, no) {
							if (!(to instanceof no))
								throw new TypeError(
									'Cannot call a class as a function'
								)
						})(this, S),
							g(this, 'context', void 0),
							g(this, 'radius', void 0),
							g(this, 'x', void 0),
							g(this, 'y', void 0),
							g(this, 'w', void 0),
							g(this, 'h', void 0),
							g(this, 'vx', void 0),
							g(this, 'vy', void 0),
							g(this, 'shape', void 0),
							g(this, 'angle', void 0),
							g(this, 'angularSpin', void 0),
							g(this, 'color', void 0),
							g(this, 'rotateY', void 0),
							g(this, 'rotationDirection', void 0),
							g(this, 'getOptions', void 0),
							(this.getOptions = H)
						var Y,
							se,
							X = this.getOptions(),
							yt = X.colors,
							et = X.initialVelocityX,
							tt = X.initialVelocityY
						;(this.context = P),
							(this.x = V),
							(this.y = U),
							(this.w = d(5, 20)),
							(this.h = d(5, 20)),
							(this.radius = d(5, 10)),
							(this.vx =
								typeof et == 'number'
									? d(-et, et)
									: d(et.min, et.max)),
							(this.vy =
								typeof tt == 'number'
									? d(-tt, 0)
									: d(tt.min, tt.max)),
							(this.shape =
								((Y = 0),
								(se = 2),
								Math.floor(Y + Math.random() * (se - Y + 1)))),
							(this.angle = (d(0, 360) * Math.PI) / 180),
							(this.angularSpin = d(-0.2, 0.2)),
							(this.color =
								yt[Math.floor(Math.random() * yt.length)]),
							(this.rotateY = d(0, 1)),
							(this.rotationDirection = d(0, 1)
								? l.Positive
								: l.Negative)
					}
					var C, M
					return (
						(C = S),
						(M = [
							{
								key: 'update',
								value: function () {
									var P = this.getOptions(),
										H = P.gravity,
										V = P.wind,
										U = P.friction,
										Y = P.opacity,
										se = P.drawShape
									;(this.x += this.vx),
										(this.y += this.vy),
										(this.vy += H),
										(this.vx += V),
										(this.vx *= U),
										(this.vy *= U),
										this.rotateY >= 1 &&
										this.rotationDirection === l.Positive
											? (this.rotationDirection =
													l.Negative)
											: this.rotateY <= -1 &&
											  this.rotationDirection ===
													l.Negative &&
											  (this.rotationDirection =
													l.Positive)
									var X = 0.1 * this.rotationDirection
									if (
										((this.rotateY += X),
										(this.angle += this.angularSpin),
										this.context.save(),
										this.context.translate(this.x, this.y),
										this.context.rotate(this.angle),
										this.context.scale(1, this.rotateY),
										this.context.rotate(this.angle),
										this.context.beginPath(),
										(this.context.fillStyle = this.color),
										(this.context.strokeStyle = this.color),
										(this.context.globalAlpha = Y),
										(this.context.lineCap = 'round'),
										(this.context.lineWidth = 2),
										se && typeof se == 'function')
									)
										se.call(this, this.context)
									else
										switch (this.shape) {
											case o.Circle:
												this.context.beginPath(),
													this.context.arc(
														0,
														0,
														this.radius,
														0,
														2 * Math.PI
													),
													this.context.fill()
												break
											case o.Square:
												this.context.fillRect(
													-this.w / 2,
													-this.h / 2,
													this.w,
													this.h
												)
												break
											case o.Strip:
												this.context.fillRect(
													-this.w / 6,
													-this.h / 2,
													this.w / 3,
													this.h
												)
										}
									this.context.closePath(),
										this.context.restore()
								},
							},
						]) && v(C.prototype, M),
						S
					)
				})()
				function k(S, C, M) {
					return (
						C in S
							? Object.defineProperty(S, C, {
									value: M,
									enumerable: !0,
									configurable: !0,
									writable: !0,
							  })
							: (S[C] = M),
						S
					)
				}
				var p = function S(C, M) {
					var P = this
					;(function (V, U) {
						if (!(V instanceof U))
							throw new TypeError(
								'Cannot call a class as a function'
							)
					})(this, S),
						k(this, 'canvas', void 0),
						k(this, 'context', void 0),
						k(this, 'getOptions', void 0),
						k(this, 'x', 0),
						k(this, 'y', 0),
						k(this, 'w', 0),
						k(this, 'h', 0),
						k(this, 'lastNumberOfPieces', 0),
						k(this, 'tweenInitTime', Date.now()),
						k(this, 'particles', []),
						k(this, 'particlesGenerated', 0),
						k(this, 'removeParticleAt', function (V) {
							P.particles.splice(V, 1)
						}),
						k(this, 'getParticle', function () {
							var V = d(P.x, P.w + P.x),
								U = d(P.y, P.h + P.y)
							return new y(P.context, P.getOptions, V, U)
						}),
						k(this, 'animate', function () {
							var V = P.canvas,
								U = P.context,
								Y = P.particlesGenerated,
								se = P.lastNumberOfPieces,
								X = P.getOptions(),
								yt = X.run,
								et = X.recycle,
								tt = X.numberOfPieces,
								to = X.debug,
								no = X.tweenFunction,
								ro = X.tweenDuration
							if (!yt) return !1
							var io = P.particles.length,
								hr = et ? io : Y,
								so = Date.now()
							if (hr < tt) {
								se !== tt &&
									((P.tweenInitTime = so),
									(P.lastNumberOfPieces = tt))
								for (
									var Su = P.tweenInitTime,
										_m = no(
											so - Su > ro
												? ro
												: Math.max(0, so - Su),
											hr,
											tt,
											ro
										),
										xu = Math.round(_m - hr),
										Pu = 0;
									Pu < xu;
									Pu++
								)
									P.particles.push(P.getParticle())
								P.particlesGenerated += xu
							}
							return (
								to &&
									((U.font = '12px sans-serif'),
									(U.fillStyle = '#333'),
									(U.textAlign = 'right'),
									U.fillText(
										'Particles: '.concat(io),
										V.width - 10,
										V.height - 20
									)),
								P.particles.forEach(function (pr, ku) {
									pr.update(),
										(pr.y > V.height ||
											pr.y < -100 ||
											pr.x > V.width + 100 ||
											pr.x < -100) &&
											(et && hr <= tt
												? (P.particles[ku] =
														P.getParticle())
												: P.removeParticleAt(ku))
								}),
								io > 0 || hr < tt
							)
						}),
						(this.canvas = C)
					var H = this.canvas.getContext('2d')
					if (!H) throw new Error('Could not get canvas context')
					;(this.context = H), (this.getOptions = M)
				}
				function h(S, C) {
					var M = Object.keys(S)
					if (Object.getOwnPropertySymbols) {
						var P = Object.getOwnPropertySymbols(S)
						C &&
							(P = P.filter(function (H) {
								return Object.getOwnPropertyDescriptor(
									S,
									H
								).enumerable
							})),
							M.push.apply(M, P)
					}
					return M
				}
				function m(S) {
					for (var C = 1; C < arguments.length; C++) {
						var M = arguments[C] != null ? arguments[C] : {}
						C % 2
							? h(Object(M), !0).forEach(function (P) {
									x(S, P, M[P])
							  })
							: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									S,
									Object.getOwnPropertyDescriptors(M)
							  )
							: h(Object(M)).forEach(function (P) {
									Object.defineProperty(
										S,
										P,
										Object.getOwnPropertyDescriptor(M, P)
									)
							  })
					}
					return S
				}
				function w(S, C) {
					for (var M = 0; M < C.length; M++) {
						var P = C[M]
						;(P.enumerable = P.enumerable || !1),
							(P.configurable = !0),
							'value' in P && (P.writable = !0),
							Object.defineProperty(S, P.key, P)
					}
				}
				function x(S, C, M) {
					return (
						C in S
							? Object.defineProperty(S, C, {
									value: M,
									enumerable: !0,
									configurable: !0,
									writable: !0,
							  })
							: (S[C] = M),
						S
					)
				}
				var A = {
						width: typeof window < 'u' ? window.innerWidth : 300,
						height: typeof window < 'u' ? window.innerHeight : 200,
						numberOfPieces: 200,
						friction: 0.99,
						wind: 0,
						gravity: 0.1,
						initialVelocityX: 4,
						initialVelocityY: 10,
						colors: [
							'#f44336',
							'#e91e63',
							'#9c27b0',
							'#673ab7',
							'#3f51b5',
							'#2196f3',
							'#03a9f4',
							'#00bcd4',
							'#009688',
							'#4CAF50',
							'#8BC34A',
							'#CDDC39',
							'#FFEB3B',
							'#FFC107',
							'#FF9800',
							'#FF5722',
							'#795548',
						],
						opacity: 1,
						debug: !1,
						tweenFunction: f.a.easeInOutQuad,
						tweenDuration: 5e3,
						recycle: !0,
						run: !0,
					},
					D = (function () {
						function S(P, H) {
							var V = this
							;(function (Y, se) {
								if (!(Y instanceof se))
									throw new TypeError(
										'Cannot call a class as a function'
									)
							})(this, S),
								x(this, 'canvas', void 0),
								x(this, 'context', void 0),
								x(this, '_options', void 0),
								x(this, 'generator', void 0),
								x(this, 'rafId', void 0),
								x(this, 'setOptionsWithDefaults', function (Y) {
									var se = {
										confettiSource: {
											x: 0,
											y: 0,
											w: V.canvas.width,
											h: 0,
										},
									}
									;(V._options = m(m(m({}, se), A), Y)),
										Object.assign(V, Y.confettiSource)
								}),
								x(this, 'update', function () {
									var Y = V.options,
										se = Y.run,
										X = Y.onConfettiComplete,
										yt = V.canvas,
										et = V.context
									se &&
										((et.fillStyle = 'white'),
										et.clearRect(
											0,
											0,
											yt.width,
											yt.height
										)),
										V.generator.animate()
											? (V.rafId = requestAnimationFrame(
													V.update
											  ))
											: (X &&
													typeof X == 'function' &&
													V.generator
														.particlesGenerated >
														0 &&
													X.call(V, V),
											  (V._options.run = !1))
								}),
								x(this, 'reset', function () {
									V.generator &&
										V.generator.particlesGenerated > 0 &&
										((V.generator.particlesGenerated = 0),
										(V.generator.particles = []),
										(V.generator.lastNumberOfPieces = 0))
								}),
								x(this, 'stop', function () {
									;(V.options = { run: !1 }),
										V.rafId &&
											(cancelAnimationFrame(V.rafId),
											(V.rafId = void 0))
								}),
								(this.canvas = P)
							var U = this.canvas.getContext('2d')
							if (!U)
								throw new Error('Could not get canvas context')
							;(this.context = U),
								(this.generator = new p(
									this.canvas,
									function () {
										return V.options
									}
								)),
								(this.options = H),
								this.update()
						}
						var C, M
						return (
							(C = S),
							(M = [
								{
									key: 'options',
									get: function () {
										return this._options
									},
									set: function (P) {
										var H =
												this._options &&
												this._options.run,
											V =
												this._options &&
												this._options.recycle
										this.setOptionsWithDefaults(P),
											this.generator &&
												(Object.assign(
													this.generator,
													this.options.confettiSource
												),
												typeof P.recycle == 'boolean' &&
													P.recycle &&
													V === !1 &&
													(this.generator.lastNumberOfPieces =
														this.generator.particles.length)),
											typeof P.run == 'boolean' &&
												P.run &&
												H === !1 &&
												this.update()
									},
								},
							]) && w(C.prototype, M),
							S
						)
					})()
				function E(S) {
					return (
						(function (C) {
							if (Array.isArray(C)) return le(C)
						})(S) ||
						(function (C) {
							if (
								typeof Symbol < 'u' &&
								Symbol.iterator in Object(C)
							)
								return Array.from(C)
						})(S) ||
						Nt(S) ||
						(function () {
							throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
						})()
					)
				}
				function B(S) {
					return (B =
						typeof Symbol == 'function' &&
						typeof Symbol.iterator == 'symbol'
							? function (C) {
									return typeof C
							  }
							: function (C) {
									return C &&
										typeof Symbol == 'function' &&
										C.constructor === Symbol &&
										C !== Symbol.prototype
										? 'symbol'
										: typeof C
							  })(S)
				}
				function _() {
					return (_ =
						Object.assign ||
						function (S) {
							for (var C = 1; C < arguments.length; C++) {
								var M = arguments[C]
								for (var P in M)
									Object.prototype.hasOwnProperty.call(
										M,
										P
									) && (S[P] = M[P])
							}
							return S
						}).apply(this, arguments)
				}
				function F(S, C) {
					var M = Object.keys(S)
					if (Object.getOwnPropertySymbols) {
						var P = Object.getOwnPropertySymbols(S)
						C &&
							(P = P.filter(function (H) {
								return Object.getOwnPropertyDescriptor(
									S,
									H
								).enumerable
							})),
							M.push.apply(M, P)
					}
					return M
				}
				function ce(S) {
					for (var C = 1; C < arguments.length; C++) {
						var M = arguments[C] != null ? arguments[C] : {}
						C % 2
							? F(Object(M), !0).forEach(function (P) {
									ut(S, P, M[P])
							  })
							: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									S,
									Object.getOwnPropertyDescriptors(M)
							  )
							: F(Object(M)).forEach(function (P) {
									Object.defineProperty(
										S,
										P,
										Object.getOwnPropertyDescriptor(M, P)
									)
							  })
					}
					return S
				}
				function qe(S, C) {
					return (
						(function (M) {
							if (Array.isArray(M)) return M
						})(S) ||
						(function (M, P) {
							if (
								!(
									typeof Symbol > 'u' ||
									!(Symbol.iterator in Object(M))
								)
							) {
								var H = [],
									V = !0,
									U = !1,
									Y = void 0
								try {
									for (
										var se, X = M[Symbol.iterator]();
										!(V = (se = X.next()).done) &&
										(H.push(se.value),
										!P || H.length !== P);
										V = !0
									);
								} catch (yt) {
									;(U = !0), (Y = yt)
								} finally {
									try {
										V || X.return == null || X.return()
									} finally {
										if (U) throw Y
									}
								}
								return H
							}
						})(S, C) ||
						Nt(S, C) ||
						(function () {
							throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
						})()
					)
				}
				function Nt(S, C) {
					if (S) {
						if (typeof S == 'string') return le(S, C)
						var M = Object.prototype.toString.call(S).slice(8, -1)
						return (
							M === 'Object' &&
								S.constructor &&
								(M = S.constructor.name),
							M === 'Map' || M === 'Set'
								? Array.from(S)
								: M === 'Arguments' ||
								  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
										M
								  )
								? le(S, C)
								: void 0
						)
					}
				}
				function le(S, C) {
					;(C == null || C > S.length) && (C = S.length)
					for (var M = 0, P = new Array(C); M < C; M++) P[M] = S[M]
					return P
				}
				function Me(S, C) {
					if (!(S instanceof C))
						throw new TypeError('Cannot call a class as a function')
				}
				function vt(S, C) {
					for (var M = 0; M < C.length; M++) {
						var P = C[M]
						;(P.enumerable = P.enumerable || !1),
							(P.configurable = !0),
							'value' in P && (P.writable = !0),
							Object.defineProperty(S, P.key, P)
					}
				}
				function R(S, C) {
					return (R =
						Object.setPrototypeOf ||
						function (M, P) {
							return (M.__proto__ = P), M
						})(S, C)
				}
				function I(S) {
					var C = (function () {
						if (
							typeof Reflect > 'u' ||
							!Reflect.construct ||
							Reflect.construct.sham
						)
							return !1
						if (typeof Proxy == 'function') return !0
						try {
							return (
								Date.prototype.toString.call(
									Reflect.construct(Date, [], function () {})
								),
								!0
							)
						} catch {
							return !1
						}
					})()
					return function () {
						var M,
							P = ie(S)
						if (C) {
							var H = ie(this).constructor
							M = Reflect.construct(P, arguments, H)
						} else M = P.apply(this, arguments)
						return z(this, M)
					}
				}
				function z(S, C) {
					return !C || (B(C) !== 'object' && typeof C != 'function')
						? Q(S)
						: C
				}
				function Q(S) {
					if (S === void 0)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called"
						)
					return S
				}
				function ie(S) {
					return (ie = Object.setPrototypeOf
						? Object.getPrototypeOf
						: function (C) {
								return C.__proto__ || Object.getPrototypeOf(C)
						  })(S)
				}
				function ut(S, C, M) {
					return (
						C in S
							? Object.defineProperty(S, C, {
									value: M,
									enumerable: !0,
									configurable: !0,
									writable: !0,
							  })
							: (S[C] = M),
						S
					)
				}
				var gt = u.a.createRef(),
					un = (function (S) {
						;(function (V, U) {
							if (typeof U != 'function' && U !== null)
								throw new TypeError(
									'Super expression must either be null or a function'
								)
							;(V.prototype = Object.create(U && U.prototype, {
								constructor: {
									value: V,
									writable: !0,
									configurable: !0,
								},
							})),
								U && R(V, U)
						})(H, S)
						var C,
							M,
							P = I(H)
						function H(V) {
							var U
							Me(this, H)
							for (
								var Y = arguments.length,
									se = new Array(Y > 1 ? Y - 1 : 0),
									X = 1;
								X < Y;
								X++
							)
								se[X - 1] = arguments[X]
							return (
								ut(
									Q(
										(U = P.call.apply(
											P,
											[this, V].concat(se)
										))
									),
									'canvas',
									u.a.createRef()
								),
								ut(Q(U), 'confetti', void 0),
								(U.canvas = V.canvasRef || gt),
								U
							)
						}
						return (
							(C = H),
							(M = [
								{
									key: 'componentDidMount',
									value: function () {
										if (this.canvas.current) {
											var V = Je(this.props)[0]
											this.confetti = new D(
												this.canvas.current,
												V
											)
										}
									},
								},
								{
									key: 'componentDidUpdate',
									value: function () {
										var V = Je(this.props)[0]
										this.confetti &&
											(this.confetti.options = V)
									},
								},
								{
									key: 'componentWillUnmount',
									value: function () {
										this.confetti && this.confetti.stop(),
											(this.confetti = void 0)
									},
								},
								{
									key: 'render',
									value: function () {
										var V = qe(Je(this.props), 2),
											U = V[0],
											Y = V[1],
											se = ce(
												{
													zIndex: 2,
													position: 'absolute',
													pointerEvents: 'none',
													top: 0,
													left: 0,
													bottom: 0,
													right: 0,
												},
												Y.style
											)
										return u.a.createElement(
											'canvas',
											_(
												{
													width: U.width,
													height: U.height,
													ref: this.canvas,
												},
												Y,
												{ style: se }
											)
										)
									},
								},
							]) && vt(C.prototype, M),
							H
						)
					})(a.Component)
				function Je(S) {
					var C = {},
						M = {},
						P = [].concat(E(Object.keys(A)), [
							'confettiSource',
							'drawShape',
							'onConfettiComplete',
						]),
						H = ['canvasRef']
					for (var V in S) {
						var U = S[V]
						P.includes(V)
							? (C[V] = U)
							: H.includes(V)
							? (H[V] = U)
							: (M[V] = U)
					}
					return [C, M, {}]
				}
				ut(un, 'defaultProps', ce({}, A)),
					ut(un, 'displayName', 'ReactConfetti')
				var cn = u.a.forwardRef(function (S, C) {
					return u.a.createElement(un, _({ canvasRef: C }, S))
				})
				i.default = cn
			},
		]).default
	})
})(lp)
var hy = lp.exports
const py = Qf(hy),
	ap = O.createContext({
		transformPagePoint: (e) => e,
		isStatic: !1,
		reducedMotion: 'never',
	}),
	Ks = O.createContext({}),
	Ya = O.createContext(null),
	Xa = typeof window < 'u',
	my = Xa ? O.useLayoutEffect : O.useEffect,
	up = O.createContext({ strict: !1 }),
	Qs = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
	vy = 'framerAppearId',
	cp = 'data-' + Qs(vy),
	gy = { skipAnimations: !1, useManualTiming: !1 }
function yy(e) {
	let t = new Set(),
		n = new Set(),
		r = !1,
		i = !1
	const s = new WeakSet()
	let o = { delta: 0, timestamp: 0, isProcessing: !1 }
	function l(u) {
		s.has(u) && (a.schedule(u), e()), u(o)
	}
	const a = {
		schedule: (u, c = !1, f = !1) => {
			const v = f && r ? t : n
			return c && s.add(u), v.has(u) || v.add(u), u
		},
		cancel: (u) => {
			n.delete(u), s.delete(u)
		},
		process: (u) => {
			if (((o = u), r)) {
				i = !0
				return
			}
			;(r = !0),
				([t, n] = [n, t]),
				n.clear(),
				t.forEach(l),
				(r = !1),
				i && ((i = !1), a.process(u))
		},
	}
	return a
}
const Fi = [
		'read',
		'resolveKeyframes',
		'update',
		'preRender',
		'render',
		'postRender',
	],
	wy = 40
function fp(e, t) {
	let n = !1,
		r = !0
	const i = { delta: 0, timestamp: 0, isProcessing: !1 },
		s = () => (n = !0),
		o = Fi.reduce((p, h) => ((p[h] = yy(s)), p), {}),
		{
			read: l,
			resolveKeyframes: a,
			update: u,
			preRender: c,
			render: f,
			postRender: d,
		} = o,
		v = () => {
			const p = performance.now()
			;(n = !1),
				(i.delta = r
					? 1e3 / 60
					: Math.max(Math.min(p - i.timestamp, wy), 1)),
				(i.timestamp = p),
				(i.isProcessing = !0),
				l.process(i),
				a.process(i),
				u.process(i),
				c.process(i),
				f.process(i),
				d.process(i),
				(i.isProcessing = !1),
				n && t && ((r = !1), e(v))
		},
		g = () => {
			;(n = !0), (r = !0), i.isProcessing || e(v)
		}
	return {
		schedule: Fi.reduce((p, h) => {
			const m = o[h]
			return (
				(p[h] = (w, x = !1, A = !1) => (n || g(), m.schedule(w, x, A))),
				p
			)
		}, {}),
		cancel: (p) => {
			for (let h = 0; h < Fi.length; h++) o[Fi[h]].cancel(p)
		},
		state: i,
		steps: o,
	}
}
const { schedule: Za, cancel: $S } = fp(queueMicrotask, !1)
function Wn(e) {
	return (
		e &&
		typeof e == 'object' &&
		Object.prototype.hasOwnProperty.call(e, 'current')
	)
}
const dp = O.createContext({})
let Oc = !1
function Sy(e, t, n, r, i) {
	const { visualElement: s } = O.useContext(Ks),
		o = O.useContext(up),
		l = O.useContext(Ya),
		a = O.useContext(ap).reducedMotion,
		u = O.useRef()
	;(r = r || o.renderer),
		!u.current &&
			r &&
			(u.current = r(e, {
				visualState: t,
				parent: s,
				props: n,
				presenceContext: l,
				blockInitialAnimation: l ? l.initial === !1 : !1,
				reducedMotionConfig: a,
			}))
	const c = u.current,
		f = O.useContext(dp)
	c &&
		!c.projection &&
		i &&
		(c.type === 'html' || c.type === 'svg') &&
		Py(u.current, n, i, f),
		O.useInsertionEffect(() => {
			c && c.update(n, l)
		})
	const d = O.useRef(!!(n[cp] && !window.HandoffComplete))
	return (
		my(() => {
			c &&
				(c.updateFeatures(),
				Za.render(c.render),
				d.current &&
					c.animationState &&
					c.animationState.animateChanges())
		}),
		O.useEffect(() => {
			c &&
				(!d.current &&
					c.animationState &&
					c.animationState.animateChanges(),
				d.current &&
					((d.current = !1), Oc || ((Oc = !0), queueMicrotask(xy))))
		}),
		c
	)
}
function xy() {
	window.HandoffComplete = !0
}
function Py(e, t, n, r) {
	const {
		layoutId: i,
		layout: s,
		drag: o,
		dragConstraints: l,
		layoutScroll: a,
		layoutRoot: u,
	} = t
	;(e.projection = new n(
		e.latestValues,
		t['data-framer-portal-id'] ? void 0 : hp(e.parent)
	)),
		e.projection.setOptions({
			layoutId: i,
			layout: s,
			alwaysMeasureLayout: !!o || (l && Wn(l)),
			visualElement: e,
			animationType: typeof s == 'string' ? s : 'both',
			initialPromotionConfig: r,
			layoutScroll: a,
			layoutRoot: u,
		})
}
function hp(e) {
	if (e) return e.options.allowProjection !== !1 ? e.projection : hp(e.parent)
}
function ky(e, t, n) {
	return O.useCallback(
		(r) => {
			r && e.mount && e.mount(r),
				t && (r ? t.mount(r) : t.unmount()),
				n && (typeof n == 'function' ? n(r) : Wn(n) && (n.current = r))
		},
		[t]
	)
}
function oi(e) {
	return typeof e == 'string' || Array.isArray(e)
}
function li(e) {
	return e !== null && typeof e == 'object' && typeof e.start == 'function'
}
const qa = [
		'animate',
		'whileInView',
		'whileFocus',
		'whileHover',
		'whileTap',
		'whileDrag',
		'exit',
	],
	Ja = ['initial', ...qa]
function Ys(e) {
	return li(e.animate) || Ja.some((t) => oi(e[t]))
}
function pp(e) {
	return !!(Ys(e) || e.variants)
}
function Cy(e, t) {
	if (Ys(e)) {
		const { initial: n, animate: r } = e
		return {
			initial: n === !1 || oi(n) ? n : void 0,
			animate: oi(r) ? r : void 0,
		}
	}
	return e.inherit !== !1 ? t : {}
}
function Ty(e) {
	const { initial: t, animate: n } = Cy(e, O.useContext(Ks))
	return O.useMemo(() => ({ initial: t, animate: n }), [Nc(t), Nc(n)])
}
function Nc(e) {
	return Array.isArray(e) ? e.join(' ') : e
}
const _c = {
		animation: [
			'animate',
			'variants',
			'whileHover',
			'whileTap',
			'exit',
			'whileInView',
			'whileFocus',
			'whileDrag',
		],
		exit: ['exit'],
		drag: ['drag', 'dragControls'],
		focus: ['whileFocus'],
		hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
		tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
		pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
		inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
		layout: ['layout', 'layoutId'],
	},
	lr = {}
for (const e in _c) lr[e] = { isEnabled: (t) => _c[e].some((n) => !!t[n]) }
function Ey(e) {
	for (const t in e) lr[t] = { ...lr[t], ...e[t] }
}
const mp = O.createContext({}),
	My = Symbol.for('motionComponentSymbol'),
	Te = (e) => e
let Bl = Te
function Ay({
	preloadedFeatures: e,
	createVisualElement: t,
	useRender: n,
	useVisualState: r,
	Component: i,
}) {
	e && Ey(e)
	function s(l, a) {
		let u
		const c = { ...O.useContext(ap), ...l, layoutId: Dy(l) },
			{ isStatic: f } = c,
			d = Ty(l),
			v = r(l, f)
		if (!f && Xa) {
			Ry()
			const g = Ly(c)
			;(u = g.MeasureLayout),
				(d.visualElement = Sy(i, v, c, t, g.ProjectionNode))
		}
		return N.jsxs(Ks.Provider, {
			value: d,
			children: [
				u && d.visualElement
					? N.jsx(u, { visualElement: d.visualElement, ...c })
					: null,
				n(i, l, ky(v, d.visualElement, a), v, f, d.visualElement),
			],
		})
	}
	const o = O.forwardRef(s)
	return (o[My] = i), o
}
function Dy({ layoutId: e }) {
	const t = O.useContext(mp).id
	return t && e !== void 0 ? t + '-' + e : e
}
function Ry(e, t) {
	O.useContext(up).strict
}
function Ly(e) {
	const { drag: t, layout: n } = lr
	if (!t && !n) return {}
	const r = { ...t, ...n }
	return {
		MeasureLayout:
			(t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
				? r.MeasureLayout
				: void 0,
		ProjectionNode: r.ProjectionNode,
	}
}
function Vy(e) {
	function t(r, i = {}) {
		return Ay(e(r, i))
	}
	if (typeof Proxy > 'u') return t
	const n = new Map()
	return new Proxy(t, {
		get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
	})
}
const Oy = [
	'animate',
	'circle',
	'defs',
	'desc',
	'ellipse',
	'g',
	'image',
	'line',
	'filter',
	'marker',
	'mask',
	'metadata',
	'path',
	'pattern',
	'polygon',
	'polyline',
	'rect',
	'stop',
	'switch',
	'symbol',
	'svg',
	'text',
	'tspan',
	'use',
	'view',
]
function eu(e) {
	return typeof e != 'string' || e.includes('-')
		? !1
		: !!(Oy.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const Ts = {}
function Ny(e) {
	Object.assign(Ts, e)
}
const vi = [
		'transformPerspective',
		'x',
		'y',
		'z',
		'translateX',
		'translateY',
		'translateZ',
		'scale',
		'scaleX',
		'scaleY',
		'rotate',
		'rotateX',
		'rotateY',
		'rotateZ',
		'skew',
		'skewX',
		'skewY',
	],
	ln = new Set(vi)
function vp(e, { layout: t, layoutId: n }) {
	return (
		ln.has(e) ||
		e.startsWith('origin') ||
		((t || n !== void 0) && (!!Ts[e] || e === 'opacity'))
	)
}
const Ce = (e) => !!(e && e.getVelocity),
	_y = {
		x: 'translateX',
		y: 'translateY',
		z: 'translateZ',
		transformPerspective: 'perspective',
	},
	jy = vi.length
function Fy(e, t, n) {
	let r = ''
	for (let i = 0; i < jy; i++) {
		const s = vi[i]
		if (e[s] !== void 0) {
			const o = _y[s] || s
			r += `${o}(${e[s]}) `
		}
	}
	return (r = r.trim()), n ? (r = n(e, t ? '' : r)) : t && (r = 'none'), r
}
const gp = (e) => (t) => typeof t == 'string' && t.startsWith(e),
	yp = gp('--'),
	Iy = gp('var(--'),
	tu = (e) => (Iy(e) ? zy.test(e.split('/*')[0].trim()) : !1),
	zy =
		/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
	By = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
	tn = (e, t, n) => (n > t ? t : n < e ? e : n),
	dr = {
		test: (e) => typeof e == 'number',
		parse: parseFloat,
		transform: (e) => e,
	},
	zr = { ...dr, transform: (e) => tn(0, 1, e) },
	Ii = { ...dr, default: 1 },
	Br = (e) => Math.round(e * 1e5) / 1e5,
	nu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
	Uy =
		/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
	$y =
		/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
function gi(e) {
	return typeof e == 'string'
}
function Wy(e) {
	return e == null
}
const yi = (e) => ({
		test: (t) => gi(t) && t.endsWith(e) && t.split(' ').length === 1,
		parse: parseFloat,
		transform: (t) => `${t}${e}`,
	}),
	jt = yi('deg'),
	mt = yi('%'),
	j = yi('px'),
	Hy = yi('vh'),
	Gy = yi('vw'),
	jc = {
		...mt,
		parse: (e) => mt.parse(e) / 100,
		transform: (e) => mt.transform(e * 100),
	},
	Fc = { ...dr, transform: Math.round },
	wp = {
		borderWidth: j,
		borderTopWidth: j,
		borderRightWidth: j,
		borderBottomWidth: j,
		borderLeftWidth: j,
		borderRadius: j,
		radius: j,
		borderTopLeftRadius: j,
		borderTopRightRadius: j,
		borderBottomRightRadius: j,
		borderBottomLeftRadius: j,
		width: j,
		maxWidth: j,
		height: j,
		maxHeight: j,
		size: j,
		top: j,
		right: j,
		bottom: j,
		left: j,
		padding: j,
		paddingTop: j,
		paddingRight: j,
		paddingBottom: j,
		paddingLeft: j,
		margin: j,
		marginTop: j,
		marginRight: j,
		marginBottom: j,
		marginLeft: j,
		rotate: jt,
		rotateX: jt,
		rotateY: jt,
		rotateZ: jt,
		scale: Ii,
		scaleX: Ii,
		scaleY: Ii,
		scaleZ: Ii,
		skew: jt,
		skewX: jt,
		skewY: jt,
		distance: j,
		translateX: j,
		translateY: j,
		translateZ: j,
		x: j,
		y: j,
		z: j,
		perspective: j,
		transformPerspective: j,
		opacity: zr,
		originX: jc,
		originY: jc,
		originZ: j,
		zIndex: Fc,
		backgroundPositionX: j,
		backgroundPositionY: j,
		fillOpacity: zr,
		strokeOpacity: zr,
		numOctaves: Fc,
	}
function ru(e, t, n) {
	const { style: r, vars: i, transform: s, transformOrigin: o } = e
	let l = !1,
		a = !1,
		u = !0
	for (const c in t) {
		const f = t[c]
		if (yp(c)) {
			i[c] = f
			continue
		}
		const d = wp[c],
			v = By(f, d)
		if (ln.has(c)) {
			if (((l = !0), (s[c] = v), !u)) continue
			f !== (d.default || 0) && (u = !1)
		} else c.startsWith('origin') ? ((a = !0), (o[c] = v)) : (r[c] = v)
	}
	if (
		(t.transform ||
			(l || n
				? (r.transform = Fy(e.transform, u, n))
				: r.transform && (r.transform = 'none')),
		a)
	) {
		const { originX: c = '50%', originY: f = '50%', originZ: d = 0 } = o
		r.transformOrigin = `${c} ${f} ${d}`
	}
}
const iu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} })
function Sp(e, t, n) {
	for (const r in t) !Ce(t[r]) && !vp(r, n) && (e[r] = t[r])
}
function by({ transformTemplate: e }, t) {
	return O.useMemo(() => {
		const n = iu()
		return ru(n, t, e), Object.assign({}, n.vars, n.style)
	}, [t])
}
function Ky(e, t) {
	const n = e.style || {},
		r = {}
	return Sp(r, n, e), Object.assign(r, by(e, t)), r
}
function Qy(e, t) {
	const n = {},
		r = Ky(e, t)
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((n.draggable = !1),
			(r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
			(r.touchAction =
				e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
		e.tabIndex === void 0 &&
			(e.onTap || e.onTapStart || e.whileTap) &&
			(n.tabIndex = 0),
		(n.style = r),
		n
	)
}
const Yy = new Set([
	'animate',
	'exit',
	'variants',
	'initial',
	'style',
	'values',
	'variants',
	'transition',
	'transformTemplate',
	'custom',
	'inherit',
	'onBeforeLayoutMeasure',
	'onAnimationStart',
	'onAnimationComplete',
	'onUpdate',
	'onDragStart',
	'onDrag',
	'onDragEnd',
	'onMeasureDragConstraints',
	'onDirectionLock',
	'onDragTransitionEnd',
	'_dragX',
	'_dragY',
	'onHoverStart',
	'onHoverEnd',
	'onViewportEnter',
	'onViewportLeave',
	'globalTapTarget',
	'ignoreStrict',
	'viewport',
])
function Es(e) {
	return (
		e.startsWith('while') ||
		(e.startsWith('drag') && e !== 'draggable') ||
		e.startsWith('layout') ||
		e.startsWith('onTap') ||
		e.startsWith('onPan') ||
		e.startsWith('onLayout') ||
		Yy.has(e)
	)
}
let xp = (e) => !Es(e)
function Xy(e) {
	e && (xp = (t) => (t.startsWith('on') ? !Es(t) : e(t)))
}
try {
	Xy(require('@emotion/is-prop-valid').default)
} catch {}
function Zy(e, t, n) {
	const r = {}
	for (const i in e)
		(i === 'values' && typeof e.values == 'object') ||
			((xp(i) ||
				(n === !0 && Es(i)) ||
				(!t && !Es(i)) ||
				(e.draggable && i.startsWith('onDrag'))) &&
				(r[i] = e[i]))
	return r
}
function Ic(e, t, n) {
	return typeof e == 'string' ? e : j.transform(t + n * e)
}
function qy(e, t, n) {
	const r = Ic(t, e.x, e.width),
		i = Ic(n, e.y, e.height)
	return `${r} ${i}`
}
const Jy = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
	e0 = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function t0(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1
	const s = i ? Jy : e0
	e[s.offset] = j.transform(-r)
	const o = j.transform(t),
		l = j.transform(n)
	e[s.array] = `${o} ${l}`
}
function su(
	e,
	{
		attrX: t,
		attrY: n,
		attrScale: r,
		originX: i,
		originY: s,
		pathLength: o,
		pathSpacing: l = 1,
		pathOffset: a = 0,
		...u
	},
	c,
	f
) {
	if ((ru(e, u, f), c)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
		return
	}
	;(e.attrs = e.style), (e.style = {})
	const { attrs: d, style: v, dimensions: g } = e
	d.transform && (g && (v.transform = d.transform), delete d.transform),
		g &&
			(i !== void 0 || s !== void 0 || v.transform) &&
			(v.transformOrigin = qy(
				g,
				i !== void 0 ? i : 0.5,
				s !== void 0 ? s : 0.5
			)),
		t !== void 0 && (d.x = t),
		n !== void 0 && (d.y = n),
		r !== void 0 && (d.scale = r),
		o !== void 0 && t0(d, o, l, a, !1)
}
const Pp = () => ({ ...iu(), attrs: {} }),
	ou = (e) => typeof e == 'string' && e.toLowerCase() === 'svg'
function n0(e, t, n, r) {
	const i = O.useMemo(() => {
		const s = Pp()
		return (
			su(s, t, ou(r), e.transformTemplate),
			{ ...s.attrs, style: { ...s.style } }
		)
	}, [t])
	if (e.style) {
		const s = {}
		Sp(s, e.style, e), (i.style = { ...s, ...i.style })
	}
	return i
}
function r0(e = !1) {
	return (n, r, i, { latestValues: s }, o) => {
		const a = (eu(n) ? n0 : Qy)(r, s, o, n),
			u = Zy(r, typeof n == 'string', e),
			c = n !== O.Fragment ? { ...u, ...a, ref: i } : {},
			{ children: f } = r,
			d = O.useMemo(() => (Ce(f) ? f.get() : f), [f])
		return O.createElement(n, { ...c, children: d })
	}
}
function kp(e, { style: t, vars: n }, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r))
	for (const s in n) e.style.setProperty(s, n[s])
}
const Cp = new Set([
	'baseFrequency',
	'diffuseConstant',
	'kernelMatrix',
	'kernelUnitLength',
	'keySplines',
	'keyTimes',
	'limitingConeAngle',
	'markerHeight',
	'markerWidth',
	'numOctaves',
	'targetX',
	'targetY',
	'surfaceScale',
	'specularConstant',
	'specularExponent',
	'stdDeviation',
	'tableValues',
	'viewBox',
	'gradientTransform',
	'pathLength',
	'startOffset',
	'textLength',
	'lengthAdjust',
])
function Tp(e, t, n, r) {
	kp(e, t, void 0, r)
	for (const i in t.attrs) e.setAttribute(Cp.has(i) ? i : Qs(i), t.attrs[i])
}
function lu(e, t, n) {
	var r
	const { style: i } = e,
		s = {}
	for (const o in i)
		(Ce(i[o]) ||
			(t.style && Ce(t.style[o])) ||
			vp(o, e) ||
			((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
				? void 0
				: r.liveStyle) !== void 0) &&
			(s[o] = i[o])
	return (
		n && i && typeof i.willChange == 'string' && (n.applyWillChange = !1), s
	)
}
function Ep(e, t, n) {
	const r = lu(e, t, n)
	for (const i in e)
		if (Ce(e[i]) || Ce(t[i])) {
			const s =
				vi.indexOf(i) !== -1
					? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
					: i
			r[s] = e[i]
		}
	return r
}
function zc(e) {
	const t = [{}, {}]
	return (
		e == null ||
			e.values.forEach((n, r) => {
				;(t[0][r] = n.get()), (t[1][r] = n.getVelocity())
			}),
		t
	)
}
function au(e, t, n, r) {
	if (typeof t == 'function') {
		const [i, s] = zc(r)
		t = t(n !== void 0 ? n : e.custom, i, s)
	}
	if (
		(typeof t == 'string' && (t = e.variants && e.variants[t]),
		typeof t == 'function')
	) {
		const [i, s] = zc(r)
		t = t(n !== void 0 ? n : e.custom, i, s)
	}
	return t
}
function i0(e) {
	const t = O.useRef(null)
	return t.current === null && (t.current = e()), t.current
}
const Ul = (e) => Array.isArray(e),
	s0 = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
	o0 = (e) => (Ul(e) ? e[e.length - 1] || 0 : e)
function qi(e) {
	const t = Ce(e) ? e.get() : e
	return s0(t) ? t.toValue() : t
}
const Mp = new Set(['opacity', 'clipPath', 'filter', 'transform'])
function Ap(e) {
	if (ln.has(e)) return 'transform'
	if (Mp.has(e)) return Qs(e)
}
function Xs(e, t) {
	e.indexOf(t) === -1 && e.push(t)
}
function Zs(e, t) {
	const n = e.indexOf(t)
	n > -1 && e.splice(n, 1)
}
function l0(
	{
		applyWillChange: e = !1,
		scrapeMotionValuesFromProps: t,
		createRenderState: n,
		onMount: r,
	},
	i,
	s,
	o,
	l
) {
	const a = { latestValues: u0(i, s, o, l ? !1 : e, t), renderState: n() }
	return r && (a.mount = (u) => r(i, u, a)), a
}
const Dp = (e) => (t, n) => {
	const r = O.useContext(Ks),
		i = O.useContext(Ya),
		s = () => l0(e, t, r, i, n)
	return n ? s() : i0(s)
}
function a0(e, t) {
	const n = Ap(t)
	n && Xs(e, n)
}
function Bc(e, t, n) {
	const r = Array.isArray(t) ? t : [t]
	for (let i = 0; i < r.length; i++) {
		const s = au(e, r[i])
		if (s) {
			const { transitionEnd: o, transition: l, ...a } = s
			n(a, o)
		}
	}
}
function u0(e, t, n, r, i) {
	var s
	const o = {},
		l = [],
		a =
			r &&
			((s = e.style) === null || s === void 0 ? void 0 : s.willChange) ===
				void 0,
		u = i(e, {})
	for (const k in u) o[k] = qi(u[k])
	let { initial: c, animate: f } = e
	const d = Ys(e),
		v = pp(e)
	t &&
		v &&
		!d &&
		e.inherit !== !1 &&
		(c === void 0 && (c = t.initial), f === void 0 && (f = t.animate))
	let g = n ? n.initial === !1 : !1
	g = g || c === !1
	const y = g ? f : c
	return (
		y &&
			typeof y != 'boolean' &&
			!li(y) &&
			Bc(e, y, (k, p) => {
				for (const h in k) {
					let m = k[h]
					if (Array.isArray(m)) {
						const w = g ? m.length - 1 : 0
						m = m[w]
					}
					m !== null && (o[h] = m)
				}
				for (const h in p) o[h] = p[h]
			}),
		a &&
			(f &&
				c !== !1 &&
				!li(f) &&
				Bc(e, f, (k) => {
					for (const p in k) a0(l, p)
				}),
			l.length && (o.willChange = l.join(','))),
		o
	)
}
const {
		schedule: G,
		cancel: Vt,
		state: ge,
		steps: No,
	} = fp(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : Te, !0),
	c0 = {
		useVisualState: Dp({
			scrapeMotionValuesFromProps: Ep,
			createRenderState: Pp,
			onMount: (e, t, { renderState: n, latestValues: r }) => {
				G.read(() => {
					try {
						n.dimensions =
							typeof t.getBBox == 'function'
								? t.getBBox()
								: t.getBoundingClientRect()
					} catch {
						n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
					}
				}),
					G.render(() => {
						su(n, r, ou(t.tagName), e.transformTemplate), Tp(t, n)
					})
			},
		}),
	},
	f0 = {
		useVisualState: Dp({
			applyWillChange: !0,
			scrapeMotionValuesFromProps: lu,
			createRenderState: iu,
		}),
	}
function d0(e, { forwardMotionProps: t = !1 }, n, r) {
	return {
		...(eu(e) ? c0 : f0),
		preloadedFeatures: n,
		useRender: r0(t),
		createVisualElement: r,
		Component: e,
	}
}
function kt(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const Rp = (e) =>
	e.pointerType === 'mouse'
		? typeof e.button != 'number' || e.button <= 0
		: e.isPrimary !== !1
function qs(e, t = 'page') {
	return { point: { x: e[`${t}X`], y: e[`${t}Y`] } }
}
const h0 = (e) => (t) => Rp(t) && e(t, qs(t))
function Tt(e, t, n, r) {
	return kt(e, t, h0(n), r)
}
const p0 = (e, t) => (n) => t(e(n)),
	Et = (...e) => e.reduce(p0)
function Lp(e) {
	let t = null
	return () => {
		const n = () => {
			t = null
		}
		return t === null ? ((t = e), n) : !1
	}
}
const Uc = Lp('dragHorizontal'),
	$c = Lp('dragVertical')
function Vp(e) {
	let t = !1
	if (e === 'y') t = $c()
	else if (e === 'x') t = Uc()
	else {
		const n = Uc(),
			r = $c()
		n && r
			? (t = () => {
					n(), r()
			  })
			: (n && n(), r && r())
	}
	return t
}
function Op() {
	const e = Vp(!0)
	return e ? (e(), !1) : !0
}
class an {
	constructor(t) {
		;(this.isMounted = !1), (this.node = t)
	}
	update() {}
}
function Wc(e, t) {
	const n = t ? 'pointerenter' : 'pointerleave',
		r = t ? 'onHoverStart' : 'onHoverEnd',
		i = (s, o) => {
			if (s.pointerType === 'touch' || Op()) return
			const l = e.getProps()
			e.animationState &&
				l.whileHover &&
				e.animationState.setActive('whileHover', t)
			const a = l[r]
			a && G.postRender(() => a(s, o))
		}
	return Tt(e.current, n, i, { passive: !e.getProps()[r] })
}
class m0 extends an {
	mount() {
		this.unmount = Et(Wc(this.node, !0), Wc(this.node, !1))
	}
	unmount() {}
}
class v0 extends an {
	constructor() {
		super(...arguments), (this.isActive = !1)
	}
	onFocus() {
		let t = !1
		try {
			t = this.node.current.matches(':focus-visible')
		} catch {
			t = !0
		}
		!t ||
			!this.node.animationState ||
			(this.node.animationState.setActive('whileFocus', !0),
			(this.isActive = !0))
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive('whileFocus', !1),
			(this.isActive = !1))
	}
	mount() {
		this.unmount = Et(
			kt(this.node.current, 'focus', () => this.onFocus()),
			kt(this.node.current, 'blur', () => this.onBlur())
		)
	}
	unmount() {}
}
const Np = (e, t) => (t ? (e === t ? !0 : Np(e, t.parentElement)) : !1)
function _o(e, t) {
	if (!t) return
	const n = new PointerEvent('pointer' + e)
	t(n, qs(n))
}
class g0 extends an {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = Te),
			(this.removeEndListeners = Te),
			(this.removeAccessibleListeners = Te),
			(this.startPointerPress = (t, n) => {
				if (this.isPressing) return
				this.removeEndListeners()
				const r = this.node.getProps(),
					s = Tt(
						window,
						'pointerup',
						(l, a) => {
							if (!this.checkPressEnd()) return
							const {
									onTap: u,
									onTapCancel: c,
									globalTapTarget: f,
								} = this.node.getProps(),
								d =
									!f && !Np(this.node.current, l.target)
										? c
										: u
							d && G.update(() => d(l, a))
						},
						{ passive: !(r.onTap || r.onPointerUp) }
					),
					o = Tt(
						window,
						'pointercancel',
						(l, a) => this.cancelPress(l, a),
						{ passive: !(r.onTapCancel || r.onPointerCancel) }
					)
				;(this.removeEndListeners = Et(s, o)), this.startPress(t, n)
			}),
			(this.startAccessiblePress = () => {
				const t = (s) => {
						if (s.key !== 'Enter' || this.isPressing) return
						const o = (l) => {
							l.key !== 'Enter' ||
								!this.checkPressEnd() ||
								_o('up', (a, u) => {
									const { onTap: c } = this.node.getProps()
									c && G.postRender(() => c(a, u))
								})
						}
						this.removeEndListeners(),
							(this.removeEndListeners = kt(
								this.node.current,
								'keyup',
								o
							)),
							_o('down', (l, a) => {
								this.startPress(l, a)
							})
					},
					n = kt(this.node.current, 'keydown', t),
					r = () => {
						this.isPressing &&
							_o('cancel', (s, o) => this.cancelPress(s, o))
					},
					i = kt(this.node.current, 'blur', r)
				this.removeAccessibleListeners = Et(n, i)
			})
	}
	startPress(t, n) {
		this.isPressing = !0
		const { onTapStart: r, whileTap: i } = this.node.getProps()
		i &&
			this.node.animationState &&
			this.node.animationState.setActive('whileTap', !0),
			r && G.postRender(() => r(t, n))
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap &&
				this.node.animationState &&
				this.node.animationState.setActive('whileTap', !1),
			!Op()
		)
	}
	cancelPress(t, n) {
		if (!this.checkPressEnd()) return
		const { onTapCancel: r } = this.node.getProps()
		r && G.postRender(() => r(t, n))
	}
	mount() {
		const t = this.node.getProps(),
			n = Tt(
				t.globalTapTarget ? window : this.node.current,
				'pointerdown',
				this.startPointerPress,
				{ passive: !(t.onTapStart || t.onPointerStart) }
			),
			r = kt(this.node.current, 'focus', this.startAccessiblePress)
		this.removeStartListeners = Et(n, r)
	}
	unmount() {
		this.removeStartListeners(),
			this.removeEndListeners(),
			this.removeAccessibleListeners()
	}
}
const $l = new WeakMap(),
	jo = new WeakMap(),
	y0 = (e) => {
		const t = $l.get(e.target)
		t && t(e)
	},
	w0 = (e) => {
		e.forEach(y0)
	}
function S0({ root: e, ...t }) {
	const n = e || document
	jo.has(n) || jo.set(n, {})
	const r = jo.get(n),
		i = JSON.stringify(t)
	return (
		r[i] || (r[i] = new IntersectionObserver(w0, { root: e, ...t })), r[i]
	)
}
function x0(e, t, n) {
	const r = S0(t)
	return (
		$l.set(e, n),
		r.observe(e),
		() => {
			$l.delete(e), r.unobserve(e)
		}
	)
}
const P0 = { some: 0, all: 1 }
class k0 extends an {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
	}
	startObserver() {
		this.unmount()
		const { viewport: t = {} } = this.node.getProps(),
			{ root: n, margin: r, amount: i = 'some', once: s } = t,
			o = {
				root: n ? n.current : void 0,
				rootMargin: r,
				threshold: typeof i == 'number' ? i : P0[i],
			},
			l = (a) => {
				const { isIntersecting: u } = a
				if (
					this.isInView === u ||
					((this.isInView = u), s && !u && this.hasEnteredView)
				)
					return
				u && (this.hasEnteredView = !0),
					this.node.animationState &&
						this.node.animationState.setActive('whileInView', u)
				const { onViewportEnter: c, onViewportLeave: f } =
						this.node.getProps(),
					d = u ? c : f
				d && d(a)
			}
		return x0(this.node.current, o, l)
	}
	mount() {
		this.startObserver()
	}
	update() {
		if (typeof IntersectionObserver > 'u') return
		const { props: t, prevProps: n } = this.node
		;['amount', 'margin', 'root'].some(C0(t, n)) && this.startObserver()
	}
	unmount() {}
}
function C0({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n]
}
const T0 = {
	inView: { Feature: k0 },
	tap: { Feature: g0 },
	focus: { Feature: v0 },
	hover: { Feature: m0 },
}
function _p(e, t) {
	if (!Array.isArray(t)) return !1
	const n = t.length
	if (n !== e.length) return !1
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1
	return !0
}
function Js(e, t, n) {
	const r = e.getProps()
	return au(r, t, n !== void 0 ? n : r.custom, e)
}
const Zt = (e) => e * 1e3,
	Mt = (e) => e / 1e3,
	E0 = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
	M0 = (e) => ({
		type: 'spring',
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	A0 = { type: 'keyframes', duration: 0.8 },
	D0 = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	R0 = (e, { keyframes: t }) =>
		t.length > 2
			? A0
			: ln.has(e)
			? e.startsWith('scale')
				? M0(t[1])
				: E0
			: D0
function L0({
	when: e,
	delay: t,
	delayChildren: n,
	staggerChildren: r,
	staggerDirection: i,
	repeat: s,
	repeatType: o,
	repeatDelay: l,
	from: a,
	elapsed: u,
	...c
}) {
	return !!Object.keys(c).length
}
function uu(e, t) {
	return e[t] || e.default || e
}
const V0 = (e) => e !== null
function eo(e, { repeat: t, repeatType: n = 'loop' }, r) {
	const i = e.filter(V0),
		s = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1
	return !s || r === void 0 ? i[s] : r
}
let Ji
function O0() {
	Ji = void 0
}
const qt = {
		now: () => (
			Ji === void 0 &&
				qt.set(
					ge.isProcessing || gy.useManualTiming
						? ge.timestamp
						: performance.now()
				),
			Ji
		),
		set: (e) => {
			;(Ji = e), queueMicrotask(O0)
		},
	},
	jp = (e) => /^0[^.\s]+$/u.test(e)
function N0(e) {
	return typeof e == 'number'
		? e === 0
		: e !== null
		? e === 'none' || e === '0' || jp(e)
		: !0
}
const Fp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
	_0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function j0(e) {
	const t = _0.exec(e)
	if (!t) return [,]
	const [, n, r, i] = t
	return [`--${n ?? r}`, i]
}
function Ip(e, t, n = 1) {
	const [r, i] = j0(e)
	if (!r) return
	const s = window.getComputedStyle(t).getPropertyValue(r)
	if (s) {
		const o = s.trim()
		return Fp(o) ? parseFloat(o) : o
	}
	return tu(i) ? Ip(i, t, n + 1) : i
}
const F0 = new Set([
		'width',
		'height',
		'top',
		'left',
		'right',
		'bottom',
		'x',
		'y',
		'translateX',
		'translateY',
	]),
	Hc = (e) => e === dr || e === j,
	Gc = (e, t) => parseFloat(e.split(', ')[t]),
	bc =
		(e, t) =>
		(n, { transform: r }) => {
			if (r === 'none' || !r) return 0
			const i = r.match(/^matrix3d\((.+)\)$/u)
			if (i) return Gc(i[1], t)
			{
				const s = r.match(/^matrix\((.+)\)$/u)
				return s ? Gc(s[1], e) : 0
			}
		},
	I0 = new Set(['x', 'y', 'z']),
	z0 = vi.filter((e) => !I0.has(e))
function B0(e) {
	const t = []
	return (
		z0.forEach((n) => {
			const r = e.getValue(n)
			r !== void 0 &&
				(t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0))
		}),
		t
	)
}
const ar = {
	width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
		e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
		e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: bc(4, 13),
	y: bc(5, 14),
}
ar.translateX = ar.x
ar.translateY = ar.y
const zp = (e) => (t) => t.test(e),
	U0 = { test: (e) => e === 'auto', parse: (e) => e },
	Bp = [dr, j, mt, jt, Gy, Hy, U0],
	Kc = (e) => Bp.find(zp(e)),
	Pn = new Set()
let Wl = !1,
	Hl = !1
function Up() {
	if (Hl) {
		const e = Array.from(Pn).filter((r) => r.needsMeasurement),
			t = new Set(e.map((r) => r.element)),
			n = new Map()
		t.forEach((r) => {
			const i = B0(r)
			i.length && (n.set(r, i), r.render())
		}),
			e.forEach((r) => r.measureInitialState()),
			t.forEach((r) => {
				r.render()
				const i = n.get(r)
				i &&
					i.forEach(([s, o]) => {
						var l
						;(l = r.getValue(s)) === null ||
							l === void 0 ||
							l.set(o)
					})
			}),
			e.forEach((r) => r.measureEndState()),
			e.forEach((r) => {
				r.suspendedScrollY !== void 0 &&
					window.scrollTo(0, r.suspendedScrollY)
			})
	}
	;(Hl = !1), (Wl = !1), Pn.forEach((e) => e.complete()), Pn.clear()
}
function $p() {
	Pn.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Hl = !0)
	})
}
function $0() {
	$p(), Up()
}
class cu {
	constructor(t, n, r, i, s, o = !1) {
		;(this.isComplete = !1),
			(this.isAsync = !1),
			(this.needsMeasurement = !1),
			(this.isScheduled = !1),
			(this.unresolvedKeyframes = [...t]),
			(this.onComplete = n),
			(this.name = r),
			(this.motionValue = i),
			(this.element = s),
			(this.isAsync = o)
	}
	scheduleResolve() {
		;(this.isScheduled = !0),
			this.isAsync
				? (Pn.add(this),
				  Wl || ((Wl = !0), G.read($p), G.resolveKeyframes(Up)))
				: (this.readKeyframes(), this.complete())
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: n,
			element: r,
			motionValue: i,
		} = this
		for (let s = 0; s < t.length; s++)
			if (t[s] === null)
				if (s === 0) {
					const o = i == null ? void 0 : i.get(),
						l = t[t.length - 1]
					if (o !== void 0) t[0] = o
					else if (r && n) {
						const a = r.readValue(n, l)
						a != null && (t[0] = a)
					}
					t[0] === void 0 && (t[0] = l),
						i && o === void 0 && i.set(t[0])
				} else t[s] = t[s - 1]
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete() {
		;(this.isComplete = !0),
			this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
			Pn.delete(this)
	}
	cancel() {
		this.isComplete || ((this.isScheduled = !1), Pn.delete(this))
	}
	resume() {
		this.isComplete || this.scheduleResolve()
	}
}
const fu = (e, t) => (n) =>
		!!(
			(gi(n) && $y.test(n) && n.startsWith(e)) ||
			(t && !Wy(n) && Object.prototype.hasOwnProperty.call(n, t))
		),
	Wp = (e, t, n) => (r) => {
		if (!gi(r)) return r
		const [i, s, o, l] = r.match(nu)
		return {
			[e]: parseFloat(i),
			[t]: parseFloat(s),
			[n]: parseFloat(o),
			alpha: l !== void 0 ? parseFloat(l) : 1,
		}
	},
	W0 = (e) => tn(0, 255, e),
	Fo = { ...dr, transform: (e) => Math.round(W0(e)) },
	wn = {
		test: fu('rgb', 'red'),
		parse: Wp('red', 'green', 'blue'),
		transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
			'rgba(' +
			Fo.transform(e) +
			', ' +
			Fo.transform(t) +
			', ' +
			Fo.transform(n) +
			', ' +
			Br(zr.transform(r)) +
			')',
	}
function H0(e) {
	let t = '',
		n = '',
		r = '',
		i = ''
	return (
		e.length > 5
			? ((t = e.substring(1, 3)),
			  (n = e.substring(3, 5)),
			  (r = e.substring(5, 7)),
			  (i = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (n = e.substring(2, 3)),
			  (r = e.substring(3, 4)),
			  (i = e.substring(4, 5)),
			  (t += t),
			  (n += n),
			  (r += r),
			  (i += i)),
		{
			red: parseInt(t, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: i ? parseInt(i, 16) / 255 : 1,
		}
	)
}
const Gl = { test: fu('#'), parse: H0, transform: wn.transform },
	Hn = {
		test: fu('hsl', 'hue'),
		parse: Wp('hue', 'saturation', 'lightness'),
		transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
			'hsla(' +
			Math.round(e) +
			', ' +
			mt.transform(Br(t)) +
			', ' +
			mt.transform(Br(n)) +
			', ' +
			Br(zr.transform(r)) +
			')',
	},
	Pe = {
		test: (e) => wn.test(e) || Gl.test(e) || Hn.test(e),
		parse: (e) =>
			wn.test(e) ? wn.parse(e) : Hn.test(e) ? Hn.parse(e) : Gl.parse(e),
		transform: (e) =>
			gi(e)
				? e
				: e.hasOwnProperty('red')
				? wn.transform(e)
				: Hn.transform(e),
	}
function G0(e) {
	var t, n
	return (
		isNaN(e) &&
		gi(e) &&
		(((t = e.match(nu)) === null || t === void 0 ? void 0 : t.length) ||
			0) +
			(((n = e.match(Uy)) === null || n === void 0 ? void 0 : n.length) ||
				0) >
			0
	)
}
const Hp = 'number',
	Gp = 'color',
	b0 = 'var',
	K0 = 'var(',
	Qc = '${}',
	Q0 =
		/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function ai(e) {
	const t = e.toString(),
		n = [],
		r = { color: [], number: [], var: [] },
		i = []
	let s = 0
	const l = t
		.replace(
			Q0,
			(a) => (
				Pe.test(a)
					? (r.color.push(s), i.push(Gp), n.push(Pe.parse(a)))
					: a.startsWith(K0)
					? (r.var.push(s), i.push(b0), n.push(a))
					: (r.number.push(s), i.push(Hp), n.push(parseFloat(a))),
				++s,
				Qc
			)
		)
		.split(Qc)
	return { values: n, split: l, indexes: r, types: i }
}
function bp(e) {
	return ai(e).values
}
function Kp(e) {
	const { split: t, types: n } = ai(e),
		r = t.length
	return (i) => {
		let s = ''
		for (let o = 0; o < r; o++)
			if (((s += t[o]), i[o] !== void 0)) {
				const l = n[o]
				l === Hp
					? (s += Br(i[o]))
					: l === Gp
					? (s += Pe.transform(i[o]))
					: (s += i[o])
			}
		return s
	}
}
const Y0 = (e) => (typeof e == 'number' ? 0 : e)
function X0(e) {
	const t = bp(e)
	return Kp(e)(t.map(Y0))
}
const nn = {
		test: G0,
		parse: bp,
		createTransformer: Kp,
		getAnimatableNone: X0,
	},
	Z0 = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function q0(e) {
	const [t, n] = e.slice(0, -1).split('(')
	if (t === 'drop-shadow') return e
	const [r] = n.match(nu) || []
	if (!r) return e
	const i = n.replace(r, '')
	let s = Z0.has(t) ? 1 : 0
	return r !== n && (s *= 100), t + '(' + s + i + ')'
}
const J0 = /\b([a-z-]*)\(.*?\)/gu,
	bl = {
		...nn,
		getAnimatableNone: (e) => {
			const t = e.match(J0)
			return t ? t.map(q0).join(' ') : e
		},
	},
	e1 = {
		...wp,
		color: Pe,
		backgroundColor: Pe,
		outlineColor: Pe,
		fill: Pe,
		stroke: Pe,
		borderColor: Pe,
		borderTopColor: Pe,
		borderRightColor: Pe,
		borderBottomColor: Pe,
		borderLeftColor: Pe,
		filter: bl,
		WebkitFilter: bl,
	},
	du = (e) => e1[e]
function Qp(e, t) {
	let n = du(e)
	return (
		n !== bl && (n = nn),
		n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
	)
}
const t1 = new Set(['auto', 'none', '0'])
function n1(e, t, n) {
	let r = 0,
		i
	for (; r < e.length && !i; ) {
		const s = e[r]
		typeof s == 'string' && !t1.has(s) && ai(s).values.length && (i = e[r]),
			r++
	}
	if (i && n) for (const s of t) e[s] = Qp(n, i)
}
class Yp extends cu {
	constructor(t, n, r, i) {
		super(t, n, r, i, i == null ? void 0 : i.owner, !0)
	}
	readKeyframes() {
		const { unresolvedKeyframes: t, element: n, name: r } = this
		if (!n.current) return
		super.readKeyframes()
		for (let a = 0; a < t.length; a++) {
			let u = t[a]
			if (typeof u == 'string' && ((u = u.trim()), tu(u))) {
				const c = Ip(u, n.current)
				c !== void 0 && (t[a] = c),
					a === t.length - 1 && (this.finalKeyframe = u)
			}
		}
		if ((this.resolveNoneKeyframes(), !F0.has(r) || t.length !== 2)) return
		const [i, s] = t,
			o = Kc(i),
			l = Kc(s)
		if (o !== l)
			if (Hc(o) && Hc(l))
				for (let a = 0; a < t.length; a++) {
					const u = t[a]
					typeof u == 'string' && (t[a] = parseFloat(u))
				}
			else this.needsMeasurement = !0
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes: t, name: n } = this,
			r = []
		for (let i = 0; i < t.length; i++) N0(t[i]) && r.push(i)
		r.length && n1(t, r, n)
	}
	measureInitialState() {
		const { element: t, unresolvedKeyframes: n, name: r } = this
		if (!t.current) return
		r === 'height' && (this.suspendedScrollY = window.pageYOffset),
			(this.measuredOrigin = ar[r](
				t.measureViewportBox(),
				window.getComputedStyle(t.current)
			)),
			(n[0] = this.measuredOrigin)
		const i = n[n.length - 1]
		i !== void 0 && t.getValue(r, i).jump(i, !1)
	}
	measureEndState() {
		var t
		const { element: n, name: r, unresolvedKeyframes: i } = this
		if (!n.current) return
		const s = n.getValue(r)
		s && s.jump(this.measuredOrigin, !1)
		const o = i.length - 1,
			l = i[o]
		;(i[o] = ar[r](
			n.measureViewportBox(),
			window.getComputedStyle(n.current)
		)),
			l !== null &&
				this.finalKeyframe === void 0 &&
				(this.finalKeyframe = l),
			!((t = this.removedTransforms) === null || t === void 0) &&
				t.length &&
				this.removedTransforms.forEach(([a, u]) => {
					n.getValue(a).set(u)
				}),
			this.resolveNoneKeyframes()
	}
}
function Xp(e) {
	let t
	return () => (t === void 0 && (t = e()), t)
}
const Yc = (e, t) =>
	t === 'zIndex'
		? !1
		: !!(
				typeof e == 'number' ||
				Array.isArray(e) ||
				(typeof e == 'string' &&
					(nn.test(e) || e === '0') &&
					!e.startsWith('url('))
		  )
function r1(e) {
	const t = e[0]
	if (e.length === 1) return !0
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0
}
function i1(e, t, n, r) {
	const i = e[0]
	if (i === null) return !1
	if (t === 'display' || t === 'visibility') return !0
	const s = e[e.length - 1],
		o = Yc(i, t),
		l = Yc(s, t)
	return !o || !l ? !1 : r1(e) || (n === 'spring' && r)
}
class Zp {
	constructor({
		autoplay: t = !0,
		delay: n = 0,
		type: r = 'keyframes',
		repeat: i = 0,
		repeatDelay: s = 0,
		repeatType: o = 'loop',
		...l
	}) {
		;(this.isStopped = !1),
			(this.hasAttemptedResolve = !1),
			(this.options = {
				autoplay: t,
				delay: n,
				type: r,
				repeat: i,
				repeatDelay: s,
				repeatType: o,
				...l,
			}),
			this.updateFinishedPromise()
	}
	get resolved() {
		return (
			!this._resolved && !this.hasAttemptedResolve && $0(), this._resolved
		)
	}
	onKeyframesResolved(t, n) {
		this.hasAttemptedResolve = !0
		const {
			name: r,
			type: i,
			velocity: s,
			delay: o,
			onComplete: l,
			onUpdate: a,
			isGenerator: u,
		} = this.options
		if (!u && !i1(t, r, i, s))
			if (o) this.options.duration = 0
			else {
				a == null || a(eo(t, this.options, n)),
					l == null || l(),
					this.resolveFinishedPromise()
				return
			}
		const c = this.initPlayback(t, n)
		c !== !1 &&
			((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
			this.onPostResolved())
	}
	onPostResolved() {}
	then(t, n) {
		return this.currentFinishedPromise.then(t, n)
	}
	updateFinishedPromise() {
		this.currentFinishedPromise = new Promise((t) => {
			this.resolveFinishedPromise = t
		})
	}
}
function qp(e, t) {
	return t ? e * (1e3 / t) : 0
}
const s1 = 5
function Jp(e, t, n) {
	const r = Math.max(t - s1, 0)
	return qp(n - e(r), t - r)
}
const Io = 0.001,
	o1 = 0.01,
	l1 = 10,
	a1 = 0.05,
	u1 = 1
function c1({
	duration: e = 800,
	bounce: t = 0.25,
	velocity: n = 0,
	mass: r = 1,
}) {
	let i,
		s,
		o = 1 - t
	;(o = tn(a1, u1, o)),
		(e = tn(o1, l1, Mt(e))),
		o < 1
			? ((i = (u) => {
					const c = u * o,
						f = c * e,
						d = c - n,
						v = Kl(u, o),
						g = Math.exp(-f)
					return Io - (d / v) * g
			  }),
			  (s = (u) => {
					const f = u * o * e,
						d = f * n + n,
						v = Math.pow(o, 2) * Math.pow(u, 2) * e,
						g = Math.exp(-f),
						y = Kl(Math.pow(u, 2), o)
					return ((-i(u) + Io > 0 ? -1 : 1) * ((d - v) * g)) / y
			  }))
			: ((i = (u) => {
					const c = Math.exp(-u * e),
						f = (u - n) * e + 1
					return -Io + c * f
			  }),
			  (s = (u) => {
					const c = Math.exp(-u * e),
						f = (n - u) * (e * e)
					return c * f
			  }))
	const l = 5 / e,
		a = d1(i, s, l)
	if (((e = Zt(e)), isNaN(a)))
		return { stiffness: 100, damping: 10, duration: e }
	{
		const u = Math.pow(a, 2) * r
		return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e }
	}
}
const f1 = 12
function d1(e, t, n) {
	let r = n
	for (let i = 1; i < f1; i++) r = r - e(r) / t(r)
	return r
}
function Kl(e, t) {
	return e * Math.sqrt(1 - t * t)
}
const h1 = ['duration', 'bounce'],
	p1 = ['stiffness', 'damping', 'mass']
function Xc(e, t) {
	return t.some((n) => e[n] !== void 0)
}
function m1(e) {
	let t = {
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1,
		...e,
	}
	if (!Xc(e, p1) && Xc(e, h1)) {
		const n = c1(e)
		;(t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0)
	}
	return t
}
function em({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
	const i = e[0],
		s = e[e.length - 1],
		o = { done: !1, value: i },
		{
			stiffness: l,
			damping: a,
			mass: u,
			duration: c,
			velocity: f,
			isResolvedFromDuration: d,
		} = m1({ ...r, velocity: -Mt(r.velocity || 0) }),
		v = f || 0,
		g = a / (2 * Math.sqrt(l * u)),
		y = s - i,
		k = Mt(Math.sqrt(l / u)),
		p = Math.abs(y) < 5
	n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5)
	let h
	if (g < 1) {
		const m = Kl(k, g)
		h = (w) => {
			const x = Math.exp(-g * k * w)
			return (
				s -
				x *
					(((v + g * k * y) / m) * Math.sin(m * w) +
						y * Math.cos(m * w))
			)
		}
	} else if (g === 1) h = (m) => s - Math.exp(-k * m) * (y + (v + k * y) * m)
	else {
		const m = k * Math.sqrt(g * g - 1)
		h = (w) => {
			const x = Math.exp(-g * k * w),
				A = Math.min(m * w, 300)
			return (
				s -
				(x * ((v + g * k * y) * Math.sinh(A) + m * y * Math.cosh(A))) /
					m
			)
		}
	}
	return {
		calculatedDuration: (d && c) || null,
		next: (m) => {
			const w = h(m)
			if (d) o.done = m >= c
			else {
				let x = v
				m !== 0 && (g < 1 ? (x = Jp(h, m, w)) : (x = 0))
				const A = Math.abs(x) <= n,
					D = Math.abs(s - w) <= t
				o.done = A && D
			}
			return (o.value = o.done ? s : w), o
		},
	}
}
function Zc({
	keyframes: e,
	velocity: t = 0,
	power: n = 0.8,
	timeConstant: r = 325,
	bounceDamping: i = 10,
	bounceStiffness: s = 500,
	modifyTarget: o,
	min: l,
	max: a,
	restDelta: u = 0.5,
	restSpeed: c,
}) {
	const f = e[0],
		d = { done: !1, value: f },
		v = (E) => (l !== void 0 && E < l) || (a !== void 0 && E > a),
		g = (E) =>
			l === void 0
				? a
				: a === void 0 || Math.abs(l - E) < Math.abs(a - E)
				? l
				: a
	let y = n * t
	const k = f + y,
		p = o === void 0 ? k : o(k)
	p !== k && (y = p - f)
	const h = (E) => -y * Math.exp(-E / r),
		m = (E) => p + h(E),
		w = (E) => {
			const B = h(E),
				_ = m(E)
			;(d.done = Math.abs(B) <= u), (d.value = d.done ? p : _)
		}
	let x, A
	const D = (E) => {
		v(d.value) &&
			((x = E),
			(A = em({
				keyframes: [d.value, g(d.value)],
				velocity: Jp(m, E, d.value),
				damping: i,
				stiffness: s,
				restDelta: u,
				restSpeed: c,
			})))
	}
	return (
		D(0),
		{
			calculatedDuration: null,
			next: (E) => {
				let B = !1
				return (
					!A && x === void 0 && ((B = !0), w(E), D(E)),
					x !== void 0 && E >= x ? A.next(E - x) : (!B && w(E), d)
				)
			},
		}
	)
}
const tm = (e, t, n) =>
		(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	v1 = 1e-7,
	g1 = 12
function y1(e, t, n, r, i) {
	let s,
		o,
		l = 0
	do (o = t + (n - t) / 2), (s = tm(o, r, i) - e), s > 0 ? (n = o) : (t = o)
	while (Math.abs(s) > v1 && ++l < g1)
	return o
}
function wi(e, t, n, r) {
	if (e === t && n === r) return Te
	const i = (s) => y1(s, 0, 1, e, n)
	return (s) => (s === 0 || s === 1 ? s : tm(i(s), t, r))
}
const w1 = wi(0.42, 0, 1, 1),
	S1 = wi(0, 0, 0.58, 1),
	nm = wi(0.42, 0, 0.58, 1),
	x1 = (e) => Array.isArray(e) && typeof e[0] != 'number',
	rm = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	im = (e) => (t) => 1 - e(1 - t),
	hu = (e) => 1 - Math.sin(Math.acos(e)),
	sm = im(hu),
	P1 = rm(hu),
	om = wi(0.33, 1.53, 0.69, 0.99),
	pu = im(om),
	k1 = rm(pu),
	C1 = (e) =>
		(e *= 2) < 1 ? 0.5 * pu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
	qc = {
		linear: Te,
		easeIn: w1,
		easeInOut: nm,
		easeOut: S1,
		circIn: hu,
		circInOut: P1,
		circOut: sm,
		backIn: pu,
		backInOut: k1,
		backOut: om,
		anticipate: C1,
	},
	Jc = (e) => {
		if (Array.isArray(e)) {
			Bl(e.length === 4)
			const [t, n, r, i] = e
			return wi(t, n, r, i)
		} else if (typeof e == 'string') return Bl(qc[e] !== void 0), qc[e]
		return e
	},
	ui = (e, t, n) => {
		const r = t - e
		return r === 0 ? 1 : (n - e) / r
	},
	te = (e, t, n) => e + (t - e) * n
function zo(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6
			? e + (t - e) * 6 * n
			: n < 1 / 2
			? t
			: n < 2 / 3
			? e + (t - e) * (2 / 3 - n) * 6
			: e
	)
}
function T1({ hue: e, saturation: t, lightness: n, alpha: r }) {
	;(e /= 360), (t /= 100), (n /= 100)
	let i = 0,
		s = 0,
		o = 0
	if (!t) i = s = o = n
	else {
		const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
			a = 2 * n - l
		;(i = zo(a, l, e + 1 / 3)), (s = zo(a, l, e)), (o = zo(a, l, e - 1 / 3))
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(s * 255),
		blue: Math.round(o * 255),
		alpha: r,
	}
}
function Ms(e, t) {
	return (n) => (n > 0 ? t : e)
}
const Bo = (e, t, n) => {
		const r = e * e,
			i = n * (t * t - r) + r
		return i < 0 ? 0 : Math.sqrt(i)
	},
	E1 = [Gl, wn, Hn],
	M1 = (e) => E1.find((t) => t.test(e))
function ef(e) {
	const t = M1(e)
	if (!t) return !1
	let n = t.parse(e)
	return t === Hn && (n = T1(n)), n
}
const tf = (e, t) => {
		const n = ef(e),
			r = ef(t)
		if (!n || !r) return Ms(e, t)
		const i = { ...n }
		return (s) => (
			(i.red = Bo(n.red, r.red, s)),
			(i.green = Bo(n.green, r.green, s)),
			(i.blue = Bo(n.blue, r.blue, s)),
			(i.alpha = te(n.alpha, r.alpha, s)),
			wn.transform(i)
		)
	},
	Ql = new Set(['none', 'hidden'])
function A1(e, t) {
	return Ql.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e)
}
function D1(e, t) {
	return (n) => te(e, t, n)
}
function mu(e) {
	return typeof e == 'number'
		? D1
		: typeof e == 'string'
		? tu(e)
			? Ms
			: Pe.test(e)
			? tf
			: V1
		: Array.isArray(e)
		? lm
		: typeof e == 'object'
		? Pe.test(e)
			? tf
			: R1
		: Ms
}
function lm(e, t) {
	const n = [...e],
		r = n.length,
		i = e.map((s, o) => mu(s)(s, t[o]))
	return (s) => {
		for (let o = 0; o < r; o++) n[o] = i[o](s)
		return n
	}
}
function R1(e, t) {
	const n = { ...e, ...t },
		r = {}
	for (const i in n)
		e[i] !== void 0 && t[i] !== void 0 && (r[i] = mu(e[i])(e[i], t[i]))
	return (i) => {
		for (const s in r) n[s] = r[s](i)
		return n
	}
}
function L1(e, t) {
	var n
	const r = [],
		i = { color: 0, var: 0, number: 0 }
	for (let s = 0; s < t.values.length; s++) {
		const o = t.types[s],
			l = e.indexes[o][i[o]],
			a = (n = e.values[l]) !== null && n !== void 0 ? n : 0
		;(r[s] = a), i[o]++
	}
	return r
}
const V1 = (e, t) => {
	const n = nn.createTransformer(t),
		r = ai(e),
		i = ai(t)
	return r.indexes.var.length === i.indexes.var.length &&
		r.indexes.color.length === i.indexes.color.length &&
		r.indexes.number.length >= i.indexes.number.length
		? (Ql.has(e) && !i.values.length) || (Ql.has(t) && !r.values.length)
			? A1(e, t)
			: Et(lm(L1(r, i), i.values), n)
		: Ms(e, t)
}
function am(e, t, n) {
	return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
		? te(e, t, n)
		: mu(e)(e, t)
}
function O1(e, t, n) {
	const r = [],
		i = n || am,
		s = e.length - 1
	for (let o = 0; o < s; o++) {
		let l = i(e[o], e[o + 1])
		if (t) {
			const a = Array.isArray(t) ? t[o] || Te : t
			l = Et(a, l)
		}
		r.push(l)
	}
	return r
}
function N1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	const s = e.length
	if ((Bl(s === t.length), s === 1)) return () => t[0]
	if (s === 2 && e[0] === e[1]) return () => t[1]
	e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
	const o = O1(t, r, i),
		l = o.length,
		a = (u) => {
			let c = 0
			if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
			const f = ui(e[c], e[c + 1], u)
			return o[c](f)
		}
	return n ? (u) => a(tn(e[0], e[s - 1], u)) : a
}
function _1(e, t) {
	const n = e[e.length - 1]
	for (let r = 1; r <= t; r++) {
		const i = ui(0, t, r)
		e.push(te(n, 1, i))
	}
}
function j1(e) {
	const t = [0]
	return _1(t, e.length - 1), t
}
function F1(e, t) {
	return e.map((n) => n * t)
}
function I1(e, t) {
	return e.map(() => t || nm).splice(0, e.length - 1)
}
function As({
	duration: e = 300,
	keyframes: t,
	times: n,
	ease: r = 'easeInOut',
}) {
	const i = x1(r) ? r.map(Jc) : Jc(r),
		s = { done: !1, value: t[0] },
		o = F1(n && n.length === t.length ? n : j1(t), e),
		l = N1(o, t, { ease: Array.isArray(i) ? i : I1(t, i) })
	return {
		calculatedDuration: e,
		next: (a) => ((s.value = l(a)), (s.done = a >= e), s),
	}
}
const nf = 2e4
function z1(e) {
	let t = 0
	const n = 50
	let r = e.next(t)
	for (; !r.done && t < nf; ) (t += n), (r = e.next(t))
	return t >= nf ? 1 / 0 : t
}
const B1 = (e) => {
		const t = ({ timestamp: n }) => e(n)
		return {
			start: () => G.update(t, !0),
			stop: () => Vt(t),
			now: () => (ge.isProcessing ? ge.timestamp : qt.now()),
		}
	},
	U1 = { decay: Zc, inertia: Zc, tween: As, keyframes: As, spring: em },
	$1 = (e) => e / 100
class vu extends Zp {
	constructor({ KeyframeResolver: t = cu, ...n }) {
		super(n),
			(this.holdTime = null),
			(this.startTime = null),
			(this.cancelTime = null),
			(this.currentTime = 0),
			(this.playbackSpeed = 1),
			(this.pendingPlayState = 'running'),
			(this.state = 'idle'),
			(this.stop = () => {
				if (
					(this.resolver.cancel(),
					(this.isStopped = !0),
					this.state === 'idle')
				)
					return
				this.teardown()
				const { onStop: l } = this.options
				l && l()
			})
		const { name: r, motionValue: i, keyframes: s } = this.options,
			o = (l, a) => this.onKeyframesResolved(l, a)
		r && i && i.owner
			? (this.resolver = i.owner.resolveKeyframes(s, o, r, i))
			: (this.resolver = new t(s, o, r, i)),
			this.resolver.scheduleResolve()
	}
	initPlayback(t) {
		const {
				type: n = 'keyframes',
				repeat: r = 0,
				repeatDelay: i = 0,
				repeatType: s,
				velocity: o = 0,
			} = this.options,
			l = U1[n] || As
		let a, u
		l !== As &&
			typeof t[0] != 'number' &&
			((a = Et($1, am(t[0], t[1]))), (t = [0, 100]))
		const c = l({ ...this.options, keyframes: t })
		s === 'mirror' &&
			(u = l({
				...this.options,
				keyframes: [...t].reverse(),
				velocity: -o,
			})),
			c.calculatedDuration === null && (c.calculatedDuration = z1(c))
		const { calculatedDuration: f } = c,
			d = f + i,
			v = d * (r + 1) - i
		return {
			generator: c,
			mirroredGenerator: u,
			mapPercentToKeyframes: a,
			calculatedDuration: f,
			resolvedDuration: d,
			totalDuration: v,
		}
	}
	onPostResolved() {
		const { autoplay: t = !0 } = this.options
		this.play(),
			this.pendingPlayState === 'paused' || !t
				? this.pause()
				: (this.state = this.pendingPlayState)
	}
	tick(t, n = !1) {
		const { resolved: r } = this
		if (!r) {
			const { keyframes: E } = this.options
			return { done: !0, value: E[E.length - 1] }
		}
		const {
			finalKeyframe: i,
			generator: s,
			mirroredGenerator: o,
			mapPercentToKeyframes: l,
			keyframes: a,
			calculatedDuration: u,
			totalDuration: c,
			resolvedDuration: f,
		} = r
		if (this.startTime === null) return s.next(0)
		const {
			delay: d,
			repeat: v,
			repeatType: g,
			repeatDelay: y,
			onUpdate: k,
		} = this.options
		this.speed > 0
			? (this.startTime = Math.min(this.startTime, t))
			: this.speed < 0 &&
			  (this.startTime = Math.min(t - c / this.speed, this.startTime)),
			n
				? (this.currentTime = t)
				: this.holdTime !== null
				? (this.currentTime = this.holdTime)
				: (this.currentTime =
						Math.round(t - this.startTime) * this.speed)
		const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
			h = this.speed >= 0 ? p < 0 : p > c
		;(this.currentTime = Math.max(p, 0)),
			this.state === 'finished' &&
				this.holdTime === null &&
				(this.currentTime = c)
		let m = this.currentTime,
			w = s
		if (v) {
			const E = Math.min(this.currentTime, c) / f
			let B = Math.floor(E),
				_ = E % 1
			!_ && E >= 1 && (_ = 1),
				_ === 1 && B--,
				(B = Math.min(B, v + 1)),
				!!(B % 2) &&
					(g === 'reverse'
						? ((_ = 1 - _), y && (_ -= y / f))
						: g === 'mirror' && (w = o)),
				(m = tn(0, 1, _) * f)
		}
		const x = h ? { done: !1, value: a[0] } : w.next(m)
		l && (x.value = l(x.value))
		let { done: A } = x
		!h &&
			u !== null &&
			(A =
				this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0)
		const D =
			this.holdTime === null &&
			(this.state === 'finished' || (this.state === 'running' && A))
		return (
			D && i !== void 0 && (x.value = eo(a, this.options, i)),
			k && k(x.value),
			D && this.finish(),
			x
		)
	}
	get duration() {
		const { resolved: t } = this
		return t ? Mt(t.calculatedDuration) : 0
	}
	get time() {
		return Mt(this.currentTime)
	}
	set time(t) {
		;(t = Zt(t)),
			(this.currentTime = t),
			this.holdTime !== null || this.speed === 0
				? (this.holdTime = t)
				: this.driver &&
				  (this.startTime = this.driver.now() - t / this.speed)
	}
	get speed() {
		return this.playbackSpeed
	}
	set speed(t) {
		const n = this.playbackSpeed !== t
		;(this.playbackSpeed = t), n && (this.time = Mt(this.currentTime))
	}
	play() {
		if (
			(this.resolver.isScheduled || this.resolver.resume(),
			!this._resolved)
		) {
			this.pendingPlayState = 'running'
			return
		}
		if (this.isStopped) return
		const { driver: t = B1, onPlay: n } = this.options
		this.driver || (this.driver = t((i) => this.tick(i))), n && n()
		const r = this.driver.now()
		this.holdTime !== null
			? (this.startTime = r - this.holdTime)
			: (!this.startTime || this.state === 'finished') &&
			  (this.startTime = r),
			this.state === 'finished' && this.updateFinishedPromise(),
			(this.cancelTime = this.startTime),
			(this.holdTime = null),
			(this.state = 'running'),
			this.driver.start()
	}
	pause() {
		var t
		if (!this._resolved) {
			this.pendingPlayState = 'paused'
			return
		}
		;(this.state = 'paused'),
			(this.holdTime =
				(t = this.currentTime) !== null && t !== void 0 ? t : 0)
	}
	complete() {
		this.state !== 'running' && this.play(),
			(this.pendingPlayState = this.state = 'finished'),
			(this.holdTime = null)
	}
	finish() {
		this.teardown(), (this.state = 'finished')
		const { onComplete: t } = this.options
		t && t()
	}
	cancel() {
		this.cancelTime !== null && this.tick(this.cancelTime),
			this.teardown(),
			this.updateFinishedPromise()
	}
	teardown() {
		;(this.state = 'idle'),
			this.stopDriver(),
			this.resolveFinishedPromise(),
			this.updateFinishedPromise(),
			(this.startTime = this.cancelTime = null),
			this.resolver.cancel()
	}
	stopDriver() {
		this.driver && (this.driver.stop(), (this.driver = void 0))
	}
	sample(t) {
		return (this.startTime = 0), this.tick(t, !0)
	}
}
const um = (e) => Array.isArray(e) && typeof e[0] == 'number'
function cm(e) {
	return !!(
		!e ||
		(typeof e == 'string' && e in gu) ||
		um(e) ||
		(Array.isArray(e) && e.every(cm))
	)
}
const Ar = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
	gu = {
		linear: 'linear',
		ease: 'ease',
		easeIn: 'ease-in',
		easeOut: 'ease-out',
		easeInOut: 'ease-in-out',
		circIn: Ar([0, 0.65, 0.55, 1]),
		circOut: Ar([0.55, 0, 1, 0.45]),
		backIn: Ar([0.31, 0.01, 0.66, -0.59]),
		backOut: Ar([0.33, 1.53, 0.69, 0.99]),
	}
function W1(e) {
	return fm(e) || gu.easeOut
}
function fm(e) {
	if (e) return um(e) ? Ar(e) : Array.isArray(e) ? e.map(W1) : gu[e]
}
function H1(
	e,
	t,
	n,
	{
		delay: r = 0,
		duration: i = 300,
		repeat: s = 0,
		repeatType: o = 'loop',
		ease: l,
		times: a,
	} = {}
) {
	const u = { [t]: n }
	a && (u.offset = a)
	const c = fm(l)
	return (
		Array.isArray(c) && (u.easing = c),
		e.animate(u, {
			delay: r,
			duration: i,
			easing: Array.isArray(c) ? 'linear' : c,
			fill: 'both',
			iterations: s + 1,
			direction: o === 'reverse' ? 'alternate' : 'normal',
		})
	)
}
const G1 = Xp(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
	Ds = 10,
	b1 = 2e4
function K1(e) {
	return e.type === 'spring' || !cm(e.ease)
}
function Q1(e, t) {
	const n = new vu({
		...t,
		keyframes: e,
		repeat: 0,
		delay: 0,
		isGenerator: !0,
	})
	let r = { done: !1, value: e[0] }
	const i = []
	let s = 0
	for (; !r.done && s < b1; ) (r = n.sample(s)), i.push(r.value), (s += Ds)
	return { times: void 0, keyframes: i, duration: s - Ds, ease: 'linear' }
}
class rf extends Zp {
	constructor(t) {
		super(t)
		const { name: n, motionValue: r, keyframes: i } = this.options
		;(this.resolver = new Yp(
			i,
			(s, o) => this.onKeyframesResolved(s, o),
			n,
			r
		)),
			this.resolver.scheduleResolve()
	}
	initPlayback(t, n) {
		var r
		let {
			duration: i = 300,
			times: s,
			ease: o,
			type: l,
			motionValue: a,
			name: u,
		} = this.options
		if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1
		if (K1(this.options)) {
			const {
					onComplete: f,
					onUpdate: d,
					motionValue: v,
					...g
				} = this.options,
				y = Q1(t, g)
			;(t = y.keyframes),
				t.length === 1 && (t[1] = t[0]),
				(i = y.duration),
				(s = y.times),
				(o = y.ease),
				(l = 'keyframes')
		}
		const c = H1(a.owner.current, u, t, {
			...this.options,
			duration: i,
			times: s,
			ease: o,
		})
		return (
			(c.startTime = qt.now()),
			this.pendingTimeline
				? ((c.timeline = this.pendingTimeline),
				  (this.pendingTimeline = void 0))
				: (c.onfinish = () => {
						const { onComplete: f } = this.options
						a.set(eo(t, this.options, n)),
							f && f(),
							this.cancel(),
							this.resolveFinishedPromise()
				  }),
			{
				animation: c,
				duration: i,
				times: s,
				type: l,
				ease: o,
				keyframes: t,
			}
		)
	}
	get duration() {
		const { resolved: t } = this
		if (!t) return 0
		const { duration: n } = t
		return Mt(n)
	}
	get time() {
		const { resolved: t } = this
		if (!t) return 0
		const { animation: n } = t
		return Mt(n.currentTime || 0)
	}
	set time(t) {
		const { resolved: n } = this
		if (!n) return
		const { animation: r } = n
		r.currentTime = Zt(t)
	}
	get speed() {
		const { resolved: t } = this
		if (!t) return 1
		const { animation: n } = t
		return n.playbackRate
	}
	set speed(t) {
		const { resolved: n } = this
		if (!n) return
		const { animation: r } = n
		r.playbackRate = t
	}
	get state() {
		const { resolved: t } = this
		if (!t) return 'idle'
		const { animation: n } = t
		return n.playState
	}
	attachTimeline(t) {
		if (!this._resolved) this.pendingTimeline = t
		else {
			const { resolved: n } = this
			if (!n) return Te
			const { animation: r } = n
			;(r.timeline = t), (r.onfinish = null)
		}
		return Te
	}
	play() {
		if (this.isStopped) return
		const { resolved: t } = this
		if (!t) return
		const { animation: n } = t
		n.playState === 'finished' && this.updateFinishedPromise(), n.play()
	}
	pause() {
		const { resolved: t } = this
		if (!t) return
		const { animation: n } = t
		n.pause()
	}
	stop() {
		if (
			(this.resolver.cancel(),
			(this.isStopped = !0),
			this.state === 'idle')
		)
			return
		const { resolved: t } = this
		if (!t) return
		const {
			animation: n,
			keyframes: r,
			duration: i,
			type: s,
			ease: o,
			times: l,
		} = t
		if (n.playState === 'idle' || n.playState === 'finished') return
		if (this.time) {
			const {
					motionValue: u,
					onUpdate: c,
					onComplete: f,
					...d
				} = this.options,
				v = new vu({
					...d,
					keyframes: r,
					duration: i,
					type: s,
					ease: o,
					times: l,
					isGenerator: !0,
				}),
				g = Zt(this.time)
			u.setWithVelocity(v.sample(g - Ds).value, v.sample(g).value, Ds)
		}
		const { onStop: a } = this.options
		a && a(), this.cancel()
	}
	complete() {
		const { resolved: t } = this
		t && t.animation.finish()
	}
	cancel() {
		const { resolved: t } = this
		t && t.animation.cancel()
	}
	static supports(t) {
		const {
			motionValue: n,
			name: r,
			repeatDelay: i,
			repeatType: s,
			damping: o,
			type: l,
		} = t
		return (
			G1() &&
			r &&
			Mp.has(r) &&
			n &&
			n.owner &&
			n.owner.current instanceof HTMLElement &&
			!n.owner.getProps().onUpdate &&
			!i &&
			s !== 'mirror' &&
			o !== 0 &&
			l !== 'inertia'
		)
	}
}
function Y1(e, t) {
	let n
	const r = () => {
		const { currentTime: i } = t,
			o = (i === null ? 0 : i.value) / 100
		n !== o && e(o), (n = o)
	}
	return G.update(r, !0), () => Vt(r)
}
const X1 = Xp(() => window.ScrollTimeline !== void 0)
class Z1 {
	constructor(t) {
		;(this.stop = () => this.runAll('stop')),
			(this.animations = t.filter(Boolean))
	}
	then(t, n) {
		return Promise.all(this.animations).then(t).catch(n)
	}
	getAll(t) {
		return this.animations[0][t]
	}
	setAll(t, n) {
		for (let r = 0; r < this.animations.length; r++)
			this.animations[r][t] = n
	}
	attachTimeline(t) {
		const n = this.animations.map((r) => {
			if (X1() && r.attachTimeline) r.attachTimeline(t)
			else
				return (
					r.pause(),
					Y1((i) => {
						r.time = r.duration * i
					}, t)
				)
		})
		return () => {
			n.forEach((r, i) => {
				r && r(), this.animations[i].stop()
			})
		}
	}
	get time() {
		return this.getAll('time')
	}
	set time(t) {
		this.setAll('time', t)
	}
	get speed() {
		return this.getAll('speed')
	}
	set speed(t) {
		this.setAll('speed', t)
	}
	get duration() {
		let t = 0
		for (let n = 0; n < this.animations.length; n++)
			t = Math.max(t, this.animations[n].duration)
		return t
	}
	runAll(t) {
		this.animations.forEach((n) => n[t]())
	}
	play() {
		this.runAll('play')
	}
	pause() {
		this.runAll('pause')
	}
	cancel() {
		this.runAll('cancel')
	}
	complete() {
		this.runAll('complete')
	}
}
const yu =
	(e, t, n, r = {}, i, s, o) =>
	(l) => {
		const a = uu(r, e) || {},
			u = a.delay || r.delay || 0
		let { elapsed: c = 0 } = r
		c = c - Zt(u)
		let f = {
			keyframes: Array.isArray(n) ? n : [null, n],
			ease: 'easeOut',
			velocity: t.getVelocity(),
			...a,
			delay: -c,
			onUpdate: (v) => {
				t.set(v), a.onUpdate && a.onUpdate(v)
			},
			onComplete: () => {
				l(), a.onComplete && a.onComplete(), o && o()
			},
			onStop: o,
			name: e,
			motionValue: t,
			element: s ? void 0 : i,
		}
		L0(a) || (f = { ...f, ...R0(e, f) }),
			f.duration && (f.duration = Zt(f.duration)),
			f.repeatDelay && (f.repeatDelay = Zt(f.repeatDelay)),
			f.from !== void 0 && (f.keyframes[0] = f.from)
		let d = !1
		if (
			((f.type === !1 || (f.duration === 0 && !f.repeatDelay)) &&
				((f.duration = 0), f.delay === 0 && (d = !0)),
			d && !s && t.get() !== void 0)
		) {
			const v = eo(f.keyframes, a)
			if (v !== void 0)
				return (
					G.update(() => {
						f.onUpdate(v), f.onComplete()
					}),
					new Z1([])
				)
		}
		return !s && rf.supports(f) ? new rf(f) : new vu(f)
	}
class wu {
	constructor() {
		this.subscriptions = []
	}
	add(t) {
		return Xs(this.subscriptions, t), () => Zs(this.subscriptions, t)
	}
	notify(t, n, r) {
		const i = this.subscriptions.length
		if (i)
			if (i === 1) this.subscriptions[0](t, n, r)
			else
				for (let s = 0; s < i; s++) {
					const o = this.subscriptions[s]
					o && o(t, n, r)
				}
	}
	getSize() {
		return this.subscriptions.length
	}
	clear() {
		this.subscriptions.length = 0
	}
}
const sf = 30,
	q1 = (e) => !isNaN(parseFloat(e))
class dm {
	constructor(t, n = {}) {
		;(this.version = '11.3.17'),
			(this.canTrackVelocity = null),
			(this.events = {}),
			(this.updateAndNotify = (r, i = !0) => {
				const s = qt.now()
				this.updatedAt !== s && this.setPrevFrameValue(),
					(this.prev = this.current),
					this.setCurrent(r),
					this.current !== this.prev &&
						this.events.change &&
						this.events.change.notify(this.current),
					i &&
						this.events.renderRequest &&
						this.events.renderRequest.notify(this.current)
			}),
			(this.hasAnimated = !1),
			this.setCurrent(t),
			(this.owner = n.owner)
	}
	setCurrent(t) {
		;(this.current = t),
			(this.updatedAt = qt.now()),
			this.canTrackVelocity === null &&
				t !== void 0 &&
				(this.canTrackVelocity = q1(this.current))
	}
	setPrevFrameValue(t = this.current) {
		;(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt)
	}
	onChange(t) {
		return this.on('change', t)
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new wu())
		const r = this.events[t].add(n)
		return t === 'change'
			? () => {
					r(),
						G.read(() => {
							this.events.change.getSize() || this.stop()
						})
			  }
			: r
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear()
	}
	attach(t, n) {
		;(this.passiveEffect = t), (this.stopPassiveEffect = n)
	}
	set(t, n = !0) {
		!n || !this.passiveEffect
			? this.updateAndNotify(t, n)
			: this.passiveEffect(t, this.updateAndNotify)
	}
	setWithVelocity(t, n, r) {
		this.set(n),
			(this.prev = void 0),
			(this.prevFrameValue = t),
			(this.prevUpdatedAt = this.updatedAt - r)
	}
	jump(t, n = !0) {
		this.updateAndNotify(t),
			(this.prev = t),
			(this.prevUpdatedAt = this.prevFrameValue = void 0),
			n && this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect()
	}
	get() {
		return this.current
	}
	getPrevious() {
		return this.prev
	}
	getVelocity() {
		const t = qt.now()
		if (
			!this.canTrackVelocity ||
			this.prevFrameValue === void 0 ||
			t - this.updatedAt > sf
		)
			return 0
		const n = Math.min(this.updatedAt - this.prevUpdatedAt, sf)
		return qp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
	}
	start(t) {
		return (
			this.stop(),
			new Promise((n) => {
				;(this.hasAnimated = !0),
					(this.animation = t(n)),
					this.events.animationStart &&
						this.events.animationStart.notify()
			}).then(() => {
				this.events.animationComplete &&
					this.events.animationComplete.notify(),
					this.clearAnimation()
			})
		)
	}
	stop() {
		this.animation &&
			(this.animation.stop(),
			this.events.animationCancel &&
				this.events.animationCancel.notify()),
			this.clearAnimation()
	}
	isAnimating() {
		return !!this.animation
	}
	clearAnimation() {
		delete this.animation
	}
	destroy() {
		this.clearListeners(),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect()
	}
}
function ci(e, t) {
	return new dm(e, t)
}
function J1(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ci(n))
}
function ew(e, t) {
	const n = Js(e, t)
	let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {}
	s = { ...s, ...r }
	for (const o in s) {
		const l = o0(s[o])
		J1(e, o, l)
	}
}
function hm(e) {
	return e.getProps()[cp]
}
class tw extends dm {
	constructor() {
		super(...arguments), (this.output = []), (this.counts = new Map())
	}
	add(t) {
		const n = Ap(t)
		if (!n) return
		const r = this.counts.get(n) || 0
		this.counts.set(n, r + 1),
			r === 0 && (this.output.push(n), this.update())
		let i = !1
		return () => {
			if (i) return
			i = !0
			const s = this.counts.get(n) - 1
			this.counts.set(n, s),
				s === 0 && (Zs(this.output, n), this.update())
		}
	}
	update() {
		this.set(this.output.length ? this.output.join(', ') : 'auto')
	}
}
function nw(e) {
	return !!(Ce(e) && e.add)
}
function Yl(e, t) {
	var n
	if (!e.applyWillChange) return
	let r = e.getValue('willChange')
	if (
		(!r &&
			!(
				!((n = e.props.style) === null || n === void 0) && n.willChange
			) &&
			((r = new tw('auto')), e.addValue('willChange', r)),
		nw(r))
	)
		return r.add(t)
}
function rw({ protectedKeys: e, needsAnimating: t }, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0
	return (t[n] = !1), r
}
function pm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	var s
	let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t
	r && (o = r)
	const u = [],
		c = i && e.animationState && e.animationState.getState()[i]
	for (const f in a) {
		const d = e.getValue(
				f,
				(s = e.latestValues[f]) !== null && s !== void 0 ? s : null
			),
			v = a[f]
		if (v === void 0 || (c && rw(c, f))) continue
		const g = { delay: n, elapsed: 0, ...uu(o || {}, f) }
		let y = !1
		if (window.HandoffAppearAnimations) {
			const p = hm(e)
			if (p) {
				const h = window.HandoffAppearAnimations(p, f, d, G)
				h !== null && ((g.elapsed = h), (y = !0))
			}
		}
		d.start(
			yu(
				f,
				d,
				v,
				e.shouldReduceMotion && ln.has(f) ? { type: !1 } : g,
				e,
				y,
				Yl(e, f)
			)
		)
		const k = d.animation
		k && u.push(k)
	}
	return (
		l &&
			Promise.all(u).then(() => {
				G.update(() => {
					l && ew(e, l)
				})
			}),
		u
	)
}
function Xl(e, t, n = {}) {
	var r
	const i = Js(
		e,
		t,
		n.type === 'exit'
			? (r = e.presenceContext) === null || r === void 0
				? void 0
				: r.custom
			: void 0
	)
	let { transition: s = e.getDefaultTransition() || {} } = i || {}
	n.transitionOverride && (s = n.transitionOverride)
	const o = i ? () => Promise.all(pm(e, i, n)) : () => Promise.resolve(),
		l =
			e.variantChildren && e.variantChildren.size
				? (u = 0) => {
						const {
							delayChildren: c = 0,
							staggerChildren: f,
							staggerDirection: d,
						} = s
						return iw(e, t, c + u, f, d, n)
				  }
				: () => Promise.resolve(),
		{ when: a } = s
	if (a) {
		const [u, c] = a === 'beforeChildren' ? [o, l] : [l, o]
		return u().then(() => c())
	} else return Promise.all([o(), l(n.delay)])
}
function iw(e, t, n = 0, r = 0, i = 1, s) {
	const o = [],
		l = (e.variantChildren.size - 1) * r,
		a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r
	return (
		Array.from(e.variantChildren)
			.sort(sw)
			.forEach((u, c) => {
				u.notify('AnimationStart', t),
					o.push(
						Xl(u, t, { ...s, delay: n + a(c) }).then(() =>
							u.notify('AnimationComplete', t)
						)
					)
			}),
		Promise.all(o)
	)
}
function sw(e, t) {
	return e.sortNodePosition(t)
}
function ow(e, t, n = {}) {
	e.notify('AnimationStart', t)
	let r
	if (Array.isArray(t)) {
		const i = t.map((s) => Xl(e, s, n))
		r = Promise.all(i)
	} else if (typeof t == 'string') r = Xl(e, t, n)
	else {
		const i = typeof t == 'function' ? Js(e, t, n.custom) : t
		r = Promise.all(pm(e, i, n))
	}
	return r.then(() => {
		G.postRender(() => {
			e.notify('AnimationComplete', t)
		})
	})
}
const lw = [...qa].reverse(),
	aw = qa.length
function uw(e) {
	return (t) =>
		Promise.all(t.map(({ animation: n, options: r }) => ow(e, n, r)))
}
function cw(e) {
	let t = uw(e),
		n = of(),
		r = !0
	const i = (a) => (u, c) => {
		var f
		const d = Js(
			e,
			c,
			a === 'exit'
				? (f = e.presenceContext) === null || f === void 0
					? void 0
					: f.custom
				: void 0
		)
		if (d) {
			const { transition: v, transitionEnd: g, ...y } = d
			u = { ...u, ...y, ...g }
		}
		return u
	}
	function s(a) {
		t = a(e)
	}
	function o(a) {
		const u = e.getProps(),
			c = e.getVariantContext(!0) || {},
			f = [],
			d = new Set()
		let v = {},
			g = 1 / 0
		for (let k = 0; k < aw; k++) {
			const p = lw[k],
				h = n[p],
				m = u[p] !== void 0 ? u[p] : c[p],
				w = oi(m),
				x = p === a ? h.isActive : null
			x === !1 && (g = k)
			let A = m === c[p] && m !== u[p] && w
			if (
				(A && r && e.manuallyAnimateOnMount && (A = !1),
				(h.protectedKeys = { ...v }),
				(!h.isActive && x === null) ||
					(!m && !h.prevProp) ||
					li(m) ||
					typeof m == 'boolean')
			)
				continue
			let E =
					fw(h.prevProp, m) ||
					(p === a && h.isActive && !A && w) ||
					(k > g && w),
				B = !1
			const _ = Array.isArray(m) ? m : [m]
			let F = _.reduce(i(p), {})
			x === !1 && (F = {})
			const { prevResolvedValues: ce = {} } = h,
				qe = { ...ce, ...F },
				Nt = (le) => {
					;(E = !0),
						d.has(le) && ((B = !0), d.delete(le)),
						(h.needsAnimating[le] = !0)
					const Me = e.getValue(le)
					Me && (Me.liveStyle = !1)
				}
			for (const le in qe) {
				const Me = F[le],
					vt = ce[le]
				if (v.hasOwnProperty(le)) continue
				let R = !1
				Ul(Me) && Ul(vt) ? (R = !_p(Me, vt)) : (R = Me !== vt),
					R
						? Me != null
							? Nt(le)
							: d.add(le)
						: Me !== void 0 && d.has(le)
						? Nt(le)
						: (h.protectedKeys[le] = !0)
			}
			;(h.prevProp = m),
				(h.prevResolvedValues = F),
				h.isActive && (v = { ...v, ...F }),
				r && e.blockInitialAnimation && (E = !1),
				E &&
					(!A || B) &&
					f.push(
						..._.map((le) => ({
							animation: le,
							options: { type: p },
						}))
					)
		}
		if (d.size) {
			const k = {}
			d.forEach((p) => {
				const h = e.getBaseTarget(p),
					m = e.getValue(p)
				m && (m.liveStyle = !0), (k[p] = h ?? null)
			}),
				f.push({ animation: k })
		}
		let y = !!f.length
		return (
			r &&
				(u.initial === !1 || u.initial === u.animate) &&
				!e.manuallyAnimateOnMount &&
				(y = !1),
			(r = !1),
			y ? t(f) : Promise.resolve()
		)
	}
	function l(a, u) {
		var c
		if (n[a].isActive === u) return Promise.resolve()
		;(c = e.variantChildren) === null ||
			c === void 0 ||
			c.forEach((d) => {
				var v
				return (v = d.animationState) === null || v === void 0
					? void 0
					: v.setActive(a, u)
			}),
			(n[a].isActive = u)
		const f = o(a)
		for (const d in n) n[d].protectedKeys = {}
		return f
	}
	return {
		animateChanges: o,
		setActive: l,
		setAnimateFunction: s,
		getState: () => n,
		reset: () => {
			;(n = of()), (r = !0)
		},
	}
}
function fw(e, t) {
	return typeof t == 'string' ? t !== e : Array.isArray(t) ? !_p(t, e) : !1
}
function fn(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {},
	}
}
function of() {
	return {
		animate: fn(!0),
		whileInView: fn(),
		whileHover: fn(),
		whileTap: fn(),
		whileDrag: fn(),
		whileFocus: fn(),
		exit: fn(),
	}
}
class dw extends an {
	constructor(t) {
		super(t), t.animationState || (t.animationState = cw(t))
	}
	updateAnimationControlsSubscription() {
		const { animate: t } = this.node.getProps()
		li(t) && (this.unmountControls = t.subscribe(this.node))
	}
	mount() {
		this.updateAnimationControlsSubscription()
	}
	update() {
		const { animate: t } = this.node.getProps(),
			{ animate: n } = this.node.prevProps || {}
		t !== n && this.updateAnimationControlsSubscription()
	}
	unmount() {
		var t
		this.node.animationState.reset(),
			(t = this.unmountControls) === null || t === void 0 || t.call(this)
	}
}
let hw = 0
class pw extends an {
	constructor() {
		super(...arguments), (this.id = hw++)
	}
	update() {
		if (!this.node.presenceContext) return
		const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
			{ isPresent: r } = this.node.prevPresenceContext || {}
		if (!this.node.animationState || t === r) return
		const i = this.node.animationState.setActive('exit', !t)
		n && !t && i.then(() => n(this.id))
	}
	mount() {
		const { register: t } = this.node.presenceContext || {}
		t && (this.unmount = t(this.id))
	}
	unmount() {}
}
const mw = { animation: { Feature: dw }, exit: { Feature: pw } },
	lf = (e, t) => Math.abs(e - t)
function vw(e, t) {
	const n = lf(e.x, t.x),
		r = lf(e.y, t.y)
	return Math.sqrt(n ** 2 + r ** 2)
}
class mm {
	constructor(
		t,
		n,
		{
			transformPagePoint: r,
			contextWindow: i,
			dragSnapToOrigin: s = !1,
		} = {}
	) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.contextWindow = window),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
				const f = $o(this.lastMoveEventInfo, this.history),
					d = this.startEvent !== null,
					v = vw(f.offset, { x: 0, y: 0 }) >= 3
				if (!d && !v) return
				const { point: g } = f,
					{ timestamp: y } = ge
				this.history.push({ ...g, timestamp: y })
				const { onStart: k, onMove: p } = this.handlers
				d ||
					(k && k(this.lastMoveEvent, f),
					(this.startEvent = this.lastMoveEvent)),
					p && p(this.lastMoveEvent, f)
			}),
			(this.handlePointerMove = (f, d) => {
				;(this.lastMoveEvent = f),
					(this.lastMoveEventInfo = Uo(d, this.transformPagePoint)),
					G.update(this.updatePoint, !0)
			}),
			(this.handlePointerUp = (f, d) => {
				this.end()
				const {
					onEnd: v,
					onSessionEnd: g,
					resumeAnimation: y,
				} = this.handlers
				if (
					(this.dragSnapToOrigin && y && y(),
					!(this.lastMoveEvent && this.lastMoveEventInfo))
				)
					return
				const k = $o(
					f.type === 'pointercancel'
						? this.lastMoveEventInfo
						: Uo(d, this.transformPagePoint),
					this.history
				)
				this.startEvent && v && v(f, k), g && g(f, k)
			}),
			!Rp(t))
		)
			return
		;(this.dragSnapToOrigin = s),
			(this.handlers = n),
			(this.transformPagePoint = r),
			(this.contextWindow = i || window)
		const o = qs(t),
			l = Uo(o, this.transformPagePoint),
			{ point: a } = l,
			{ timestamp: u } = ge
		this.history = [{ ...a, timestamp: u }]
		const { onSessionStart: c } = n
		c && c(t, $o(l, this.history)),
			(this.removeListeners = Et(
				Tt(this.contextWindow, 'pointermove', this.handlePointerMove),
				Tt(this.contextWindow, 'pointerup', this.handlePointerUp),
				Tt(this.contextWindow, 'pointercancel', this.handlePointerUp)
			))
	}
	updateHandlers(t) {
		this.handlers = t
	}
	end() {
		this.removeListeners && this.removeListeners(), Vt(this.updatePoint)
	}
}
function Uo(e, t) {
	return t ? { point: t(e.point) } : e
}
function af(e, t) {
	return { x: e.x - t.x, y: e.y - t.y }
}
function $o({ point: e }, t) {
	return {
		point: e,
		delta: af(e, vm(t)),
		offset: af(e, gw(t)),
		velocity: yw(t, 0.1),
	}
}
function gw(e) {
	return e[0]
}
function vm(e) {
	return e[e.length - 1]
}
function yw(e, t) {
	if (e.length < 2) return { x: 0, y: 0 }
	let n = e.length - 1,
		r = null
	const i = vm(e)
	for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Zt(t))); ) n--
	if (!r) return { x: 0, y: 0 }
	const s = Mt(i.timestamp - r.timestamp)
	if (s === 0) return { x: 0, y: 0 }
	const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s }
	return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}
const gm = 1e-4,
	ww = 1 - gm,
	Sw = 1 + gm,
	ym = 0.01,
	xw = 0 - ym,
	Pw = 0 + ym
function Ue(e) {
	return e.max - e.min
}
function kw(e, t, n) {
	return Math.abs(e - t) <= n
}
function uf(e, t, n, r = 0.5) {
	;(e.origin = r),
		(e.originPoint = te(t.min, t.max, e.origin)),
		(e.scale = Ue(n) / Ue(t)),
		(e.translate = te(n.min, n.max, e.origin) - e.originPoint),
		((e.scale >= ww && e.scale <= Sw) || isNaN(e.scale)) && (e.scale = 1),
		((e.translate >= xw && e.translate <= Pw) || isNaN(e.translate)) &&
			(e.translate = 0)
}
function Ur(e, t, n, r) {
	uf(e.x, t.x, n.x, r ? r.originX : void 0),
		uf(e.y, t.y, n.y, r ? r.originY : void 0)
}
function cf(e, t, n) {
	;(e.min = n.min + t.min), (e.max = e.min + Ue(t))
}
function Cw(e, t, n) {
	cf(e.x, t.x, n.x), cf(e.y, t.y, n.y)
}
function ff(e, t, n) {
	;(e.min = t.min - n.min), (e.max = e.min + Ue(t))
}
function $r(e, t, n) {
	ff(e.x, t.x, n.x), ff(e.y, t.y, n.y)
}
function Tw(e, { min: t, max: n }, r) {
	return (
		t !== void 0 && e < t
			? (e = r ? te(t, e, r.min) : Math.max(e, t))
			: n !== void 0 &&
			  e > n &&
			  (e = r ? te(n, e, r.max) : Math.min(e, n)),
		e
	)
}
function df(e, t, n) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
	}
}
function Ew(e, { top: t, left: n, bottom: r, right: i }) {
	return { x: df(e.x, n, i), y: df(e.y, t, r) }
}
function hf(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max
	return (
		t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
	)
}
function Mw(e, t) {
	return { x: hf(e.x, t.x), y: hf(e.y, t.y) }
}
function Aw(e, t) {
	let n = 0.5
	const r = Ue(e),
		i = Ue(t)
	return (
		i > r
			? (n = ui(t.min, t.max - r, e.min))
			: r > i && (n = ui(e.min, e.max - i, t.min)),
		tn(0, 1, n)
	)
}
function Dw(e, t) {
	const n = {}
	return (
		t.min !== void 0 && (n.min = t.min - e.min),
		t.max !== void 0 && (n.max = t.max - e.min),
		n
	)
}
const Zl = 0.35
function Rw(e = Zl) {
	return (
		e === !1 ? (e = 0) : e === !0 && (e = Zl),
		{ x: pf(e, 'left', 'right'), y: pf(e, 'top', 'bottom') }
	)
}
function pf(e, t, n) {
	return { min: mf(e, t), max: mf(e, n) }
}
function mf(e, t) {
	return typeof e == 'number' ? e : e[t] || 0
}
const vf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Gn = () => ({ x: vf(), y: vf() }),
	gf = () => ({ min: 0, max: 0 }),
	ae = () => ({ x: gf(), y: gf() })
function Ge(e) {
	return [e('x'), e('y')]
}
function wm({ top: e, left: t, right: n, bottom: r }) {
	return { x: { min: t, max: n }, y: { min: e, max: r } }
}
function Lw({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function Vw(e, t) {
	if (!t) return e
	const n = t({ x: e.left, y: e.top }),
		r = t({ x: e.right, y: e.bottom })
	return { top: n.y, left: n.x, bottom: r.y, right: r.x }
}
function Wo(e) {
	return e === void 0 || e === 1
}
function ql({ scale: e, scaleX: t, scaleY: n }) {
	return !Wo(e) || !Wo(t) || !Wo(n)
}
function pn(e) {
	return (
		ql(e) ||
		Sm(e) ||
		e.z ||
		e.rotate ||
		e.rotateX ||
		e.rotateY ||
		e.skewX ||
		e.skewY
	)
}
function Sm(e) {
	return yf(e.x) || yf(e.y)
}
function yf(e) {
	return e && e !== '0%'
}
function Rs(e, t, n) {
	const r = e - n,
		i = t * r
	return n + i
}
function wf(e, t, n, r, i) {
	return i !== void 0 && (e = Rs(e, i, r)), Rs(e, n, r) + t
}
function Jl(e, t = 0, n = 1, r, i) {
	;(e.min = wf(e.min, t, n, r, i)), (e.max = wf(e.max, t, n, r, i))
}
function xm(e, { x: t, y: n }) {
	Jl(e.x, t.translate, t.scale, t.originPoint),
		Jl(e.y, n.translate, n.scale, n.originPoint)
}
const Sf = 0.999999999999,
	xf = 1.0000000000001
function Ow(e, t, n, r = !1) {
	const i = n.length
	if (!i) return
	t.x = t.y = 1
	let s, o
	for (let l = 0; l < i; l++) {
		;(s = n[l]), (o = s.projectionDelta)
		const { visualElement: a } = s.options
		;(a && a.props.style && a.props.style.display === 'contents') ||
			(r &&
				s.options.layoutScroll &&
				s.scroll &&
				s !== s.root &&
				Kn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
			o && ((t.x *= o.x.scale), (t.y *= o.y.scale), xm(e, o)),
			r && pn(s.latestValues) && Kn(e, s.latestValues))
	}
	t.x < xf && t.x > Sf && (t.x = 1), t.y < xf && t.y > Sf && (t.y = 1)
}
function bn(e, t) {
	;(e.min = e.min + t), (e.max = e.max + t)
}
function Pf(e, t, n, r, i = 0.5) {
	const s = te(e.min, e.max, i)
	Jl(e, t, n, s, r)
}
function Kn(e, t) {
	Pf(e.x, t.x, t.scaleX, t.scale, t.originX),
		Pf(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function Pm(e, t) {
	return wm(Vw(e.getBoundingClientRect(), t))
}
function Nw(e, t, n) {
	const r = Pm(e, n),
		{ scroll: i } = t
	return i && (bn(r.x, i.offset.x), bn(r.y, i.offset.y)), r
}
const km = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
	_w = new WeakMap()
class jw {
	constructor(t) {
		;(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = ae()),
			(this.visualElement = t)
	}
	start(t, { snapToCursor: n = !1 } = {}) {
		const { presenceContext: r } = this.visualElement
		if (r && r.isPresent === !1) return
		const i = (c) => {
				const { dragSnapToOrigin: f } = this.getProps()
				f ? this.pauseAnimation() : this.stopAnimation(),
					n && this.snapToCursor(qs(c, 'page').point)
			},
			s = (c, f) => {
				var d
				const {
					drag: v,
					dragPropagation: g,
					onDragStart: y,
				} = this.getProps()
				if (
					v &&
					!g &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = Vp(v)),
					!this.openGlobalLock)
				)
					return
				;(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked =
							!0),
						(this.visualElement.projection.target = void 0)),
					Ge((p) => {
						let h = this.getAxisMotionValue(p).get() || 0
						if (mt.test(h)) {
							const { projection: m } = this.visualElement
							if (m && m.layout) {
								const w = m.layout.layoutBox[p]
								w && (h = Ue(w) * (parseFloat(h) / 100))
							}
						}
						this.originPoint[p] = h
					}),
					y && G.postRender(() => y(c, f)),
					(d = this.removeWillChange) === null ||
						d === void 0 ||
						d.call(this),
					(this.removeWillChange = Yl(
						this.visualElement,
						'transform'
					))
				const { animationState: k } = this.visualElement
				k && k.setActive('whileDrag', !0)
			},
			o = (c, f) => {
				const {
					dragPropagation: d,
					dragDirectionLock: v,
					onDirectionLock: g,
					onDrag: y,
				} = this.getProps()
				if (!d && !this.openGlobalLock) return
				const { offset: k } = f
				if (v && this.currentDirection === null) {
					;(this.currentDirection = Fw(k)),
						this.currentDirection !== null &&
							g &&
							g(this.currentDirection)
					return
				}
				this.updateAxis('x', f.point, k),
					this.updateAxis('y', f.point, k),
					this.visualElement.render(),
					y && y(c, f)
			},
			l = (c, f) => this.stop(c, f),
			a = () =>
				Ge((c) => {
					var f
					return (
						this.getAnimationState(c) === 'paused' &&
						((f = this.getAxisMotionValue(c).animation) === null ||
						f === void 0
							? void 0
							: f.play())
					)
				}),
			{ dragSnapToOrigin: u } = this.getProps()
		this.panSession = new mm(
			t,
			{
				onSessionStart: i,
				onStart: s,
				onMove: o,
				onSessionEnd: l,
				resumeAnimation: a,
			},
			{
				transformPagePoint: this.visualElement.getTransformPagePoint(),
				dragSnapToOrigin: u,
				contextWindow: km(this.visualElement),
			}
		)
	}
	stop(t, n) {
		var r
		;(r = this.removeWillChange) === null || r === void 0 || r.call(this)
		const i = this.isDragging
		if ((this.cancel(), !i)) return
		const { velocity: s } = n
		this.startAnimation(s)
		const { onDragEnd: o } = this.getProps()
		o && G.postRender(() => o(t, n))
	}
	cancel() {
		this.isDragging = !1
		const { projection: t, animationState: n } = this.visualElement
		t && (t.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0)
		const { dragPropagation: r } = this.getProps()
		!r &&
			this.openGlobalLock &&
			(this.openGlobalLock(), (this.openGlobalLock = null)),
			n && n.setActive('whileDrag', !1)
	}
	updateAxis(t, n, r) {
		const { drag: i } = this.getProps()
		if (!r || !zi(t, i, this.currentDirection)) return
		const s = this.getAxisMotionValue(t)
		let o = this.originPoint[t] + r[t]
		this.constraints &&
			this.constraints[t] &&
			(o = Tw(o, this.constraints[t], this.elastic[t])),
			s.set(o)
	}
	resolveConstraints() {
		var t
		const { dragConstraints: n, dragElastic: r } = this.getProps(),
			i =
				this.visualElement.projection &&
				!this.visualElement.projection.layout
					? this.visualElement.projection.measure(!1)
					: (t = this.visualElement.projection) === null ||
					  t === void 0
					? void 0
					: t.layout,
			s = this.constraints
		n && Wn(n)
			? this.constraints ||
			  (this.constraints = this.resolveRefConstraints())
			: n && i
			? (this.constraints = Ew(i.layoutBox, n))
			: (this.constraints = !1),
			(this.elastic = Rw(r)),
			s !== this.constraints &&
				i &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				Ge((o) => {
					this.constraints !== !1 &&
						this.getAxisMotionValue(o) &&
						(this.constraints[o] = Dw(
							i.layoutBox[o],
							this.constraints[o]
						))
				})
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: n } =
			this.getProps()
		if (!t || !Wn(t)) return !1
		const r = t.current,
			{ projection: i } = this.visualElement
		if (!i || !i.layout) return !1
		const s = Nw(r, i.root, this.visualElement.getTransformPagePoint())
		let o = Mw(i.layout.layoutBox, s)
		if (n) {
			const l = n(Lw(o))
			;(this.hasMutatedConstraints = !!l), l && (o = wm(l))
		}
		return o
	}
	startAnimation(t) {
		const {
				drag: n,
				dragMomentum: r,
				dragElastic: i,
				dragTransition: s,
				dragSnapToOrigin: o,
				onDragTransitionEnd: l,
			} = this.getProps(),
			a = this.constraints || {},
			u = Ge((c) => {
				if (!zi(c, n, this.currentDirection)) return
				let f = (a && a[c]) || {}
				o && (f = { min: 0, max: 0 })
				const d = i ? 200 : 1e6,
					v = i ? 40 : 1e7,
					g = {
						type: 'inertia',
						velocity: r ? t[c] : 0,
						bounceStiffness: d,
						bounceDamping: v,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...s,
						...f,
					}
				return this.startAxisValueAnimation(c, g)
			})
		return Promise.all(u).then(l)
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t)
		return r.start(
			yu(t, r, 0, n, this.visualElement, !1, Yl(this.visualElement, t))
		)
	}
	stopAnimation() {
		Ge((t) => this.getAxisMotionValue(t).stop())
	}
	pauseAnimation() {
		Ge((t) => {
			var n
			return (n = this.getAxisMotionValue(t).animation) === null ||
				n === void 0
				? void 0
				: n.pause()
		})
	}
	getAnimationState(t) {
		var n
		return (n = this.getAxisMotionValue(t).animation) === null ||
			n === void 0
			? void 0
			: n.state
	}
	getAxisMotionValue(t) {
		const n = `_drag${t.toUpperCase()}`,
			r = this.visualElement.getProps(),
			i = r[n]
		return (
			i ||
			this.visualElement.getValue(
				t,
				(r.initial ? r.initial[t] : void 0) || 0
			)
		)
	}
	snapToCursor(t) {
		Ge((n) => {
			const { drag: r } = this.getProps()
			if (!zi(n, r, this.currentDirection)) return
			const { projection: i } = this.visualElement,
				s = this.getAxisMotionValue(n)
			if (i && i.layout) {
				const { min: o, max: l } = i.layout.layoutBox[n]
				s.set(t[n] - te(o, l, 0.5))
			}
		})
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return
		const { drag: t, dragConstraints: n } = this.getProps(),
			{ projection: r } = this.visualElement
		if (!Wn(n) || !r || !this.constraints) return
		this.stopAnimation()
		const i = { x: 0, y: 0 }
		Ge((o) => {
			const l = this.getAxisMotionValue(o)
			if (l && this.constraints !== !1) {
				const a = l.get()
				i[o] = Aw({ min: a, max: a }, this.constraints[o])
			}
		})
		const { transformTemplate: s } = this.visualElement.getProps()
		;(this.visualElement.current.style.transform = s ? s({}, '') : 'none'),
			r.root && r.root.updateScroll(),
			r.updateLayout(),
			this.resolveConstraints(),
			Ge((o) => {
				if (!zi(o, t, null)) return
				const l = this.getAxisMotionValue(o),
					{ min: a, max: u } = this.constraints[o]
				l.set(te(a, u, i[o]))
			})
	}
	addListeners() {
		if (!this.visualElement.current) return
		_w.set(this.visualElement, this)
		const t = this.visualElement.current,
			n = Tt(t, 'pointerdown', (a) => {
				const { drag: u, dragListener: c = !0 } = this.getProps()
				u && c && this.start(a)
			}),
			r = () => {
				const { dragConstraints: a } = this.getProps()
				Wn(a) &&
					a.current &&
					(this.constraints = this.resolveRefConstraints())
			},
			{ projection: i } = this.visualElement,
			s = i.addEventListener('measure', r)
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
			G.read(r)
		const o = kt(window, 'resize', () =>
				this.scalePositionWithinConstraints()
			),
			l = i.addEventListener(
				'didUpdate',
				({ delta: a, hasLayoutChanged: u }) => {
					this.isDragging &&
						u &&
						(Ge((c) => {
							const f = this.getAxisMotionValue(c)
							f &&
								((this.originPoint[c] += a[c].translate),
								f.set(f.get() + a[c].translate))
						}),
						this.visualElement.render())
				}
			)
		return () => {
			o(), n(), s(), l && l()
		}
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: i = !1,
				dragConstraints: s = !1,
				dragElastic: o = Zl,
				dragMomentum: l = !0,
			} = t
		return {
			...t,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: i,
			dragConstraints: s,
			dragElastic: o,
			dragMomentum: l,
		}
	}
}
function zi(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e)
}
function Fw(e, t = 10) {
	let n = null
	return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n
}
class Iw extends an {
	constructor(t) {
		super(t),
			(this.removeGroupControls = Te),
			(this.removeListeners = Te),
			(this.controls = new jw(t))
	}
	mount() {
		const { dragControls: t } = this.node.getProps()
		t && (this.removeGroupControls = t.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || Te)
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners()
	}
}
const kf = (e) => (t, n) => {
	e && G.postRender(() => e(t, n))
}
class zw extends an {
	constructor() {
		super(...arguments), (this.removePointerDownListener = Te)
	}
	onPointerDown(t) {
		this.session = new mm(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: km(this.node),
		})
	}
	createPanHandlers() {
		const {
			onPanSessionStart: t,
			onPanStart: n,
			onPan: r,
			onPanEnd: i,
		} = this.node.getProps()
		return {
			onSessionStart: kf(t),
			onStart: kf(n),
			onMove: r,
			onEnd: (s, o) => {
				delete this.session, i && G.postRender(() => i(s, o))
			},
		}
	}
	mount() {
		this.removePointerDownListener = Tt(
			this.node.current,
			'pointerdown',
			(t) => this.onPointerDown(t)
		)
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers())
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end()
	}
}
function Bw() {
	const e = O.useContext(Ya)
	if (e === null) return [!0, null]
	const { isPresent: t, onExitComplete: n, register: r } = e,
		i = O.useId()
	O.useEffect(() => r(i), [])
	const s = O.useCallback(() => n && n(i), [i, n])
	return !t && n ? [!1, s] : [!0]
}
const es = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function Cf(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const kr = {
		correct: (e, t) => {
			if (!t.target) return e
			if (typeof e == 'string')
				if (j.test(e)) e = parseFloat(e)
				else return e
			const n = Cf(e, t.target.x),
				r = Cf(e, t.target.y)
			return `${n}% ${r}%`
		},
	},
	Uw = {
		correct: (e, { treeScale: t, projectionDelta: n }) => {
			const r = e,
				i = nn.parse(e)
			if (i.length > 5) return r
			const s = nn.createTransformer(e),
				o = typeof i[0] != 'number' ? 1 : 0,
				l = n.x.scale * t.x,
				a = n.y.scale * t.y
			;(i[0 + o] /= l), (i[1 + o] /= a)
			const u = te(l, a, 0.5)
			return (
				typeof i[2 + o] == 'number' && (i[2 + o] /= u),
				typeof i[3 + o] == 'number' && (i[3 + o] /= u),
				s(i)
			)
		},
	}
class $w extends O.Component {
	componentDidMount() {
		const {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
				layoutId: i,
			} = this.props,
			{ projection: s } = t
		Ny(Ww),
			s &&
				(n.group && n.group.add(s),
				r && r.register && i && r.register(s),
				s.root.didUpdate(),
				s.addEventListener('animationComplete', () => {
					this.safeToRemove()
				}),
				s.setOptions({
					...s.options,
					onExitComplete: () => this.safeToRemove(),
				})),
			(es.hasEverUpdated = !0)
	}
	getSnapshotBeforeUpdate(t) {
		const {
				layoutDependency: n,
				visualElement: r,
				drag: i,
				isPresent: s,
			} = this.props,
			o = r.projection
		return (
			o &&
				((o.isPresent = s),
				i || t.layoutDependency !== n || n === void 0
					? o.willUpdate()
					: this.safeToRemove(),
				t.isPresent !== s &&
					(s
						? o.promote()
						: o.relegate() ||
						  G.postRender(() => {
								const l = o.getStack()
								;(!l || !l.members.length) &&
									this.safeToRemove()
						  }))),
			null
		)
	}
	componentDidUpdate() {
		const { projection: t } = this.props.visualElement
		t &&
			(t.root.didUpdate(),
			Za.postRender(() => {
				!t.currentAnimation && t.isLead() && this.safeToRemove()
			}))
	}
	componentWillUnmount() {
		const {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
			} = this.props,
			{ projection: i } = t
		i &&
			(i.scheduleCheckAfterUnmount(),
			n && n.group && n.group.remove(i),
			r && r.deregister && r.deregister(i))
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props
		t && t()
	}
	render() {
		return null
	}
}
function Cm(e) {
	const [t, n] = Bw(),
		r = O.useContext(mp)
	return N.jsx($w, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: O.useContext(dp),
		isPresent: t,
		safeToRemove: n,
	})
}
const Ww = {
		borderRadius: {
			...kr,
			applyTo: [
				'borderTopLeftRadius',
				'borderTopRightRadius',
				'borderBottomLeftRadius',
				'borderBottomRightRadius',
			],
		},
		borderTopLeftRadius: kr,
		borderTopRightRadius: kr,
		borderBottomLeftRadius: kr,
		borderBottomRightRadius: kr,
		boxShadow: Uw,
	},
	Tm = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
	Hw = Tm.length,
	Tf = (e) => (typeof e == 'string' ? parseFloat(e) : e),
	Ef = (e) => typeof e == 'number' || j.test(e)
function Gw(e, t, n, r, i, s) {
	i
		? ((e.opacity = te(0, n.opacity !== void 0 ? n.opacity : 1, bw(r))),
		  (e.opacityExit = te(t.opacity !== void 0 ? t.opacity : 1, 0, Kw(r))))
		: s &&
		  (e.opacity = te(
				t.opacity !== void 0 ? t.opacity : 1,
				n.opacity !== void 0 ? n.opacity : 1,
				r
		  ))
	for (let o = 0; o < Hw; o++) {
		const l = `border${Tm[o]}Radius`
		let a = Mf(t, l),
			u = Mf(n, l)
		if (a === void 0 && u === void 0) continue
		a || (a = 0),
			u || (u = 0),
			a === 0 || u === 0 || Ef(a) === Ef(u)
				? ((e[l] = Math.max(te(Tf(a), Tf(u), r), 0)),
				  (mt.test(u) || mt.test(a)) && (e[l] += '%'))
				: (e[l] = u)
	}
	;(t.rotate || n.rotate) && (e.rotate = te(t.rotate || 0, n.rotate || 0, r))
}
function Mf(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius
}
const bw = Em(0, 0.5, sm),
	Kw = Em(0.5, 0.95, Te)
function Em(e, t, n) {
	return (r) => (r < e ? 0 : r > t ? 1 : n(ui(e, t, r)))
}
function Af(e, t) {
	;(e.min = t.min), (e.max = t.max)
}
function He(e, t) {
	Af(e.x, t.x), Af(e.y, t.y)
}
function Df(e, t) {
	;(e.translate = t.translate),
		(e.scale = t.scale),
		(e.originPoint = t.originPoint),
		(e.origin = t.origin)
}
function Rf(e, t, n, r, i) {
	return (
		(e -= t),
		(e = Rs(e, 1 / n, r)),
		i !== void 0 && (e = Rs(e, 1 / i, r)),
		e
	)
}
function Qw(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
	if (
		(mt.test(t) &&
			((t = parseFloat(t)), (t = te(o.min, o.max, t / 100) - o.min)),
		typeof t != 'number')
	)
		return
	let l = te(s.min, s.max, r)
	e === s && (l -= t),
		(e.min = Rf(e.min, t, n, l, i)),
		(e.max = Rf(e.max, t, n, l, i))
}
function Lf(e, t, [n, r, i], s, o) {
	Qw(e, t[n], t[r], t[i], t.scale, s, o)
}
const Yw = ['x', 'scaleX', 'originX'],
	Xw = ['y', 'scaleY', 'originY']
function Vf(e, t, n, r) {
	Lf(e.x, t, Yw, n ? n.x : void 0, r ? r.x : void 0),
		Lf(e.y, t, Xw, n ? n.y : void 0, r ? r.y : void 0)
}
function Of(e) {
	return e.translate === 0 && e.scale === 1
}
function Mm(e) {
	return Of(e.x) && Of(e.y)
}
function Nf(e, t) {
	return e.min === t.min && e.max === t.max
}
function Zw(e, t) {
	return Nf(e.x, t.x) && Nf(e.y, t.y)
}
function _f(e, t) {
	return (
		Math.round(e.min) === Math.round(t.min) &&
		Math.round(e.max) === Math.round(t.max)
	)
}
function Am(e, t) {
	return _f(e.x, t.x) && _f(e.y, t.y)
}
function jf(e) {
	return Ue(e.x) / Ue(e.y)
}
function Ff(e, t) {
	return (
		e.translate === t.translate &&
		e.scale === t.scale &&
		e.originPoint === t.originPoint
	)
}
class qw {
	constructor() {
		this.members = []
	}
	add(t) {
		Xs(this.members, t), t.scheduleRender()
	}
	remove(t) {
		if (
			(Zs(this.members, t),
			t === this.prevLead && (this.prevLead = void 0),
			t === this.lead)
		) {
			const n = this.members[this.members.length - 1]
			n && this.promote(n)
		}
	}
	relegate(t) {
		const n = this.members.findIndex((i) => t === i)
		if (n === 0) return !1
		let r
		for (let i = n; i >= 0; i--) {
			const s = this.members[i]
			if (s.isPresent !== !1) {
				r = s
				break
			}
		}
		return r ? (this.promote(r), !0) : !1
	}
	promote(t, n) {
		const r = this.lead
		if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
			r.instance && r.scheduleRender(),
				t.scheduleRender(),
				(t.resumeFrom = r),
				n && (t.resumeFrom.preserveOpacity = !0),
				r.snapshot &&
					((t.snapshot = r.snapshot),
					(t.snapshot.latestValues =
						r.animationValues || r.latestValues)),
				t.root && t.root.isUpdating && (t.isLayoutDirty = !0)
			const { crossfade: i } = t.options
			i === !1 && r.hide()
		}
	}
	exitAnimationComplete() {
		this.members.forEach((t) => {
			const { options: n, resumingFrom: r } = t
			n.onExitComplete && n.onExitComplete(),
				r && r.options.onExitComplete && r.options.onExitComplete()
		})
	}
	scheduleRender() {
		this.members.forEach((t) => {
			t.instance && t.scheduleRender(!1)
		})
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
	}
}
function Jw(e, t, n) {
	let r = ''
	const i = e.x.translate / t.x,
		s = e.y.translate / t.y,
		o = (n == null ? void 0 : n.z) || 0
	if (
		((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
		(t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
		n)
	) {
		const {
			transformPerspective: u,
			rotate: c,
			rotateX: f,
			rotateY: d,
			skewX: v,
			skewY: g,
		} = n
		u && (r = `perspective(${u}px) ${r}`),
			c && (r += `rotate(${c}deg) `),
			f && (r += `rotateX(${f}deg) `),
			d && (r += `rotateY(${d}deg) `),
			v && (r += `skewX(${v}deg) `),
			g && (r += `skewY(${g}deg) `)
	}
	const l = e.x.scale * t.x,
		a = e.y.scale * t.y
	return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || 'none'
}
const eS = (e, t) => e.depth - t.depth
class tS {
	constructor() {
		;(this.children = []), (this.isDirty = !1)
	}
	add(t) {
		Xs(this.children, t), (this.isDirty = !0)
	}
	remove(t) {
		Zs(this.children, t), (this.isDirty = !0)
	}
	forEach(t) {
		this.isDirty && this.children.sort(eS),
			(this.isDirty = !1),
			this.children.forEach(t)
	}
}
function nS(e, t) {
	const n = qt.now(),
		r = ({ timestamp: i }) => {
			const s = i - n
			s >= t && (Vt(r), e(s - t))
		}
	return G.read(r, !0), () => Vt(r)
}
function rS(e) {
	return e instanceof SVGElement && e.tagName !== 'svg'
}
function iS(e, t, n) {
	const r = Ce(e) ? e : ci(e)
	return r.start(yu('', r, t, n)), r.animation
}
const mn = {
		type: 'projectionFrame',
		totalNodes: 0,
		resolvedTargetDeltas: 0,
		recalculatedProjection: 0,
	},
	Dr = typeof window < 'u' && window.MotionDebug !== void 0,
	Ho = ['', 'X', 'Y', 'Z'],
	sS = { visibility: 'hidden' },
	If = 1e3
let oS = 0
function Go(e, t, n, r) {
	const { latestValues: i } = t
	i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0))
}
function Dm(e) {
	if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1
	const { visualElement: t } = e.options
	return t
		? hm(t)
			? !0
			: e.parent && !e.parent.hasCheckedOptimisedAppear
			? Dm(e.parent)
			: !1
		: !1
}
function Rm({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: i,
}) {
	return class {
		constructor(o = {}, l = t == null ? void 0 : t()) {
			;(this.id = oS++),
				(this.animationId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isProjectionDirty = !1),
				(this.isSharedProjectionDirty = !1),
				(this.isTransformDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.hasCheckedOptimisedAppear = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.hasTreeAnimated = !1),
				(this.updateScheduled = !1),
				(this.scheduleUpdate = () => this.update()),
				(this.projectionUpdateScheduled = !1),
				(this.checkUpdateFailed = () => {
					this.isUpdating &&
						((this.isUpdating = !1), this.clearAllSnapshots())
				}),
				(this.updateProjection = () => {
					;(this.projectionUpdateScheduled = !1),
						Dr &&
							(mn.totalNodes =
								mn.resolvedTargetDeltas =
								mn.recalculatedProjection =
									0),
						this.nodes.forEach(uS),
						this.nodes.forEach(pS),
						this.nodes.forEach(mS),
						this.nodes.forEach(cS),
						Dr && window.MotionDebug.record(mn)
				}),
				(this.resolvedRelativeTargetAt = 0),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = o),
				(this.root = l ? l.root || l : this),
				(this.path = l ? [...l.path, l] : []),
				(this.parent = l),
				(this.depth = l ? l.depth + 1 : 0)
			for (let a = 0; a < this.path.length; a++)
				this.path[a].shouldResetTransform = !0
			this.root === this && (this.nodes = new tS())
		}
		addEventListener(o, l) {
			return (
				this.eventHandlers.has(o) ||
					this.eventHandlers.set(o, new wu()),
				this.eventHandlers.get(o).add(l)
			)
		}
		notifyListeners(o, ...l) {
			const a = this.eventHandlers.get(o)
			a && a.notify(...l)
		}
		hasListeners(o) {
			return this.eventHandlers.has(o)
		}
		mount(o, l = this.root.hasTreeAnimated) {
			if (this.instance) return
			;(this.isSVG = rS(o)), (this.instance = o)
			const { layoutId: a, layout: u, visualElement: c } = this.options
			if (
				(c && !c.current && c.mount(o),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				l && (u || a) && (this.isLayoutDirty = !0),
				e)
			) {
				let f
				const d = () => (this.root.updateBlockedByResize = !1)
				e(o, () => {
					;(this.root.updateBlockedByResize = !0),
						f && f(),
						(f = nS(d, 250)),
						es.hasAnimatedSinceResize &&
							((es.hasAnimatedSinceResize = !1),
							this.nodes.forEach(Bf))
				})
			}
			a && this.root.registerSharedNode(a, this),
				this.options.animate !== !1 &&
					c &&
					(a || u) &&
					this.addEventListener(
						'didUpdate',
						({
							delta: f,
							hasLayoutChanged: d,
							hasRelativeTargetChanged: v,
							layout: g,
						}) => {
							if (this.isTreeAnimationBlocked()) {
								;(this.target = void 0),
									(this.relativeTarget = void 0)
								return
							}
							const y =
									this.options.transition ||
									c.getDefaultTransition() ||
									SS,
								{
									onLayoutAnimationStart: k,
									onLayoutAnimationComplete: p,
								} = c.getProps(),
								h =
									!this.targetLayout ||
									!Am(this.targetLayout, g) ||
									v,
								m = !d && v
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								m ||
								(d && (h || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(f, m)
								const w = {
									...uu(y, 'layout'),
									onPlay: k,
									onComplete: p,
								}
								;(c.shouldReduceMotion ||
									this.options.layoutRoot) &&
									((w.delay = 0), (w.type = !1)),
									this.startAnimation(w)
							} else
								d || Bf(this),
									this.isLead() &&
										this.options.onExitComplete &&
										this.options.onExitComplete()
							this.targetLayout = g
						}
					)
		}
		unmount() {
			this.options.layoutId && this.willUpdate(),
				this.root.nodes.remove(this)
			const o = this.getStack()
			o && o.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				Vt(this.updateProjection)
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize
		}
		isTreeAnimationBlocked() {
			return (
				this.isAnimationBlocked ||
				(this.parent && this.parent.isTreeAnimationBlocked()) ||
				!1
			)
		}
		startUpdate() {
			this.isUpdateBlocked() ||
				((this.isUpdating = !0),
				this.nodes && this.nodes.forEach(vS),
				this.animationId++)
		}
		getTransformTemplate() {
			const { visualElement: o } = this.options
			return o && o.getProps().transformTemplate
		}
		willUpdate(o = !0) {
			if (
				((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
			) {
				this.options.onExitComplete && this.options.onExitComplete()
				return
			}
			if (
				(window.HandoffCancelAllAnimations &&
					Dm(this) &&
					window.HandoffCancelAllAnimations(),
				!this.root.isUpdating && this.root.startUpdate(),
				this.isLayoutDirty)
			)
				return
			this.isLayoutDirty = !0
			for (let c = 0; c < this.path.length; c++) {
				const f = this.path[c]
				;(f.shouldResetTransform = !0),
					f.updateScroll('snapshot'),
					f.options.layoutRoot && f.willUpdate(!1)
			}
			const { layoutId: l, layout: a } = this.options
			if (l === void 0 && !a) return
			const u = this.getTransformTemplate()
			;(this.prevTransformTemplateValue = u
				? u(this.latestValues, '')
				: void 0),
				this.updateSnapshot(),
				o && this.notifyListeners('willUpdate')
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				this.unblockUpdate(),
					this.clearAllSnapshots(),
					this.nodes.forEach(zf)
				return
			}
			this.isUpdating || this.nodes.forEach(dS),
				(this.isUpdating = !1),
				this.nodes.forEach(hS),
				this.nodes.forEach(lS),
				this.nodes.forEach(aS),
				this.clearAllSnapshots()
			const l = qt.now()
			;(ge.delta = tn(0, 1e3 / 60, l - ge.timestamp)),
				(ge.timestamp = l),
				(ge.isProcessing = !0),
				No.update.process(ge),
				No.preRender.process(ge),
				No.render.process(ge),
				(ge.isProcessing = !1)
		}
		didUpdate() {
			this.updateScheduled ||
				((this.updateScheduled = !0), Za.read(this.scheduleUpdate))
		}
		clearAllSnapshots() {
			this.nodes.forEach(fS), this.sharedNodes.forEach(gS)
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled ||
				((this.projectionUpdateScheduled = !0),
				G.preRender(this.updateProjection, !1, !0))
		}
		scheduleCheckAfterUnmount() {
			G.postRender(() => {
				this.isLayoutDirty
					? this.root.didUpdate()
					: this.root.checkUpdateFailed()
			})
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure())
		}
		updateLayout() {
			if (
				!this.instance ||
				(this.updateScroll(),
				!(this.options.alwaysMeasureLayout && this.isLead()) &&
					!this.isLayoutDirty)
			)
				return
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let a = 0; a < this.path.length; a++)
					this.path[a].updateScroll()
			const o = this.layout
			;(this.layout = this.measure(!1)),
				(this.layoutCorrected = ae()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners('measure', this.layout.layoutBox)
			const { visualElement: l } = this.options
			l &&
				l.notify(
					'LayoutMeasure',
					this.layout.layoutBox,
					o ? o.layoutBox : void 0
				)
		}
		updateScroll(o = 'measure') {
			let l = !!(this.options.layoutScroll && this.instance)
			if (
				(this.scroll &&
					this.scroll.animationId === this.root.animationId &&
					this.scroll.phase === o &&
					(l = !1),
				l)
			) {
				const a = r(this.instance)
				this.scroll = {
					animationId: this.root.animationId,
					phase: o,
					isRoot: a,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : a,
				}
			}
		}
		resetTransform() {
			if (!i) return
			const o =
					this.isLayoutDirty ||
					this.shouldResetTransform ||
					this.options.alwaysMeasureLayout,
				l = this.projectionDelta && !Mm(this.projectionDelta),
				a = this.getTransformTemplate(),
				u = a ? a(this.latestValues, '') : void 0,
				c = u !== this.prevTransformTemplateValue
			o &&
				(l || pn(this.latestValues) || c) &&
				(i(this.instance, u),
				(this.shouldResetTransform = !1),
				this.scheduleRender())
		}
		measure(o = !0) {
			const l = this.measurePageBox()
			let a = this.removeElementScroll(l)
			return (
				o && (a = this.removeTransform(a)),
				xS(a),
				{
					animationId: this.root.animationId,
					measuredBox: l,
					layoutBox: a,
					latestValues: {},
					source: this.id,
				}
			)
		}
		measurePageBox() {
			var o
			const { visualElement: l } = this.options
			if (!l) return ae()
			const a = l.measureViewportBox()
			if (
				!(
					((o = this.scroll) === null || o === void 0
						? void 0
						: o.wasRoot) || this.path.some(PS)
				)
			) {
				const { scroll: c } = this.root
				c && (bn(a.x, c.offset.x), bn(a.y, c.offset.y))
			}
			return a
		}
		removeElementScroll(o) {
			var l
			const a = ae()
			if (
				(He(a, o),
				!((l = this.scroll) === null || l === void 0) && l.wasRoot)
			)
				return a
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u],
					{ scroll: f, options: d } = c
				c !== this.root &&
					f &&
					d.layoutScroll &&
					(f.wasRoot && He(a, o),
					bn(a.x, f.offset.x),
					bn(a.y, f.offset.y))
			}
			return a
		}
		applyTransform(o, l = !1) {
			const a = ae()
			He(a, o)
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u]
				!l &&
					c.options.layoutScroll &&
					c.scroll &&
					c !== c.root &&
					Kn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
					pn(c.latestValues) && Kn(a, c.latestValues)
			}
			return pn(this.latestValues) && Kn(a, this.latestValues), a
		}
		removeTransform(o) {
			const l = ae()
			He(l, o)
			for (let a = 0; a < this.path.length; a++) {
				const u = this.path[a]
				if (!u.instance || !pn(u.latestValues)) continue
				ql(u.latestValues) && u.updateSnapshot()
				const c = ae(),
					f = u.measurePageBox()
				He(c, f),
					Vf(
						l,
						u.latestValues,
						u.snapshot ? u.snapshot.layoutBox : void 0,
						c
					)
			}
			return pn(this.latestValues) && Vf(l, this.latestValues), l
		}
		setTargetDelta(o) {
			;(this.targetDelta = o),
				this.root.scheduleUpdateProjection(),
				(this.isProjectionDirty = !0)
		}
		setOptions(o) {
			this.options = {
				...this.options,
				...o,
				crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
			}
		}
		clearMeasurements() {
			;(this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1)
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent &&
				this.relativeParent.resolvedRelativeTargetAt !== ge.timestamp &&
				this.relativeParent.resolveTargetDelta(!0)
		}
		resolveTargetDelta(o = !1) {
			var l
			const a = this.getLead()
			this.isProjectionDirty ||
				(this.isProjectionDirty = a.isProjectionDirty),
				this.isTransformDirty ||
					(this.isTransformDirty = a.isTransformDirty),
				this.isSharedProjectionDirty ||
					(this.isSharedProjectionDirty = a.isSharedProjectionDirty)
			const u = !!this.resumingFrom || this !== a
			if (
				!(
					o ||
					(u && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					(!((l = this.parent) === null || l === void 0) &&
						l.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget ||
					this.root.updateBlockedByResize
				)
			)
				return
			const { layout: f, layoutId: d } = this.options
			if (!(!this.layout || !(f || d))) {
				if (
					((this.resolvedRelativeTargetAt = ge.timestamp),
					!this.targetDelta && !this.relativeTarget)
				) {
					const v = this.getClosestProjectingParent()
					v && v.layout && this.animationProgress !== 1
						? ((this.relativeParent = v),
						  this.forceRelativeParentToResolveTarget(),
						  (this.relativeTarget = ae()),
						  (this.relativeTargetOrigin = ae()),
						  $r(
								this.relativeTargetOrigin,
								this.layout.layoutBox,
								v.layout.layoutBox
						  ),
						  He(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0)
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target ||
							((this.target = ae()),
							(this.targetWithTransforms = ae())),
						this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.relativeParent &&
						this.relativeParent.target
							? (this.forceRelativeParentToResolveTarget(),
							  Cw(
									this.target,
									this.relativeTarget,
									this.relativeParent.target
							  ))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(
											this.layout.layoutBox
									  ))
									: He(this.target, this.layout.layoutBox),
							  xm(this.target, this.targetDelta))
							: He(this.target, this.layout.layoutBox),
						this.attemptToResolveRelativeTarget)
					) {
						this.attemptToResolveRelativeTarget = !1
						const v = this.getClosestProjectingParent()
						v &&
						!!v.resumingFrom == !!this.resumingFrom &&
						!v.options.layoutScroll &&
						v.target &&
						this.animationProgress !== 1
							? ((this.relativeParent = v),
							  this.forceRelativeParentToResolveTarget(),
							  (this.relativeTarget = ae()),
							  (this.relativeTargetOrigin = ae()),
							  $r(
									this.relativeTargetOrigin,
									this.target,
									v.target
							  ),
							  He(
									this.relativeTarget,
									this.relativeTargetOrigin
							  ))
							: (this.relativeParent = this.relativeTarget =
									void 0)
					}
					Dr && mn.resolvedTargetDeltas++
				}
			}
		}
		getClosestProjectingParent() {
			if (
				!(
					!this.parent ||
					ql(this.parent.latestValues) ||
					Sm(this.parent.latestValues)
				)
			)
				return this.parent.isProjecting()
					? this.parent
					: this.parent.getClosestProjectingParent()
		}
		isProjecting() {
			return !!(
				(this.relativeTarget ||
					this.targetDelta ||
					this.options.layoutRoot) &&
				this.layout
			)
		}
		calcProjection() {
			var o
			const l = this.getLead(),
				a = !!this.resumingFrom || this !== l
			let u = !0
			if (
				((this.isProjectionDirty ||
					(!((o = this.parent) === null || o === void 0) &&
						o.isProjectionDirty)) &&
					(u = !1),
				a &&
					(this.isSharedProjectionDirty || this.isTransformDirty) &&
					(u = !1),
				this.resolvedRelativeTargetAt === ge.timestamp && (u = !1),
				u)
			)
				return
			const { layout: c, layoutId: f } = this.options
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating ||
					(this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(c || f))
			)
				return
			He(this.layoutCorrected, this.layout.layoutBox)
			const d = this.treeScale.x,
				v = this.treeScale.y
			Ow(this.layoutCorrected, this.treeScale, this.path, a),
				l.layout &&
					!l.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					((l.target = l.layout.layoutBox),
					(l.targetWithTransforms = ae()))
			const { target: g } = l
			if (!g) {
				this.prevProjectionDelta &&
					(this.createProjectionDeltas(), this.scheduleRender())
				return
			}
			!this.projectionDelta || !this.prevProjectionDelta
				? this.createProjectionDeltas()
				: (Df(this.prevProjectionDelta.x, this.projectionDelta.x),
				  Df(this.prevProjectionDelta.y, this.projectionDelta.y)),
				Ur(
					this.projectionDelta,
					this.layoutCorrected,
					g,
					this.latestValues
				),
				(this.treeScale.x !== d ||
					this.treeScale.y !== v ||
					!Ff(this.projectionDelta.x, this.prevProjectionDelta.x) ||
					!Ff(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners('projectionUpdate', g)),
				Dr && mn.recalculatedProjection++
		}
		hide() {
			this.isVisible = !1
		}
		show() {
			this.isVisible = !0
		}
		scheduleRender(o = !0) {
			var l
			if (
				((l = this.options.visualElement) === null ||
					l === void 0 ||
					l.scheduleRender(),
				o)
			) {
				const a = this.getStack()
				a && a.scheduleRender()
			}
			this.resumingFrom &&
				!this.resumingFrom.instance &&
				(this.resumingFrom = void 0)
		}
		createProjectionDeltas() {
			;(this.prevProjectionDelta = Gn()),
				(this.projectionDelta = Gn()),
				(this.projectionDeltaWithTransform = Gn())
		}
		setAnimationOrigin(o, l = !1) {
			const a = this.snapshot,
				u = a ? a.latestValues : {},
				c = { ...this.latestValues },
				f = Gn()
			;(!this.relativeParent ||
				!this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !l)
			const d = ae(),
				v = a ? a.source : void 0,
				g = this.layout ? this.layout.source : void 0,
				y = v !== g,
				k = this.getStack(),
				p = !k || k.members.length <= 1,
				h = !!(
					y &&
					!p &&
					this.options.crossfade === !0 &&
					!this.path.some(wS)
				)
			this.animationProgress = 0
			let m
			;(this.mixTargetDelta = (w) => {
				const x = w / 1e3
				Uf(f.x, o.x, x),
					Uf(f.y, o.y, x),
					this.setTargetDelta(f),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						($r(
							d,
							this.layout.layoutBox,
							this.relativeParent.layout.layoutBox
						),
						yS(
							this.relativeTarget,
							this.relativeTargetOrigin,
							d,
							x
						),
						m &&
							Zw(this.relativeTarget, m) &&
							(this.isProjectionDirty = !1),
						m || (m = ae()),
						He(m, this.relativeTarget)),
					y &&
						((this.animationValues = c),
						Gw(c, u, this.latestValues, x, h, p)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = x)
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
		}
		startAnimation(o) {
			this.notifyListeners('animationStart'),
				this.currentAnimation && this.currentAnimation.stop(),
				this.resumingFrom &&
					this.resumingFrom.currentAnimation &&
					this.resumingFrom.currentAnimation.stop(),
				this.pendingAnimation &&
					(Vt(this.pendingAnimation),
					(this.pendingAnimation = void 0)),
				(this.pendingAnimation = G.update(() => {
					;(es.hasAnimatedSinceResize = !0),
						(this.currentAnimation = iS(0, If, {
							...o,
							onUpdate: (l) => {
								this.mixTargetDelta(l),
									o.onUpdate && o.onUpdate(l)
							},
							onComplete: () => {
								o.onComplete && o.onComplete(),
									this.completeAnimation()
							},
						})),
						this.resumingFrom &&
							(this.resumingFrom.currentAnimation =
								this.currentAnimation),
						(this.pendingAnimation = void 0)
				}))
		}
		completeAnimation() {
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0),
				(this.resumingFrom.preserveOpacity = void 0))
			const o = this.getStack()
			o && o.exitAnimationComplete(),
				(this.resumingFrom =
					this.currentAnimation =
					this.animationValues =
						void 0),
				this.notifyListeners('animationComplete')
		}
		finishAnimation() {
			this.currentAnimation &&
				(this.mixTargetDelta && this.mixTargetDelta(If),
				this.currentAnimation.stop()),
				this.completeAnimation()
		}
		applyTransformsToTarget() {
			const o = this.getLead()
			let {
				targetWithTransforms: l,
				target: a,
				layout: u,
				latestValues: c,
			} = o
			if (!(!l || !a || !u)) {
				if (
					this !== o &&
					this.layout &&
					u &&
					Lm(
						this.options.animationType,
						this.layout.layoutBox,
						u.layoutBox
					)
				) {
					a = this.target || ae()
					const f = Ue(this.layout.layoutBox.x)
					;(a.x.min = o.target.x.min), (a.x.max = a.x.min + f)
					const d = Ue(this.layout.layoutBox.y)
					;(a.y.min = o.target.y.min), (a.y.max = a.y.min + d)
				}
				He(l, a),
					Kn(l, c),
					Ur(
						this.projectionDeltaWithTransform,
						this.layoutCorrected,
						l,
						c
					)
			}
		}
		registerSharedNode(o, l) {
			this.sharedNodes.has(o) || this.sharedNodes.set(o, new qw()),
				this.sharedNodes.get(o).add(l)
			const u = l.options.initialPromotionConfig
			l.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity:
					u && u.shouldPreserveFollowOpacity
						? u.shouldPreserveFollowOpacity(l)
						: void 0,
			})
		}
		isLead() {
			const o = this.getStack()
			return o ? o.lead === this : !0
		}
		getLead() {
			var o
			const { layoutId: l } = this.options
			return l
				? ((o = this.getStack()) === null || o === void 0
						? void 0
						: o.lead) || this
				: this
		}
		getPrevLead() {
			var o
			const { layoutId: l } = this.options
			return l
				? (o = this.getStack()) === null || o === void 0
					? void 0
					: o.prevLead
				: void 0
		}
		getStack() {
			const { layoutId: o } = this.options
			if (o) return this.root.sharedNodes.get(o)
		}
		promote({
			needsReset: o,
			transition: l,
			preserveFollowOpacity: a,
		} = {}) {
			const u = this.getStack()
			u && u.promote(this, a),
				o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				l && this.setOptions({ transition: l })
		}
		relegate() {
			const o = this.getStack()
			return o ? o.relegate(this) : !1
		}
		resetSkewAndRotation() {
			const { visualElement: o } = this.options
			if (!o) return
			let l = !1
			const { latestValues: a } = o
			if (
				((a.z ||
					a.rotate ||
					a.rotateX ||
					a.rotateY ||
					a.rotateZ ||
					a.skewX ||
					a.skewY) &&
					(l = !0),
				!l)
			)
				return
			const u = {}
			a.z && Go('z', o, u, this.animationValues)
			for (let c = 0; c < Ho.length; c++)
				Go(`rotate${Ho[c]}`, o, u, this.animationValues),
					Go(`skew${Ho[c]}`, o, u, this.animationValues)
			o.render()
			for (const c in u)
				o.setStaticValue(c, u[c]),
					this.animationValues && (this.animationValues[c] = u[c])
			o.scheduleRender()
		}
		getProjectionStyles(o) {
			var l, a
			if (!this.instance || this.isSVG) return
			if (!this.isVisible) return sS
			const u = { visibility: '' },
				c = this.getTransformTemplate()
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(u.opacity = ''),
					(u.pointerEvents =
						qi(o == null ? void 0 : o.pointerEvents) || ''),
					(u.transform = c ? c(this.latestValues, '') : 'none'),
					u
				)
			const f = this.getLead()
			if (!this.projectionDelta || !this.layout || !f.target) {
				const y = {}
				return (
					this.options.layoutId &&
						((y.opacity =
							this.latestValues.opacity !== void 0
								? this.latestValues.opacity
								: 1),
						(y.pointerEvents =
							qi(o == null ? void 0 : o.pointerEvents) || '')),
					this.hasProjected &&
						!pn(this.latestValues) &&
						((y.transform = c ? c({}, '') : 'none'),
						(this.hasProjected = !1)),
					y
				)
			}
			const d = f.animationValues || f.latestValues
			this.applyTransformsToTarget(),
				(u.transform = Jw(
					this.projectionDeltaWithTransform,
					this.treeScale,
					d
				)),
				c && (u.transform = c(d, u.transform))
			const { x: v, y: g } = this.projectionDelta
			;(u.transformOrigin = `${v.origin * 100}% ${g.origin * 100}% 0`),
				f.animationValues
					? (u.opacity =
							f === this
								? (a =
										(l = d.opacity) !== null && l !== void 0
											? l
											: this.latestValues.opacity) !==
										null && a !== void 0
									? a
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: d.opacityExit)
					: (u.opacity =
							f === this
								? d.opacity !== void 0
									? d.opacity
									: ''
								: d.opacityExit !== void 0
								? d.opacityExit
								: 0)
			for (const y in Ts) {
				if (d[y] === void 0) continue
				const { correct: k, applyTo: p } = Ts[y],
					h = u.transform === 'none' ? d[y] : k(d[y], f)
				if (p) {
					const m = p.length
					for (let w = 0; w < m; w++) u[p[w]] = h
				} else u[y] = h
			}
			return (
				this.options.layoutId &&
					(u.pointerEvents =
						f === this
							? qi(o == null ? void 0 : o.pointerEvents) || ''
							: 'none'),
				u
			)
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0
		}
		resetTree() {
			this.root.nodes.forEach((o) => {
				var l
				return (l = o.currentAnimation) === null || l === void 0
					? void 0
					: l.stop()
			}),
				this.root.nodes.forEach(zf),
				this.root.sharedNodes.clear()
		}
	}
}
function lS(e) {
	e.updateLayout()
}
function aS(e) {
	var t
	const n =
		((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
		e.snapshot
	if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
		const { layoutBox: r, measuredBox: i } = e.layout,
			{ animationType: s } = e.options,
			o = n.source !== e.layout.source
		s === 'size'
			? Ge((f) => {
					const d = o ? n.measuredBox[f] : n.layoutBox[f],
						v = Ue(d)
					;(d.min = r[f].min), (d.max = d.min + v)
			  })
			: Lm(s, n.layoutBox, r) &&
			  Ge((f) => {
					const d = o ? n.measuredBox[f] : n.layoutBox[f],
						v = Ue(r[f])
					;(d.max = d.min + v),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0),
							(e.relativeTarget[f].max =
								e.relativeTarget[f].min + v))
			  })
		const l = Gn()
		Ur(l, r, n.layoutBox)
		const a = Gn()
		o
			? Ur(a, e.applyTransform(i, !0), n.measuredBox)
			: Ur(a, r, n.layoutBox)
		const u = !Mm(l)
		let c = !1
		if (!e.resumeFrom) {
			const f = e.getClosestProjectingParent()
			if (f && !f.resumeFrom) {
				const { snapshot: d, layout: v } = f
				if (d && v) {
					const g = ae()
					$r(g, n.layoutBox, d.layoutBox)
					const y = ae()
					$r(y, r, v.layoutBox),
						Am(g, y) || (c = !0),
						f.options.layoutRoot &&
							((e.relativeTarget = y),
							(e.relativeTargetOrigin = g),
							(e.relativeParent = f))
				}
			}
		}
		e.notifyListeners('didUpdate', {
			layout: r,
			snapshot: n,
			delta: a,
			layoutDelta: l,
			hasLayoutChanged: u,
			hasRelativeTargetChanged: c,
		})
	} else if (e.isLead()) {
		const { onExitComplete: r } = e.options
		r && r()
	}
	e.options.transition = void 0
}
function uS(e) {
	Dr && mn.totalNodes++,
		e.parent &&
			(e.isProjecting() ||
				(e.isProjectionDirty = e.parent.isProjectionDirty),
			e.isSharedProjectionDirty ||
				(e.isSharedProjectionDirty = !!(
					e.isProjectionDirty ||
					e.parent.isProjectionDirty ||
					e.parent.isSharedProjectionDirty
				)),
			e.isTransformDirty ||
				(e.isTransformDirty = e.parent.isTransformDirty))
}
function cS(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function fS(e) {
	e.clearSnapshot()
}
function zf(e) {
	e.clearMeasurements()
}
function dS(e) {
	e.isLayoutDirty = !1
}
function hS(e) {
	const { visualElement: t } = e.options
	t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
		e.resetTransform()
}
function Bf(e) {
	e.finishAnimation(),
		(e.targetDelta = e.relativeTarget = e.target = void 0),
		(e.isProjectionDirty = !0)
}
function pS(e) {
	e.resolveTargetDelta()
}
function mS(e) {
	e.calcProjection()
}
function vS(e) {
	e.resetSkewAndRotation()
}
function gS(e) {
	e.removeLeadSnapshot()
}
function Uf(e, t, n) {
	;(e.translate = te(t.translate, 0, n)),
		(e.scale = te(t.scale, 1, n)),
		(e.origin = t.origin),
		(e.originPoint = t.originPoint)
}
function $f(e, t, n, r) {
	;(e.min = te(t.min, n.min, r)), (e.max = te(t.max, n.max, r))
}
function yS(e, t, n, r) {
	$f(e.x, t.x, n.x, r), $f(e.y, t.y, n.y, r)
}
function wS(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0
}
const SS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	Wf = (e) =>
		typeof navigator < 'u' &&
		navigator.userAgent &&
		navigator.userAgent.toLowerCase().includes(e),
	Hf = Wf('applewebkit/') && !Wf('chrome/') ? Math.round : Te
function Gf(e) {
	;(e.min = Hf(e.min)), (e.max = Hf(e.max))
}
function xS(e) {
	Gf(e.x), Gf(e.y)
}
function Lm(e, t, n) {
	return (
		e === 'position' || (e === 'preserve-aspect' && !kw(jf(t), jf(n), 0.2))
	)
}
function PS(e) {
	var t
	return (
		e !== e.root &&
		((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
	)
}
const kS = Rm({
		attachResizeListener: (e, t) => kt(e, 'resize', t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	bo = { current: void 0 },
	Vm = Rm({
		measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!bo.current) {
				const e = new kS({})
				e.mount(window),
					e.setOptions({ layoutScroll: !0 }),
					(bo.current = e)
			}
			return bo.current
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : 'none'
		},
		checkIsScrollRoot: (e) =>
			window.getComputedStyle(e).position === 'fixed',
	}),
	CS = {
		pan: { Feature: zw },
		drag: { Feature: Iw, ProjectionNode: Vm, MeasureLayout: Cm },
	},
	ea = { current: null },
	Om = { current: !1 }
function TS() {
	if (((Om.current = !0), !!Xa))
		if (window.matchMedia) {
			const e = window.matchMedia('(prefers-reduced-motion)'),
				t = () => (ea.current = e.matches)
			e.addListener(t), t()
		} else ea.current = !1
}
function ES(e, t, n) {
	for (const r in t) {
		const i = t[r],
			s = n[r]
		if (Ce(i)) e.addValue(r, i)
		else if (Ce(s)) e.addValue(r, ci(i, { owner: e }))
		else if (s !== i)
			if (e.hasValue(r)) {
				const o = e.getValue(r)
				o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
			} else {
				const o = e.getStaticValue(r)
				e.addValue(r, ci(o !== void 0 ? o : i, { owner: e }))
			}
	}
	for (const r in n) t[r] === void 0 && e.removeValue(r)
	return t
}
const bf = new WeakMap(),
	MS = [...Bp, Pe, nn],
	AS = (e) => MS.find(zp(e)),
	Kf = [
		'AnimationStart',
		'AnimationComplete',
		'Update',
		'BeforeLayoutMeasure',
		'LayoutMeasure',
		'LayoutAnimationStart',
		'LayoutAnimationComplete',
	],
	DS = Ja.length
class RS {
	scrapeMotionValuesFromProps(t, n, r) {
		return {}
	}
	constructor(
		{
			parent: t,
			props: n,
			presenceContext: r,
			reducedMotionConfig: i,
			blockInitialAnimation: s,
			visualState: o,
		},
		l = {}
	) {
		;(this.applyWillChange = !1),
			(this.resolveKeyframes = (d, v, g, y) =>
				new this.KeyframeResolver(d, v, g, y, this)),
			(this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.values = new Map()),
			(this.KeyframeResolver = cu),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () =>
				this.notify('Update', this.latestValues)),
			(this.render = () => {
				;(this.isRenderScheduled = !1),
					this.current &&
						(this.triggerBuild(),
						this.renderInstance(
							this.current,
							this.renderState,
							this.props.style,
							this.projection
						))
			}),
			(this.isRenderScheduled = !1),
			(this.scheduleRender = () => {
				this.isRenderScheduled ||
					((this.isRenderScheduled = !0),
					G.render(this.render, !1, !0))
			})
		const { latestValues: a, renderState: u } = o
		;(this.latestValues = a),
			(this.baseTarget = { ...a }),
			(this.initialValues = n.initial ? { ...a } : {}),
			(this.renderState = u),
			(this.parent = t),
			(this.props = n),
			(this.presenceContext = r),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = i),
			(this.options = l),
			(this.blockInitialAnimation = !!s),
			(this.isControllingVariants = Ys(n)),
			(this.isVariantNode = pp(n)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(t && t.current))
		const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
			n,
			{},
			this
		)
		for (const d in f) {
			const v = f[d]
			a[d] !== void 0 && Ce(v) && v.set(a[d], !1)
		}
	}
	mount(t) {
		;(this.current = t),
			bf.set(t, this),
			this.projection &&
				!this.projection.instance &&
				this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree =
					this.parent.addVariantChild(this)),
			this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
			Om.current || TS(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === 'never'
					? !1
					: this.reducedMotionConfig === 'always'
					? !0
					: ea.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext)
	}
	unmount() {
		bf.delete(this.current),
			this.projection && this.projection.unmount(),
			Vt(this.notifyUpdate),
			Vt(this.render),
			this.valueSubscriptions.forEach((t) => t()),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this)
		for (const t in this.events) this.events[t].clear()
		for (const t in this.features) {
			const n = this.features[t]
			n && (n.unmount(), (n.isMounted = !1))
		}
		this.current = null
	}
	bindToMotionValue(t, n) {
		const r = ln.has(t),
			i = n.on('change', (o) => {
				;(this.latestValues[t] = o),
					this.props.onUpdate && G.preRender(this.notifyUpdate),
					r &&
						this.projection &&
						(this.projection.isTransformDirty = !0)
			}),
			s = n.on('renderRequest', this.scheduleRender)
		this.valueSubscriptions.set(t, () => {
			i(), s(), n.owner && n.stop()
		})
	}
	sortNodePosition(t) {
		return !this.current ||
			!this.sortInstanceNodePosition ||
			this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current)
	}
	updateFeatures() {
		let t = 'animation'
		for (t in lr) {
			const n = lr[t]
			if (!n) continue
			const { isEnabled: r, Feature: i } = n
			if (
				(!this.features[t] &&
					i &&
					r(this.props) &&
					(this.features[t] = new i(this)),
				this.features[t])
			) {
				const s = this.features[t]
				s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0))
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props)
	}
	measureViewportBox() {
		return this.current
			? this.measureInstanceViewportBox(this.current, this.props)
			: ae()
	}
	getStaticValue(t) {
		return this.latestValues[t]
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n
	}
	update(t, n) {
		;(t.transformTemplate || this.props.transformTemplate) &&
			this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = t),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = n)
		for (let r = 0; r < Kf.length; r++) {
			const i = Kf[r]
			this.propEventSubscriptions[i] &&
				(this.propEventSubscriptions[i](),
				delete this.propEventSubscriptions[i])
			const s = 'on' + i,
				o = t[s]
			o && (this.propEventSubscriptions[i] = this.on(i, o))
		}
		;(this.prevMotionValues = ES(
			this,
			this.scrapeMotionValuesFromProps(t, this.prevProps, this),
			this.prevMotionValues
		)),
			this.handleChildMotionValue && this.handleChildMotionValue()
	}
	getProps() {
		return this.props
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0
	}
	getDefaultTransition() {
		return this.props.transition
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint
	}
	getClosestVariantNode() {
		return this.isVariantNode
			? this
			: this.parent
			? this.parent.getClosestVariantNode()
			: void 0
	}
	getVariantContext(t = !1) {
		if (t) return this.parent ? this.parent.getVariantContext() : void 0
		if (!this.isControllingVariants) {
			const r = this.parent ? this.parent.getVariantContext() || {} : {}
			return (
				this.props.initial !== void 0 &&
					(r.initial = this.props.initial),
				r
			)
		}
		const n = {}
		for (let r = 0; r < DS; r++) {
			const i = Ja[r],
				s = this.props[i]
			;(oi(s) || s === !1) && (n[i] = s)
		}
		return n
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode()
		if (n)
			return (
				n.variantChildren && n.variantChildren.add(t),
				() => n.variantChildren.delete(t)
			)
	}
	addValue(t, n) {
		const r = this.values.get(t)
		n !== r &&
			(r && this.removeValue(t),
			this.bindToMotionValue(t, n),
			this.values.set(t, n),
			(this.latestValues[t] = n.get()))
	}
	removeValue(t) {
		this.values.delete(t)
		const n = this.valueSubscriptions.get(t)
		n && (n(), this.valueSubscriptions.delete(t)),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState)
	}
	hasValue(t) {
		return this.values.has(t)
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t])
			return this.props.values[t]
		let r = this.values.get(t)
		return (
			r === void 0 &&
				n !== void 0 &&
				((r = ci(n === null ? void 0 : n, { owner: this })),
				this.addValue(t, r)),
			r
		)
	}
	readValue(t, n) {
		var r
		let i =
			this.latestValues[t] !== void 0 || !this.current
				? this.latestValues[t]
				: (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
				  r !== void 0
				? r
				: this.readValueFromInstance(this.current, t, this.options)
		return (
			i != null &&
				(typeof i == 'string' && (Fp(i) || jp(i))
					? (i = parseFloat(i))
					: !AS(i) && nn.test(n) && (i = Qp(t, n)),
				this.setBaseTarget(t, Ce(i) ? i.get() : i)),
			Ce(i) ? i.get() : i
		)
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n
	}
	getBaseTarget(t) {
		var n
		const { initial: r } = this.props
		let i
		if (typeof r == 'string' || typeof r == 'object') {
			const o = au(
				this.props,
				r,
				(n = this.presenceContext) === null || n === void 0
					? void 0
					: n.custom
			)
			o && (i = o[t])
		}
		if (r && i !== void 0) return i
		const s = this.getBaseTargetFromProps(this.props, t)
		return s !== void 0 && !Ce(s)
			? s
			: this.initialValues[t] !== void 0 && i === void 0
			? void 0
			: this.baseTarget[t]
	}
	on(t, n) {
		return (
			this.events[t] || (this.events[t] = new wu()), this.events[t].add(n)
		)
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n)
	}
}
class Nm extends RS {
	constructor() {
		super(...arguments), (this.KeyframeResolver = Yp)
	}
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1
	}
	getBaseTargetFromProps(t, n) {
		return t.style ? t.style[n] : void 0
	}
	removeValueFromRenderState(t, { vars: n, style: r }) {
		delete n[t], delete r[t]
	}
}
function LS(e) {
	return window.getComputedStyle(e)
}
class VS extends Nm {
	constructor() {
		super(...arguments),
			(this.type = 'html'),
			(this.applyWillChange = !0),
			(this.renderInstance = kp)
	}
	readValueFromInstance(t, n) {
		if (ln.has(n)) {
			const r = du(n)
			return (r && r.default) || 0
		} else {
			const r = LS(t),
				i = (yp(n) ? r.getPropertyValue(n) : r[n]) || 0
			return typeof i == 'string' ? i.trim() : i
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: n }) {
		return Pm(t, n)
	}
	build(t, n, r) {
		ru(t, n, r.transformTemplate)
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return lu(t, n, r)
	}
	handleChildMotionValue() {
		this.childSubscription &&
			(this.childSubscription(), delete this.childSubscription)
		const { children: t } = this.props
		Ce(t) &&
			(this.childSubscription = t.on('change', (n) => {
				this.current && (this.current.textContent = `${n}`)
			}))
	}
}
class OS extends Nm {
	constructor() {
		super(...arguments),
			(this.type = 'svg'),
			(this.isSVGTag = !1),
			(this.measureInstanceViewportBox = ae)
	}
	getBaseTargetFromProps(t, n) {
		return t[n]
	}
	readValueFromInstance(t, n) {
		if (ln.has(n)) {
			const r = du(n)
			return (r && r.default) || 0
		}
		return (n = Cp.has(n) ? n : Qs(n)), t.getAttribute(n)
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return Ep(t, n, r)
	}
	build(t, n, r) {
		su(t, n, this.isSVGTag, r.transformTemplate)
	}
	renderInstance(t, n, r, i) {
		Tp(t, n, r, i)
	}
	mount(t) {
		;(this.isSVGTag = ou(t.tagName)), super.mount(t)
	}
}
const NS = (e, t) =>
		eu(e) ? new OS(t) : new VS(t, { allowProjection: e !== O.Fragment }),
	_S = { layout: { ProjectionNode: Vm, MeasureLayout: Cm } },
	jS = { ...mw, ...T0, ...CS, ..._S },
	FS = Vy((e, t) => d0(e, t, jS, NS)),
	IS = [
		{ src: 'card-back-1.svg', level: 'card-backs', matched: !1 },
		{ src: 'card-back-2.svg', level: 'card-backs', matched: !1 },
		{ src: 'card-back-3.svg', level: 'card-backs', matched: !1 },
		{ src: 'card-back-4.svg', level: 'card-backs', matched: !1 },
		{ src: 'card-back-5.svg', level: 'card-backs', matched: !1 },
	],
	zS = () =>
		N.jsxs('div', {
			className:
				'max-w-screen-sm rounded-md p-space-s space-y-2 text-left',
			children: [
				N.jsx('p', {
					className: 'font-bold leading-snug',
					children: 'Credits',
				}),
				N.jsxs('p', {
					className: 'text-step--1',
					children: [
						'Designer & Developer -',
						' ',
						N.jsx('a', {
							className: 'hover:text-green-100',
							href: 'https://sam-almohanna.com/',
							target: '_blank',
							rel: 'noopener noreferrer',
							children: 'Sam Almohanna',
						}),
					],
				}),
				N.jsxs('p', {
					className: 'text-step--1',
					children: [
						'Geometric and Organic shapes by',
						' ',
						N.jsx('a', {
							className: 'hover:text-green-100',
							href: 'https://streamlinehq.com/',
							target: '_blank',
							rel: 'noopener noreferrer',
							children: 'https://streamlinehq.com/',
						}),
					],
				}),
			],
		}),
	BS = ({ onClose: e, onCardBackChange: t }) => {
		const [n, r] = O.useState(null),
			i = (o) => {
				r(o), t(o)
			},
			s = () => {
				e()
			}
		return N.jsx('div', {
			className:
				'fixed inset-0 bg-black-300/50 backdrop-blur-sm flex flex-col justify-center items-center',
			children: N.jsx('div', {
				className:
					'max-w-screen-sm md:p-space-2xl p-space-m rounded-lg bg-black-200 border-2 border-white-100/75',
				children: N.jsxs('div', {
					className:
						'flex flex-col gap-8 justify-center mx-auto text-center h-full',
					children: [
						N.jsxs('p', {
							className: 'text-step-3 font-black leading-none',
							children: [
								'Settings',
								N.jsx('span', {
									className: '',
									children: '🔧',
								}),
							],
						}),
						N.jsxs('div', {
							className:
								'rounded-md px-space-s py-space-l space-y-4 bg-black-300/50 text-left',
							children: [
								N.jsx('p', {
									className: 'text-step--1 font-bold',
									children: 'Card Back Design:',
								}),
								N.jsx('div', {
									className: 'flex flex-wrap gap-4',
									children: IS.map((o) =>
										N.jsx(
											'div',
											{
												className: `rounded-lg cursor-pointer ${
													n === o.src
														? 'border-white-100'
														: 'border-transparent'
												}`,
												onClick: () => i(o.src),
												children: N.jsx('img', {
													src: `assets/card-backs/${o.src}`,
													alt: 'Card Back Design',
													className:
														'w-16 object-cover rounded-lg',
												}),
											},
											o.src
										)
									),
								}),
							],
						}),
						N.jsx('button', {
							className:
								'font-black px-space-s py-space-2xs rounded-lg border-2 border-white-100/75 hover:border-white-100 transition-all duration-300 ease-in-out',
							onClick: s,
							children: 'Back to Game',
						}),
						N.jsx(zS, {}),
					],
				}),
			}),
		})
	}
function US() {
	const [e, t] = O.useState(Oo),
		[n, r] = O.useState([]),
		[i, s] = O.useState(0),
		[o, l] = O.useState(null),
		[a, u] = O.useState(null),
		[c, f] = O.useState(!1),
		[d, v] = O.useState(!1),
		[g, y] = O.useState(!1),
		[k, p] = O.useState({ width: 0, height: 0 }),
		[h, m] = O.useState('card-back-5.svg'),
		w = (F) => {
			m(F)
		},
		x = () => {
			y(!1)
		},
		A = () => {
			p({ width: window.innerWidth, height: window.innerHeight })
		},
		D = () => {
			const F = e.sort(() => 0.5 - Math.random()).slice(0, 12),
				ce = [...F, ...F]
					.sort(() => Math.random() - 0.5)
					.map((qe) => ({ ...qe, id: Math.random(), matched: !1 }))
			l(null), u(null), r(ce), s(0), v(!1)
		},
		E = (F) => {
			F.id !== (o == null ? void 0 : o.id) && (o ? u(F) : l(F))
		},
		B = (F) => {
			switch (F.target.value) {
				case 'one':
					t(Oo)
					break
				case 'two':
					t(cy)
					break
				case 'three':
					t(fy)
					break
				default:
					t(Oo)
			}
		}
	O.useEffect(() => {
		window.onresize = () => A()
	}, [k]),
		O.useEffect(() => {
			D()
		}, [e]),
		O.useEffect(() => {
			o &&
				a &&
				(f(!0),
				o.src === a.src
					? (r((F) =>
							F.map((ce) =>
								ce.src === o.src ? { ...ce, matched: !0 } : ce
							)
					  ),
					  _())
					: setTimeout(() => _(), 1e3))
		}, [o, a])
	const _ = () => {
		l(null), u(null), s((F) => F + 1), f(!1)
	}
	return (
		O.useEffect(() => {
			D()
		}, []),
		O.useEffect(() => {
			n.length > 0 &&
				n.every((F) => F.matched) &&
				(A(), setTimeout(() => v(!0), 500))
		}, [n]),
		N.jsxs('main', {
			className: 'max-w-screen-2xl mx-auto px-space-s',
			children: [
				N.jsxs('div', {
					className:
						'container flex flex-col md:flex-row md:justify-between gap-4 border-b-2 border-white-100/20 py-space-s',
					children: [
						N.jsxs('div', {
							className: 'pb-6 md:pb-0',
							children: [
								N.jsxs('h1', {
									className: 'text-step-3 space-x-2',
									children: [
										N.jsx('span', {
											className: 'font-black',
											children: 'Eagle Eyes',
										}),
										N.jsxs('span', {
											className:
												'inline-block -scale-x-1',
											children: [' ', '🦅'],
										}),
									],
								}),
								N.jsx('p', {
									children:
										'A memory game for the detail obsessed.',
								}),
							],
						}),
						N.jsxs('div', {
							className:
								' text-white-100 w-full flex md:flex-col md:w-52 justify-between items-end gap-4',
							children: [
								N.jsx('button', {
									className:
										'max-h-12 border-2 border-white-100/60 px-space-s py-space-2xs rounded-lg hover:border-white-100 transition-all duration-300 ease-in-out',
									onClick: () => {
										y(!0)
									},
									children: 'Settings',
								}),
								N.jsxs('div', {
									children: [
										N.jsx('label', {
											htmlFor: 'level',
											className: 'block text-step--1',
											children: 'Level:',
										}),
										N.jsxs('select', {
											id: 'level',
											className:
												'bg-black-300 border-2 border-white-100/60 px-space-s py-space-2xs rounded-lg hover:border-white-100 transition-all duration-300 ease-in-out hover:cursor-pointer',
											onChange: B,
											children: [
												N.jsx('option', {
													className: 'py-space-s',
													value: 'one',
													children:
														'Geometric Shapes',
												}),
												N.jsx('option', {
													value: 'two',
													children: 'Organic Shapes',
												}),
												N.jsx('option', {
													value: 'three',
													children: 'Fonts',
												}),
											],
										}),
									],
								}),
							],
						}),
					],
				}),
				N.jsx('div', {
					className:
						'grid grid-cols-4 lg:grid-cols-8 gap-4 py-space-2xl',
					children:
						n && n.length > 0
							? n.map((F, ce) =>
									N.jsx(
										FS.div,
										{
											initial: {
												opacity: 0,
												translateX: -50,
												translateY: -50,
											},
											animate: {
												opacity: 1,
												translateX: 0,
												translateY: 0,
											},
											transition: {
												duration: 0.12,
												delay: ce * 0.1,
											},
											children: N.jsx(dy, {
												src: F.src,
												level: F.level,
												id: F.id,
												handleChoice: E,
												flipped:
													F.id ===
														(o == null
															? void 0
															: o.id) ||
													F.id ===
														(a == null
															? void 0
															: a.id) ||
													F.matched,
												disabled: c,
												cardBack: h,
												matched: F.matched,
											}),
										},
										F.id
									)
							  )
							: N.jsx('p', {
									className: 'col-span-5 text-center',
									children:
										'Click the "New Game" button to get started!',
							  }),
				}),
				N.jsxs('div', {
					className:
						'flex justify-between items-center fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl py-space-2xs px-space-m bg-black-300/75 backdrop-blur-sm space-x-4 rounded-lg',
					children: [
						N.jsxs('p', {
							className: 'inline text-step-1',
							children: ['Turns: ', i],
						}),
						N.jsx('button', {
							className:
								'bg-green-100/60 text-black-300 font-black px-space-s py-space-2xs rounded-lg hover:bg-green-100 transition-all duration-300 ease-in-out',
							onClick: D,
							children: 'New Game',
						}),
					],
				}),
				d &&
					N.jsxs('div', {
						className:
							'fixed inset-0 bg-black-300/50 backdrop-blur-sm flex flex-col justify-center items-center',
						children: [
							N.jsx(py, { width: k.width, height: k.height }),
							N.jsx('div', {
								className:
									'max-w-screen-sm md:p-space-2xl p-space-m rounded-lg bg-black-200 border-2 border-green-100/75',
								children: N.jsxs('div', {
									className:
										'flex flex-col gap-8 justify-center mx-auto text-center h-full',
									children: [
										N.jsxs('p', {
											className:
												'text-step-3 font-black leading-none',
											children: [
												'Winner Winner',
												N.jsx('span', {
													className: 'text-step-5',
													children: '🐔 🍽',
												}),
											],
										}),
										N.jsxs('div', {
											className:
												'rounded-md px-space-s py-space-l space-y-4 bg-black-300/50',
											children: [
												N.jsx('p', {
													className:
														'text-step--1 font-bold',
													children:
														'Number of Turns:',
												}),
												N.jsx('span', {
													className:
														'inline-block ml-2 p-space-s border-4 border-white-100/75 rounded-md text-step-5 font-black',
													children: i,
												}),
											],
										}),
										N.jsx('button', {
											className:
												'bg-green-100/60 text-black-300 font-black px-space-s py-space-2xs rounded-lg hover:bg-green-100 transition-all duration-300 ease-in-out',
											onClick: () => D(),
											children: 'Play Again',
										}),
									],
								}),
							}),
						],
					}),
				g && N.jsx(BS, { onClose: x, onCardBackChange: w }),
			],
		})
	)
}
Ko.createRoot(document.getElementById('root')).render(
	N.jsx(qm.StrictMode, { children: N.jsx(US, {}) })
)
