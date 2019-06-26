/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../lib/pkg/rustpython_wasm_bg.wasm": function() {
/******/ 			return {
/******/ 				"./rustpython_wasm": {
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_null": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_is_null"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_virtualmachine_new": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_virtualmachine_new"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_forget": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_cb_forget"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__widl_f_query_selector_Document": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_query_selector_Document"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_get_attribute_Element": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_get_attribute_Element"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_set_attribute_Element": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_set_attribute_Element"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__widl_f_set_Headers": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_set_Headers"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__widl_f_new_with_str_and_init_Request": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_new_with_str_and_init_Request"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_headers_Request": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_headers_Request"](p0i32);
/******/ 					},
/******/ 					"__widl_instanceof_Response": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_instanceof_Response"](p0i32);
/******/ 					},
/******/ 					"__widl_f_array_buffer_Response": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_array_buffer_Response"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_json_Response": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_json_Response"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_text_Response": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_text_Response"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_instanceof_Window": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_instanceof_Window"](p0i32);
/******/ 					},
/******/ 					"__widl_f_alert_with_message_Window": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_alert_with_message_Window"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_cancel_animation_frame_Window": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_cancel_animation_frame_Window"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_confirm_with_message_Window": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_confirm_with_message_Window"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_prompt_with_message_Window": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_prompt_with_message_Window"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__widl_f_prompt_with_message_and_default_Window": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_prompt_with_message_and_default_Window"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32);
/******/ 					},
/******/ 					"__widl_f_request_animation_frame_Window": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_request_animation_frame_Window"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_document_Window": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_document_Window"](p0i32);
/******/ 					},
/******/ 					"__widl_f_fetch_with_request_Window": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_fetch_with_request_Window"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_log_": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__widl_f_log_"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_816c11756f2e51ab": function() {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_new_816c11756f2e51ab"]();
/******/ 					},
/******/ 					"__wbg_isArray_9bff3f9d00f36da5": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_isArray_9bff3f9d00f36da5"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_ce2a178eef8f4483": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_push_ce2a178eef8f4483"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_ArrayBuffer_7b79746f789692de": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_instanceof_ArrayBuffer_7b79746f789692de"](p0i32);
/******/ 					},
/******/ 					"__wbg_isView_2a8037d56f09b136": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_isView_2a8037d56f09b136"](p0i32);
/******/ 					},
/******/ 					"__wbg_values_c5ff7b837b3f6830": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_values_c5ff7b837b3f6830"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Error_fdac2ec12870b182": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_instanceof_Error_fdac2ec12870b182"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_832d47172cff7c40": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_new_832d47172cff7c40"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_message_4e7ed1a249b8e785": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_message_4e7ed1a249b8e785"](p0i32);
/******/ 					},
/******/ 					"__wbg_name_da78b12bdfa5ceb1": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_name_da78b12bdfa5ceb1"](p0i32);
/******/ 					},
/******/ 					"__wbg_toString_e8fd6ec59829ff8c": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_toString_e8fd6ec59829ff8c"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_b4526aa2a6db81de": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_newnoargs_b4526aa2a6db81de"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_apply_ccde16c927c5f8be": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_apply_ccde16c927c5f8be"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_call_a7a8823c404228ab": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_call_a7a8823c404228ab"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_call_e6e8911c46484a33": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_call_e6e8911c46484a33"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_next_c004b8a85ecf4b77": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_next_c004b8a85ecf4b77"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_done_178d004be150c0b1": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_done_178d004be150c0b1"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_43d4ee3a28fa5f46": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_value_43d4ee3a28fa5f46"](p0i32);
/******/ 					},
/******/ 					"__wbg_entries_f0621d88037d7e39": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_entries_f0621d88037d7e39"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_7fc81df805aaefb0": function() {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_new_7fc81df805aaefb0"]();
/******/ 					},
/******/ 					"__wbg_toString_4964e720c1c2dd0b": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_toString_4964e720c1c2dd0b"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_0e18fff561c9c269": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_new_0e18fff561c9c269"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_get_44104914d11d4644": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_get_44104914d11d4644"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_set_4c196bb000d34157": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_set_4c196bb000d34157"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_new_89034170295509fb": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_new_89034170295509fb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_d558b6572c1b5235": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_new_d558b6572c1b5235"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_parse_79a81072d7862d78": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_parse_79a81072d7862d78"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_stringify_93f1cd10368e2438": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_stringify_93f1cd10368e2438"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Promise_aedc16bc7659e950": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_instanceof_Promise_aedc16bc7659e950"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_7440491cc5e719b8": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_new_7440491cc5e719b8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_ec1f85083faa6c47": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_resolve_ec1f85083faa6c47"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_f1813c1d50cb0b3d": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_then_f1813c1d50cb0b3d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_37317e38a820e922": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_then_37317e38a820e922"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_1a20aebd7054d9e3": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_new_1a20aebd7054d9e3"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_50f030092954587d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_newwithbyteoffsetandlength_50f030092954587d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_7f0f38c0fbbca6e0": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_buffer_7f0f38c0fbbca6e0"](p0i32);
/******/ 					},
/******/ 					"__wbg_slice_e7bdbd0e93c5ab13": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_slice_e7bdbd0e93c5ab13"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_f7d8598626eb36d7": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_length_f7d8598626eb36d7"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_f87b1d3d2c63a317": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_set_f87b1d3d2c63a317"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_0b074655b6f45c52": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_new_0b074655b6f45c52"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_buffer_859770b344faa681": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbg_buffer_859770b344faa681"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1618": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_closure_wrapper1618"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1620": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_closure_wrapper1620"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper3105": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../lib/pkg/rustpython_wasm.js"].exports["__wbindgen_closure_wrapper3105"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["../lib/pkg/rustpython_wasm_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../lib/pkg/rustpython_wasm_bg.wasm":"ba809633fed94322bc52"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/xterm/lib/xterm.css":
/*!******************************************!*\
  !*** ./node_modules/xterm/lib/xterm.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/xterm/lib/xterm.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var xterm_lib_xterm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xterm/lib/xterm.css */ \"./node_modules/xterm/lib/xterm.css\");\n/* harmony import */ var xterm_lib_xterm_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xterm_lib_xterm_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `index.js` file does the single async import, so\n// that no one else needs to worry about it again.\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./main.js */ \"./src/main.js\")).catch(e => {\n    console.error('Error importing `main.js`:', e);\n    document.getElementById('error').textContent = e;\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });