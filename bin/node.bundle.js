module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/home/kb0304/ws/viasat/botpress/botpress-channel-rocketchat";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _bluebird = __webpack_require__(0);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(3),
    driver = _require.driver;

var create = function create(obj) {
  var resolve = null;
  var reject = null;
  var promise = new _bluebird2.default(function (r, rj) {
    resolve = r;
    reject = rj;
  });

  var messageId = new Date().toISOString() + Math.random();

  var newEvent = Object.assign({
    _promise: promise,
    _resolve: resolve,
    _reject: reject,
    __id: messageId
  }, obj);

  return newEvent;
};

var validateText = function validateText(text) {
  if (typeof text !== "string") {
    throw new Error("Text must be a string.");
  }
};

var validateAttachments = function validateAttachments(attachments) {
  if ((typeof attachments === "undefined" ? "undefined" : _typeof(attachments)) !== "object") {
    throw new Error("Expected attachments type to be an object");
  }
};

var createText = function createText(channelId, text) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  validateText(text);
  return create({
    platform: "rocketchat",
    type: "text",
    text: text,
    raw: {
      channelId: channelId,
      options: options
    }
  });
};

var createAttachments = function createAttachments(channelId, attachments) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  validateAttachments(attachments);

  return create({
    platform: "rocketchat",
    type: "attachments",
    text: "App sent an attachments",
    raw: {
      channelId: channelId,
      attachments: attachments,
      options: options
    }
  });
};

var createReaction = function createReaction(name) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return create({
    platform: "rocketchat",
    type: "reaction",
    text: "App sent a reaction",
    raw: {
      name: name,
      options: options
    }
  });
};

// TODO
var livechatTransfer = function livechatTransfer(name) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return create({
    platform: "rocketchat",
    type: "livechat_transfer",
    text: "transfer livechat",
    raw: {
      name: name,
      options: options
    }
  });
};

var callMethod = function callMethod(method) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return driver.callMethod(method, args);
};

module.exports = {
  createText: createText,
  createAttachments: createAttachments,
  createReaction: createReaction,
  livechatTransfer: livechatTransfer,
  callMethod: callMethod
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@rocket.chat/sdk");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _bluebird = __webpack_require__(0);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _actions = __webpack_require__(2);

var _actions2 = _interopRequireDefault(_actions);

var _outgoing = __webpack_require__(6);

var _outgoing2 = _interopRequireDefault(_outgoing);

var _rocketchat = __webpack_require__(7);

var _rocketchat2 = _interopRequireDefault(_rocketchat);

var _umm = __webpack_require__(8);

var _umm2 = _interopRequireDefault(_umm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var rocketchat = null;

var outgoingMiddleware = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(event.platform !== "rocketchat")) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", next());

          case 2:
            if (_outgoing2.default[event.type]) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", next("Unsupported event type: " + event.type));

          case 4:
            _context.next = 6;
            return _outgoing2.default[event.type](event, next, rocketchat);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function outgoingMiddleware(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  config: {
    ROCKETCHAT_USER: {
      type: "string",
      default: "",
      env: "ROCKETCHAT_USERNAME"
    },
    ROCKETCHAT_PASSWORD: {
      type: "string",
      default: "",
      env: "ROCKETCHAT_PASSWORD"
    },
    ROCKETCHAT_URL: { type: "string", default: "", env: "ROCKETCHAT_HOST" },
    ROCKETCHAT_USE_SSL: {
      type: "string",
      default: "",
      env: "ROCKETCHAT_USESSL"
    },
    ROCKETCHAT_ROOM: {
      type: "string",
      default: "",
      env: "ROCKETCHAT_SUBSCRIBETO"
    },
    scope: {
      type: "string",
      default: "admin,bot,chat:write:bot,commands,identify,incoming-webhook,channels:read",
      env: "ROCKETCHAT_SCOPE"
    }
  },

  init: function init(bp) {
    bp.middlewares.register({
      name: "rocketchat.sendMessages",
      type: "outgoing",
      order: 100,
      handler: outgoingMiddleware,
      module: "botpress-channel-rocketchat",
      description: "Sends messages to Rocket.Chat"
    });

    bp.rocketchat = {};
    _lodash2.default.forIn(_actions2.default, function (action, name) {
      bp.rocketchat[name] = _actions2.default[name];
      var sendName = name.replace(/^create/, "send");
      bp.rocketchat[sendName] = _bluebird2.default.method(function () {
        var msg = action.apply(this, arguments);
        return bp.middlewares.sendOutgoing(msg);
      });
    });
    (0, _umm2.default)(bp);
  },


  ready: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(bp, configurator) {
      var config;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return configurator.loadAll();

            case 2:
              config = _context2.sent;


              rocketchat = new _rocketchat2.default(bp, config);
              _context2.next = 6;
              return rocketchat.connect(bp);

            case 6:
              return _context2.abrupt("return", rocketchat.listen(bp));

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function ready(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return ready;
  }()
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var handlePromise = function handlePromise(event, next, promise) {
  return promise.then(function (res) {
    //console.log('WE ARE GOING NEXT PROMISE')
    next();
    event._resolve && event._resolve();
    return res;
  }).catch(function (err) {
    console.log("THERE WAS AN ERROR");
    next(err);
    event._reject && event._reject(err);
    throw err;
  });
};

var handleText = function handleText(event, next, rocketchat) {
  if (event.platform !== "rocketchat" || event.type !== "text") {
    return next();
  }
  //console.log("HANDLE TEXT")
  var text = event.text;
  var options = {};

  return handlePromise(event, next, rocketchat.sendMessage(text, options, event));
};

var handleAttachments = function handleAttachments(event, next, rocketchat) {
  if (event.platform !== "rocketchat" || event.type !== "attachments") {
    return next();
  }

  //console.log("HANDLE TEXT")
  var msg = {
    attachments: event.raw.attachments || []
  };
  var options = {};

  return handlePromise(event, next, rocketchat.sendMessage(msg, options, event));
};

module.exports = {
  text: handleText,
  attachments: handleAttachments
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = __webpack_require__(0);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _bluebird2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _bluebird2.default.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(3),
    driver = _require.driver;

var RocketChat = function () {
  function RocketChat(bp, config) {
    _classCallCheck(this, RocketChat);

    if (!bp || !config) {
      throw new Error("You need to specify botpress and config");
    }

    this.config = config;
    this.connected = false;
  }

  _createClass(RocketChat, [{
    key: "connect",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var handleChannel, useSSL;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                handleChannel = function handleChannel(channelList) {
                  if (channelList !== undefined) {
                    channelList = channelList.replace(/[^\w\,._]/gi, "").toLowerCase();
                    if (channelList.match(",")) {
                      channelList = channelList.split(",");
                    } else if (channelList !== "") {
                      channelList = [channelList];
                    } else {
                      channelList = [];
                    }
                  }

                  return channelList;
                };

                _context.prev = 1;
                useSSL = this.config.ROCKETCHAT_USE_SSL === "true";
                _context.next = 5;
                return driver.connect({
                  host: this.config.ROCKETCHAT_URL,
                  useSsl: useSSL
                });

              case 5:
                _context.next = 7;
                return driver.login({
                  username: this.config.ROCKETCHAT_USER,
                  password: this.config.ROCKETCHAT_PASSWORD
                });

              case 7:
                _context.next = 9;
                return driver.joinRooms(handleChannel(this.config.ROCKETCHAT_ROOM));

              case 9:
                _context.next = 11;
                return driver.subscribeToMessages();

              case 11:
                this.connected = true;
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](1);

                console.log(_context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 14]]);
      }));

      function connect() {
        return _ref.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "listen",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(bp) {
        // Insert new user to db
        var getOrCreateUser = function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(message) {
            var userId, id, existingUser, newUser;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //console.log('GETORCREATEUSER')
                    userId = message.u._id;
                    id = "rocketchat:" + userId;
                    _context2.next = 4;
                    return bp.db.get().then(function (knex) {
                      return knex("users").where("id", id);
                    }).then(function (users) {
                      return users[0];
                    });

                  case 4:
                    existingUser = _context2.sent;

                    if (!existingUser) {
                      _context2.next = 10;
                      break;
                    }

                    existingUser.id = userId;
                    return _context2.abrupt("return", existingUser);

                  case 10:
                    newUser = {
                      id: id,
                      userId: userId,
                      username: message.u.username,
                      platform: "rocketchat",
                      first_name: message.u.name,
                      last_name: "",
                      gender: "",
                      timezone: null,
                      picture_url: null,
                      locale: null,
                      created_on: "",
                      number: userId
                    };
                    _context2.next = 13;
                    return bp.db.saveUser(newUser);

                  case 13:
                    return _context2.abrupt("return", newUser);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function getOrCreateUser(_x2) {
            return _ref3.apply(this, arguments);
          };
        }();

        var options;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log("LISTEN TRIGGERED");
                options = {
                  dm: true,
                  livechat: true,
                  edited: true
                };
                return _context4.abrupt("return", driver.respondToMessages(function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err, message, meta) {
                    var user;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (!(message.t === undefined)) {
                              _context3.next = 6;
                              break;
                            }

                            _context3.next = 3;
                            return getOrCreateUser(message);

                          case 3:
                            user = _context3.sent;
                            _context3.next = 6;
                            return bp.middlewares.sendIncoming({
                              platform: "rocketchat",
                              type: "message",
                              text: message.msg,
                              user: user,
                              channel: message.rid,
                              ts: message.ts.$date,
                              direct: false,
                              roomType: meta.roomType,
                              raw: message
                            });

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x3, _x4, _x5) {
                    return _ref4.apply(this, arguments);
                  };
                }(), options));

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function listen(_x) {
        return _ref2.apply(this, arguments);
      }

      return listen;
    }()
  }, {
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(msg, options, event) {
      var messageType = event.raw.options.roomType;
      var channelId = event.raw.channelId;
      var username = event.raw.options.user.username;
      if (messageType !== undefined) {
        if (messageType == "c") {
          return driver.sendToRoomId(msg, channelId);
        } else if (messageType == "p") {
          return driver.sendToRoomId(msg, channelId);
        } else if (messageType == "d") {
          return driver.sendDirectToUser(msg, username);
        } else if (messageType == "l") {
          return driver.sendToRoomId(msg, channelId);
        } else {
          console.log("ERROR WHILE SENDING MESSAGE");
        }
      } else {
        console.log("MESSAGE TYPE UNDEFINED");
      }
    }
  }, {
    key: "sendUpdateText",
    value: function sendUpdateText(ts, channelId, text) {
      return _bluebird2.default.fromCallback(function () {
        driver.sendToRoomId(text, channelId, {});
      });
    }
  }, {
    key: "isConnected",
    value: function isConnected() {
      return this.connected;
    }
  }, {
    key: "disconnect",
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return driver.disconnect();

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function disconnect() {
        return _ref5.apply(this, arguments);
      }

      return disconnect;
    }()
  }]);

  return RocketChat;
}();

module.exports = RocketChat;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _util = __webpack_require__(9);

var _util2 = _interopRequireDefault(_util);

var _lodash = __webpack_require__(1);

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = __webpack_require__(2);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getChannelId(event) {
  var channelId = event.channel;
  if (!channelId) {
    throw new Error("Could not find channelId in the incoming event.");
  }

  return channelId;
}

function getMessageTs(event) {
  var ts = _lodash2.default.get(event, "ts") || _lodash2.default.get(event, "raw.ts");

  if (!ts) {
    throw new Error("Could not find message timestamp (ts) in the incoming event.");
  }

  return ts;
}

function _processOutgoing(_ref) {
  var event = _ref.event,
      blocName = _ref.blocName,
      instruction = _ref.instruction;

  var ins = Object.assign({}, instruction); // Create a shallow copy of the instruction

  ////////
  // PRE-PROCESSING
  ////////

  var optionsList = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = optionsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;

      delete ins[prop];
    }

    /////////
    /// Processing
    /////////
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (!_lodash2.default.isNil(instruction.attachments)) {
    return _actions2.default.createAttachments(getChannelId(event), instruction.attachments, instruction.options);
  }

  if (!_lodash2.default.isNil(instruction.attachment)) {
    return _actions2.default.createAttachments(getChannelId(event), [instruction.attachment], instruction.options);
  }

  if (!_lodash2.default.isNil(instruction.text)) {
    return _actions2.default.createText(getChannelId(event), instruction.text, event);
  }

  if (!_lodash2.default.isNil(instruction.reaction)) {
    return _actions2.default.createReaction(instruction.reaction, Object.assign({}, {
      timestamp: getMessageTs(event),
      channel: getChannelId(event)
    }, instruction.options));
  }

  ////////////
  /// POST-PROCESSING
  ////////////

  // Nothing to post-process yet

  ////////////
  /// INVALID INSTRUCTION
  ////////////

  var strRep = _util2.default.inspect(instruction, false, 1);
  throw new Error("Unrecognized instruction on RocketChat in bloc '" + blocName + "': " + strRep);
}

module.exports = function (bp) {
  var _$at = _lodash2.default.at(bp, ["umm", "umm.registerConnector"]),
      _$at2 = _slicedToArray(_$at, 2),
      umm = _$at2[0],
      registerConnector = _$at2[1];

  umm && registerConnector && registerConnector({
    platform: "rocketchat",
    processOutgoing: function processOutgoing(args) {
      return _processOutgoing(Object.assign({}, args, { bp: bp }));
    },
    templates: []
  });
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })
/******/ ]);
//# sourceMappingURL=node.bundle.js.map