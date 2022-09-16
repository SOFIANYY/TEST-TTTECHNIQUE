// Generated by CoffeeScript 1.12.7
(function() {
  var EventSourceReceiver, transport, utils,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  utils = require('./utils');

  transport = require('./transport');

  EventSourceReceiver = (function(superClass) {
    extend(EventSourceReceiver, superClass);

    function EventSourceReceiver() {
      return EventSourceReceiver.__super__.constructor.apply(this, arguments);
    }

    EventSourceReceiver.prototype.protocol = "eventsource";

    EventSourceReceiver.prototype.doSendFrame = function(payload) {
      var data;
      data = ['data: ', utils.escape_selected(payload, '\r\n\x00'), '\r\n\r\n'];
      return EventSourceReceiver.__super__.doSendFrame.call(this, data.join(''));
    };

    return EventSourceReceiver;

  })(transport.ResponseReceiver);

  exports.app = {
    eventsource: function(req, res) {
      var headers, origin;
      if (!req.headers['origin'] || req.headers['origin'] === 'null') {
        origin = '*';
      } else {
        origin = req.headers['origin'];
        res.setHeader('Access-Control-Allow-Credentials', 'true');
      }
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
      headers = req.headers['access-control-request-headers'];
      if (headers) {
        res.setHeader('Access-Control-Allow-Headers', headers);
      }
      res.writeHead(200);
      res.write('\r\n');
      transport.register(req, this, new EventSourceReceiver(req, res, this.options));
      return true;
    }
  };

}).call(this);
