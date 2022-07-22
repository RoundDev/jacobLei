(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n   background: #f7f7f7;\n }\n.steps {\n  margin-top: -41px;\n  display: inline-block;\n  float: right;\n  font-size: 16px\n}\n.step {\n  float: left;\n  background: white;\n  padding: 7px 13px;\n  border-radius: 1px;\n  text-align: center;\n  width: 100px;\n  position: relative\n}\n.step_line {\n  margin: 0;\n  width: 0;\n  height: 0;\n  border-left: 16px solid #fff;\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n  z-index: 1008;\n  position: absolute;\n  left: 99px;\n  top: 1px\n}\n.step_line.backline {\n  border-left: 20px solid #f7f7f7;\n  border-top: 20px solid transparent;\n  border-bottom: 20px solid transparent;\n  z-index: 1006;\n  position: absolute;\n  left: 99px;\n  top: -3px\n}\n.step_complete {\n  background: #357ebd\n}\n.step_complete a.check-bc, .step_complete a.check-bc:hover,.afix-1,.afix-1:hover{\n  color: #eee;\n}\n.step_line.step_complete {\n  background: 0;\n  border-left: 16px solid #357ebd\n}\n.step_thankyou {\n  float: left;\n  background: white;\n  padding: 7px 13px;\n  border-radius: 1px;\n  text-align: center;\n  width: 100px;\n}\n.step.check_step {\n  margin-left: 5px;\n}\n.ch_pp {\n  text-decoration: underline;\n}\n.ch_pp.sip {\n  margin-left: 10px;\n}\n.check-bc,\n.check-bc:hover {\n  color: #222;\n}\n.SuccessField {\n  border-color: #458845 !important;\n  box-shadow: 0 0 7px #9acc9a !important;\n  /*background: #f9f9f9 url(../images/valid.png) no-repeat 98% center !important*/\n}\n.btn-xs{\n  line-height: 28px;\n}\n/*login form*/\n.login-container{\n  margin-top:30px ;\n}\n.login-container input[type=submit] {\n  width: 100%;\n  display: block;\n  margin-bottom: 10px;\n  position: relative;\n}\n.login-container input[type=text], input[type=password] {\n  height: 44px;\n  font-size: 16px;\n  width: 100%;\n  margin-bottom: 10px;\n  -webkit-appearance: none;\n  background: #fff;\n  border: 1px solid #d9d9d9;\n  border-top: 1px solid #c0c0c0;\n  /* border-radius: 2px; */\n  padding: 0 8px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.login-container input[type=text]:hover, input[type=password]:hover {\n  border: 1px solid #b9b9b9;\n  border-top: 1px solid #a0a0a0;\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\n}\n.login-container-submit {\n  /* border: 1px solid #3079ed; */\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0,0,0,0.1);\n  background-color: #357ebd;/*#4d90fe;*/\n  padding: 17px 0px;\n  font-family: roboto;\n  font-size: 14px;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\n}\n.login-container-submit:hover {\n  /* border: 1px solid #2f5bb7; */\n  border: 0px;\n  text-shadow: 0 1px rgba(0,0,0,0.3);\n  background-color: #357ae8;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\n}\n.login-help{\n  font-size: 12px;\n}\n.asterix{\n  /*background:#f9f9f9 url(../images/red_asterisk.png) no-repeat 98% center !important;*/\n}\n/* images*/\nol, ul {\n  list-style: none;\n}\n.hand {\n  cursor: pointer;\n  cursor: pointer;\n}\n.cards{\n  padding-left:0;\n}\n.cards li {\n  transition: all .2s;\n  background-image: url('//assets/img/cc.png');\n  background-position: 0 0;\n  float: left;\n  height: 32px;\n  margin-right: 8px;\n  text-indent: -9999px;\n  width: 51px;\n}\n.cards .mastercard {\n  background-position: -51px 0;\n}\n.cards li {\n  transition: all .2s;\n  background-image: url('//assets/img/cc.png');\n  background-position: 0 0;\n  float: left;\n  height: 32px;\n  margin-right: 8px;\n  text-indent: -9999px;\n  width: 51px;\n}\n.cards .amex {\n  background-position: -102px 0;\n}\n.cards li {\n  transition: all .2s;\n  background-image: url('//assets/img/cc.png');\n  background-position: 0 0;\n  float: left;\n  height: 32px;\n  margin-right: 8px;\n  text-indent: -9999px;\n  width: 51px;\n}\n.cards li:last-child {\n  margin-right: 0;\n}\n/* images end */\n/*\n * BOOTSTRAP\n */\n.container{\n  border: none;\n}\n.panel-footer{\n  background:#fff;\n}\n.btn{\n  border-radius: 1px;\n}\n.btn-sm, .btn-group-sm > .btn{\n  border-radius: 1px;\n}\n.input-sm, .form-horizontal .form-group-sm .form-control{\n  border-radius: 1px;\n}\n.panel-info {\n  border-color: #999;\n}\n.panel-heading {\n  display: inline-block;\n  width: 100%;\n  border-top-left-radius: 1px;\n  border-top-right-radius: 1px;\n}\n.panel {\n  border-radius: 1px;\n}\n.panel-info > .panel-heading {\n  color: #eee;\n  border-color: #999;\n}\n.panel-info > .panel-heading {\n  background-image: linear-gradient(to bottom, #555 0px, #888 100%);\n}\nhr {\n  border-color: #999 -moz-use-text-color -moz-use-text-color;\n}\n.panel-footer {\n  border-bottom-left-radius: 1px;\n  border-bottom-right-radius: 1px;\n  border-top: 1px solid #999;\n}\n.btn-link {\n  color: #888;\n}\nhr{\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n/** MEDIA QUERIES **/\n@media only screen and (max-width: 989px){\n  .span1{\n    margin-bottom: 15px;\n    clear:both;\n  }\n}\n@media only screen and (max-width: 764px){\n  .inverse-1{\n    float:right;\n  }\n}\n@media only screen and (max-width: 586px){\n  .cart-titles{\n    display:none;\n  }\n  .panel {\n    margin-bottom: 1px;\n  }\n}\n.form-control {\n  border-radius: 1px;\n}\n@media only screen and (max-width: 486px){\n  .col-xss-12{\n    width:100%;\n  }\n  .cart-img-show{\n    display: none;\n  }\n  .btn-submit-fix{\n    width:100%;\n  }\n\n}\n.afix {\n  font-size: 11px;\n  font-style: italic;\n}\n.info-row {\n  padding-top: 15px;\n  border-top:3px solid rgba(128, 128, 128, 0.08);;\n}\n.btn-row {\n  padding-bottom: 10px;\n}\np {\n  color: black;\n}\nimg {\n  width: 40%;\n  margin-left: 67%;\n}\n/*@media only screen and (max-width: 777px){*/\n/*.container{*/\n/*overflow-x: hidden;*/\n/*}*/\n/*}*/\n.modal-backdrop {\n  position: inherit !important;\n}\n@media only screen and (max-width: 823px) {\n  .modal-dialog {\n    padding: 25vh 2vh 0vh 2vh !important;\n  }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxvQkFBb0I7RUFDckI7QUFDRjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsUUFBUTtDQUNUO0FBQ0Q7RUFDRSxnQ0FBZ0M7RUFDaEMsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0QyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0NBQ1Y7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0NBQ2hDO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEOztFQUVFLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsaUNBQWlDO0VBR2pDLHVDQUF1QztFQUN2QyxnRkFBZ0Y7Q0FDakY7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUVELGNBQWM7QUFDZDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtDQUM3QjtBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUc5Qiw0Q0FBNEM7Q0FDN0M7QUFFRDtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osWUFBWTtFQUNaLG1DQUFtQztFQUNuQywwQkFBMEIsWUFBWTtFQUN0QyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiw0RkFBNEY7Q0FDN0Y7QUFFRDtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDBCQUEwQjtFQUMxQiw0RkFBNEY7Q0FDN0Y7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsdUZBQXVGO0NBQ3hGO0FBRUQsV0FBVztBQUNYO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFLRSxvQkFBb0I7RUFDcEIsNkNBQTZDO0VBQzdDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSw2QkFBNkI7Q0FDOUI7QUFDRDtFQUtFLG9CQUFvQjtFQUNwQiw2Q0FBNkM7RUFDN0MseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0NBQ2I7QUFDRDtFQUNFLDhCQUE4QjtDQUMvQjtBQUNEO0VBS0Usb0JBQW9CO0VBQ3BCLDZDQUE2QztFQUM3Qyx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0QsZ0JBQWdCO0FBSWhCOztHQUVHO0FBQ0g7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qiw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0Usa0VBQWtFO0NBQ25FO0FBRUQ7RUFDRSwyREFBMkQ7Q0FDNUQ7QUFFRDtFQUNFLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsMkJBQTJCO0NBQzVCO0FBRUQ7RUFDRSxZQUFZO0NBQ2I7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7QUFFRCxxQkFBcUI7QUFDckI7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixXQUFXO0dBQ1o7Q0FDRjtBQUVEO0VBQ0U7SUFDRSxZQUFZO0dBQ2I7Q0FDRjtBQUVEO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7RUFDRDtJQUNFLG1CQUFtQjtHQUNwQjtDQUNGO0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7RUFDRDtJQUNFLFdBQVc7R0FDWjs7Q0FFRjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLCtDQUErQztDQUNoRDtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7Q0FDbEI7QUFDRCw4Q0FBOEM7QUFDNUMsZUFBZTtBQUNiLHVCQUF1QjtBQUN6QixLQUFLO0FBQ1AsS0FBSztBQUVMO0VBQ0UsNkJBQTZCO0NBQzlCO0FBRUQ7RUFDRTtJQUNFLHFDQUFxQztHQUN0QztDQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gfVxuLnN0ZXBzIHtcbiAgbWFyZ2luLXRvcDogLTQxcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE2cHhcbn1cbi5zdGVwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiA3cHggMTNweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlXG59XG4uc3RlcF9saW5lIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMTZweCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAxMDA4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDk5cHg7XG4gIHRvcDogMXB4XG59XG4uc3RlcF9saW5lLmJhY2tsaW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgI2Y3ZjdmNztcbiAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogMTAwNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA5OXB4O1xuICB0b3A6IC0zcHhcbn1cbi5zdGVwX2NvbXBsZXRlIHtcbiAgYmFja2dyb3VuZDogIzM1N2ViZFxufVxuLnN0ZXBfY29tcGxldGUgYS5jaGVjay1iYywgLnN0ZXBfY29tcGxldGUgYS5jaGVjay1iYzpob3ZlciwuYWZpeC0xLC5hZml4LTE6aG92ZXJ7XG4gIGNvbG9yOiAjZWVlO1xufVxuLnN0ZXBfbGluZS5zdGVwX2NvbXBsZXRlIHtcbiAgYmFja2dyb3VuZDogMDtcbiAgYm9yZGVyLWxlZnQ6IDE2cHggc29saWQgIzM1N2ViZFxufVxuLnN0ZXBfdGhhbmt5b3Uge1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDdweCAxM3B4O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLnN0ZXAuY2hlY2tfc3RlcCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY2hfcHAge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5jaF9wcC5zaXAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jaGVjay1iYyxcbi5jaGVjay1iYzpob3ZlciB7XG4gIGNvbG9yOiAjMjIyO1xufVxuLlN1Y2Nlc3NGaWVsZCB7XG4gIGJvcmRlci1jb2xvcjogIzQ1ODg0NSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA3cHggIzlhY2M5YSAhaW1wb3J0YW50O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCA3cHggIzlhY2M5YSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgN3B4ICM5YWNjOWEgIWltcG9ydGFudDtcbiAgLypiYWNrZ3JvdW5kOiAjZjlmOWY5IHVybCguLi9pbWFnZXMvdmFsaWQucG5nKSBuby1yZXBlYXQgOTglIGNlbnRlciAhaW1wb3J0YW50Ki9cbn1cblxuLmJ0bi14c3tcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi8qbG9naW4gZm9ybSovXG4ubG9naW4tY29udGFpbmVye1xuICBtYXJnaW4tdG9wOjMwcHggO1xufVxuLmxvZ2luLWNvbnRhaW5lciBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIGhlaWdodDogNDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2MwYzBjMDtcbiAgLyogYm9yZGVyLXJhZGl1czogMnB4OyAqL1xuICBwYWRkaW5nOiAwIDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubG9naW4tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF06aG92ZXIsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I5YjliOTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhMGEwYTA7XG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4ubG9naW4tY29udGFpbmVyLXN1Ym1pdCB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICMzMDc5ZWQ7ICovXG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2ViZDsvKiM0ZDkwZmU7Ki9cbiAgcGFkZGluZzogMTdweCAwcHg7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCAxMDAlLCAgIGZyb20oIzRkOTBmZSksIHRvKCM0Nzg3ZWQpKTsgKi9cbn1cblxuLmxvZ2luLWNvbnRhaW5lci1zdWJtaXQ6aG92ZXIge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjMmY1YmI3OyAqL1xuICBib3JkZXI6IDBweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1N2FlODtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMCAxMDAlLCAgIGZyb20oIzRkOTBmZSksIHRvKCMzNTdhZTgpKTsgKi9cbn1cblxuLmxvZ2luLWhlbHB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFzdGVyaXh7XG4gIC8qYmFja2dyb3VuZDojZjlmOWY5IHVybCguLi9pbWFnZXMvcmVkX2FzdGVyaXNrLnBuZykgbm8tcmVwZWF0IDk4JSBjZW50ZXIgIWltcG9ydGFudDsqL1xufVxuXG4vKiBpbWFnZXMqL1xub2wsIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5oYW5kIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZHN7XG4gIHBhZGRpbmctbGVmdDowO1xufVxuLmNhcmRzIGxpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy8vYXNzZXRzL2ltZy9jYy5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gIHdpZHRoOiA1MXB4O1xufVxuLmNhcmRzIC5tYXN0ZXJjYXJkIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTUxcHggMDtcbn1cbi5jYXJkcyBsaSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvL2Fzc2V0cy9pbWcvY2MucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xuICB3aWR0aDogNTFweDtcbn1cbi5jYXJkcyAuYW1leCB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMDJweCAwO1xufVxuLmNhcmRzIGxpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgLjJzO1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy8vYXNzZXRzL2ltZy9jYy5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XG4gIHdpZHRoOiA1MXB4O1xufVxuLmNhcmRzIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4vKiBpbWFnZXMgZW5kICovXG5cblxuXG4vKlxuICogQk9PVFNUUkFQXG4gKi9cbi5jb250YWluZXJ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5wYW5lbC1mb290ZXJ7XG4gIGJhY2tncm91bmQ6I2ZmZjtcbn1cbi5idG57XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbn1cbi5idG4tc20sIC5idG4tZ3JvdXAtc20gPiAuYnRue1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG4uaW5wdXQtc20sIC5mb3JtLWhvcml6b250YWwgLmZvcm0tZ3JvdXAtc20gLmZvcm0tY29udHJvbHtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xufVxuXG4ucGFuZWwtaW5mbyB7XG4gIGJvcmRlci1jb2xvcjogIzk5OTtcbn1cblxuLnBhbmVsLWhlYWRpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcHg7XG59XG4ucGFuZWwge1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG4ucGFuZWwtaW5mbyA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICNlZWU7XG4gIGJvcmRlci1jb2xvcjogIzk5OTtcbn1cbi5wYW5lbC1pbmZvID4gLnBhbmVsLWhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNTU1IDBweCwgIzg4OCAxMDAlKTtcbn1cblxuaHIge1xuICBib3JkZXItY29sb3I6ICM5OTkgLW1vei11c2UtdGV4dC1jb2xvciAtbW96LXVzZS10ZXh0LWNvbG9yO1xufVxuXG4ucGFuZWwtZm9vdGVyIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5OTtcbn1cblxuLmJ0bi1saW5rIHtcbiAgY29sb3I6ICM4ODg7XG59XG5cbmhye1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4vKiogTUVESUEgUVVFUklFUyAqKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTg5cHgpe1xuICAuc3BhbjF7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBjbGVhcjpib3RoO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY0cHgpe1xuICAuaW52ZXJzZS0xe1xuICAgIGZsb2F0OnJpZ2h0O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTg2cHgpe1xuICAuY2FydC10aXRsZXN7XG4gICAgZGlzcGxheTpub25lO1xuICB9XG4gIC5wYW5lbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICB9XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDg2cHgpe1xuICAuY29sLXhzcy0xMntcbiAgICB3aWR0aDoxMDAlO1xuICB9XG4gIC5jYXJ0LWltZy1zaG93e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJ0bi1zdWJtaXQtZml4e1xuICAgIHdpZHRoOjEwMCU7XG4gIH1cblxufVxuLmFmaXgge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5pbmZvLXJvdyB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBib3JkZXItdG9wOjNweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMDgpOztcbn1cbi5idG4tcm93IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5wIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuaW1nIHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLWxlZnQ6IDY3JTtcbn1cbi8qQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzdweCl7Ki9cbiAgLyouY29udGFpbmVyeyovXG4gICAgLypvdmVyZmxvdy14OiBoaWRkZW47Ki9cbiAgLyp9Ki9cbi8qfSovXG5cbi5tb2RhbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIzcHgpIHtcbiAgLm1vZGFsLWRpYWxvZyB7XG4gICAgcGFkZGluZzogMjV2aCAydmggMHZoIDJ2aCAhaW1wb3J0YW50O1xuICB9XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"home\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"50\">\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n</body>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'JacobLei';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/maintenance/maintenance.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./properties/properties.component */ "./src/app/properties/properties.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./application/application.component */ "./src/app/application/application.component.ts");
/* harmony import */ var _owners_owners_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./owners/owners.component */ "./src/app/owners/owners.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./notice/notice.component */ "./src/app/notice/notice.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./single/single.component */ "./src/app/single/single.component.ts");
/* harmony import */ var _multi_multi_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./multi/multi.component */ "./src/app/multi/multi.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// import {FormResolver} from './payment/form-resolver.service';
// import {loadafter} from '../shared/js/loadafter.js';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__["PaymentComponent"],
                _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_9__["MaintenanceComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_11__["CarouselComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"],
                _properties_properties_component__WEBPACK_IMPORTED_MODULE_13__["PropertiesComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _application_application_component__WEBPACK_IMPORTED_MODULE_15__["ApplicationComponent"],
                _owners_owners_component__WEBPACK_IMPORTED_MODULE_16__["OwnersComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _notice_notice_component__WEBPACK_IMPORTED_MODULE_18__["NoticeComponent"],
                _single_single_component__WEBPACK_IMPORTED_MODULE_21__["SingleComponent"],
                _multi_multi_component__WEBPACK_IMPORTED_MODULE_22__["MultiComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_1__["TextMaskModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            ],
            providers: [_app_routing__WEBPACK_IMPORTED_MODULE_4__["appRoutingProviders"], _app_service__WEBPACK_IMPORTED_MODULE_19__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _properties_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/properties.component */ "./src/app/properties/properties.component.ts");
/* harmony import */ var _owners_owners_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owners/owners.component */ "./src/app/owners/owners.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maintenance/maintenance.component */ "./src/app/maintenance/maintenance.component.ts");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notice/notice.component */ "./src/app/notice/notice.component.ts");
/* harmony import */ var _single_single_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./single/single.component */ "./src/app/single/single.component.ts");
/* harmony import */ var _multi_multi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./multi/multi.component */ "./src/app/multi/multi.component.ts");











// import {FormResolver} from './payment/form-resolver.service';
var appRoutes = [
    {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    },
    {
        path: 'maintenance',
        component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_7__["MaintenanceComponent"]
    },
    {
        path: 'payment',
        component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_6__["PaymentComponent"],
    },
    {
        path: 'owners',
        component: _owners_owners_component__WEBPACK_IMPORTED_MODULE_4__["OwnersComponent"]
    },
    {
        path: 'home',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    },
    {
        path: 'services',
        component: _services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"]
    },
    {
        path: 'properties',
        component: _properties_properties_component__WEBPACK_IMPORTED_MODULE_3__["PropertiesComponent"]
    },
    // {
    //   path: 'application',
    //   component: ApplicationComponent
    // },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    },
    {
        path: 'notice',
        component: _notice_notice_component__WEBPACK_IMPORTED_MODULE_8__["NoticeComponent"]
    },
    {
        path: 'single',
        component: _single_single_component__WEBPACK_IMPORTED_MODULE_9__["SingleComponent"]
    },
    {
        path: 'multi',
        component: _multi_multi_component__WEBPACK_IMPORTED_MODULE_10__["MultiComponent"]
    }
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { scrollPositionRestoration: 'enabled' });


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this._baseUrl = window.location.origin;
    }
    AppService.prototype.sendMaintEmail = function (data) {
        console.log('in servcie', data);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this._baseUrl + '/api/maintemail', data, httpOptions).catch(this.handleErrorObservable);
    };
    AppService.prototype.sendContacEmail = function (data) {
        console.log('in servcie', data);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this._baseUrl + '/api/contactemail', data, httpOptions).catch(this.handleErrorObservable);
    };
    AppService.prototype.sendNoticeEmail = function (data) {
        console.log('in servcie', data);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this._baseUrl + '/api/noticeemail', data, httpOptions).catch(this.handleErrorObservable);
    };
    AppService.prototype.sendPayment = function (data) {
        console.log('in servcie', data);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this._baseUrl + '/api/sendPayment', data, httpOptions).catch(this.handleErrorObservable);
    };
    AppService.prototype.sendUserPaymentEmail = function (data) {
        console.log('in servcie', data);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this._baseUrl + '/api/paymentEmail', data, httpOptions).catch(this.handleErrorObservable);
    };
    AppService.prototype.sendAdminPaymentEmail = function (data) {
        console.log('in servcie', data);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this._baseUrl + '/api/paymentConfirmation', data, httpOptions).catch(this.handleErrorObservable);
    };
    AppService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.message || error);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/application/application.component.css":
/*!*******************************************************!*\
  !*** ./src/app/application/application.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 486px){\n  .padding {\n    padding-bottom: 5%;\n  }\n}\nbody {\n  -webkit-transform: translate3d(0, 0, 0);\n}\niframe {\n  border-width: 0 !important;\n  /*-webkit-transform: translate3d(0, 0, 0);*/\n}\n.intrinsic-container {\n  position: relative;\n  height: 0;\n  /*overflow: hidden;*/\n}\n/*.iframe-wrapper {*/\n/*-webkit-overflow-scrolling: touch;*/\n/*overflow-y: scroll;*/\n/*overflow-x: scroll;*/\n/*}*/\n/* 16x9 Aspect Ratio */\n.intrinsic-container-16x9 {\n  padding-bottom: 65%;\n  margin-top: 88px;\n  /*margin-bottom: 100%;*/\n}\n.container {\n  padding: 0 !important;\n  width: 100%;\n}\n/*.iframe-wrapper {*/\n/*-webkit-overflow-scrolling: touch;*/\n/*overflow-y: scroll;*/\n/*overflow-x: scroll;*/\n/*}*/\n/* 4x3 Aspect Ratio */\n.intrinsic-container-4x3 {\n  padding-bottom: 75%;\n}\n.intrinsic-container iframe {\n  position: absolute;\n  top:0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n@media only screen and (max-width: 736px) {\n  .intrinsic-container-16x9 {\n    padding-bottom: 160%;\n    margin-top: 88px;\n  }\n  iframe {\n\n  }\n  .iframe-wrapper {\n    -webkit-overflow-scrolling: touch;\n    overflow-y: scroll;\n    overflow-x: scroll;\n  }\n  .container {\n    padding: 0 !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsbUJBQW1CO0dBQ3BCO0NBQ0Y7QUFDRDtFQUNFLHdDQUF3QztDQUN6QztBQUNEO0VBQ0UsMkJBQTJCO0VBQzNCLDRDQUE0QztDQUM3QztBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixxQkFBcUI7Q0FDdEI7QUFDRCxxQkFBcUI7QUFDbkIsc0NBQXNDO0FBQ3RDLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDekIsS0FBSztBQUNMLHVCQUF1QjtBQUN2QjtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtDQUNiO0FBQ0QscUJBQXFCO0FBQ25CLHNDQUFzQztBQUN0Qyx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3pCLEtBQUs7QUFDTCxzQkFBc0I7QUFDdEI7RUFDRSxvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFDRDtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtHQUNsQjtFQUNEOztHQUVDO0VBQ0Q7SUFDRSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtHQUNwQjtFQUNEO0lBQ0Usc0JBQXNCO0dBQ3ZCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODZweCl7XG4gIC5wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gIH1cbn1cbmJvZHkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5pZnJhbWUge1xuICBib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgLyotd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7Ki9cbn1cbi5pbnRyaW5zaWMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xufVxuLyouaWZyYW1lLXdyYXBwZXIgeyovXG4gIC8qLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyovXG4gIC8qb3ZlcmZsb3cteTogc2Nyb2xsOyovXG4gIC8qb3ZlcmZsb3cteDogc2Nyb2xsOyovXG4vKn0qL1xuLyogMTZ4OSBBc3BlY3QgUmF0aW8gKi9cbi5pbnRyaW5zaWMtY29udGFpbmVyLTE2eDkge1xuICBwYWRkaW5nLWJvdHRvbTogNjUlO1xuICBtYXJnaW4tdG9wOiA4OHB4O1xuICAvKm1hcmdpbi1ib3R0b206IDEwMCU7Ki9cbn1cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyouaWZyYW1lLXdyYXBwZXIgeyovXG4gIC8qLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyovXG4gIC8qb3ZlcmZsb3cteTogc2Nyb2xsOyovXG4gIC8qb3ZlcmZsb3cteDogc2Nyb2xsOyovXG4vKn0qL1xuLyogNHgzIEFzcGVjdCBSYXRpbyAqL1xuLmludHJpbnNpYy1jb250YWluZXItNHgzIHtcbiAgcGFkZGluZy1ib3R0b206IDc1JTtcbn1cblxuLmludHJpbnNpYy1jb250YWluZXIgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmludHJpbnNpYy1jb250YWluZXItMTZ4OSB7XG4gICAgcGFkZGluZy1ib3R0b206IDE2MCU7XG4gICAgbWFyZ2luLXRvcDogODhweDtcbiAgfVxuICBpZnJhbWUge1xuXG4gIH1cbiAgLmlmcmFtZS13cmFwcGVyIHtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/application/application.component.html":
/*!********************************************************!*\
  !*** ./src/app/application/application.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"intrinsic-container intrinsic-container-16x9 padding iframe-wrapper\">\n    <iframe src=\"https://jacoblei.managebuilding.com/Resident/rental-application/apply/\"></iframe>\n    <!--<div [innerHTML]=\"src=https://jacoblei.managebuilding.com/Resident/apps/rentalapp/\" ></div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/application/application.component.ts":
/*!******************************************************!*\
  !*** ./src/app/application/application.component.ts ***!
  \******************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent() {
        this.link = '';
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.link = 'https://jacoblei.managebuilding.com/Resident/rental-application/apply';
    };
    ApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application',
            template: __webpack_require__(/*! ./application.component.html */ "./src/app/application/application.component.html"),
            styles: [__webpack_require__(/*! ./application.component.css */ "./src/app/application/application.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.p {*/\n  /*color: #eeeeee;*/\n  /*}*/\n  @media only screen and (max-width: 770px) {\n  .carousel-inner img {\n    margin-top: 140px;\n    height: 270px !important;\n  }\n}\n  @media only screen and (min-width: 640px) {\n  .carousel-inner img {\n    margin-top: 85px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRO0VBQ04sbUJBQW1CO0VBQ3JCLEtBQUs7RUFDTDtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtHQUMxQjtDQUNGO0VBRUQ7RUFDRTtJQUNFLGlCQUFpQjtHQUNsQjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLnAgeyovXG4gIC8qY29sb3I6ICNlZWVlZWU7Ki9cbi8qfSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XG4gIC5jYXJvdXNlbC1pbm5lciBpbWcge1xuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xuICAgIGhlaWdodDogMjcwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5jYXJvdXNlbC1pbm5lciBpbWcge1xuICAgIG1hcmdpbi10b3A6IDg1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" style=\"z-index: 1\">\n    <!--<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>-->\n    <!--<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>-->\n    <!--<li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>-->\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n      <img  src=\"assets/img/house.png\" alt=\"Property One\">\n      <!--<div class=\"carousel-caption\">-->\n        <!--<h3>Knoxville</h3>-->\n        <!--<p class=\"p\">Our Home Town</p>-->\n      <!--</div>-->\n    </div>\n\n    <!--<div class=\"item\">-->\n      <!--<img  src=\"assets/img/1.jpg\" alt=\"Property Two\">-->\n      <!--<div class=\"carousel-caption\">-->\n        <!--<h3>Property Two</h3>-->\n        <!--<p class=\"p\">Escape</p>-->\n      <!--</div>-->\n    <!--</div>-->\n\n    <!--<div class=\"item\">-->\n      <!--<img  src=\"assets/img/2.jpg\" alt=\"Property Three\">-->\n      <!--<div class=\"carousel-caption\">-->\n        <!--<h3>Property Three</h3>-->\n        <!--<p class=\"p\">Beyond the Sky</p>-->\n      <!--</div>-->\n    <!--</div>-->\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*body {*/\n/*!*font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif,  Open Sans;*!*/\n/*font-size: 14px;*/\n/*line-height: 1.42857;*/\n/*height: 350px;*/\n/*padding: 0;*/\n/*margin: 0;*/\n/*}*/\n/*.message-padding {*/\n/*padding-left: 12%;*/\n/*}*/\n/*.panel-default {*/\n/*width: 52%;*/\n/*border-color: #ddd;*/\n/*box-shadow: 2px 5px 7px 6px rgba(13, 4, 1, 0.51);*/\n/*margin-left: 25%;*/\n/*padding-top: 4%;*/\n/*}*/\n/*.btn {*/\n/*margin-right: 0px;*/\n/*border-radius: 3px;*/\n/*border: transparent;*/\n/*box-shadow: 2px 3px 6px 1px #000000c2;*/\n/*}*/\n/*.input-group {*/\n/*display: inline-flex;*/\n/*}*/\n/*!*----------------------Mobile CSS---------------------------------------*!*/\n/*!*-------Vartical---------*!*/\n/*@media only screen and (max-width: 736px) {*/\n/*.panel-default {*/\n/*width: 136%;*/\n/*-webkit-box-shadow: 2px 5px 7px 6px rgba(13, 4, 1, 0.51);*/\n/*box-shadow: 2px 5px 7px 6px rgba(13, 4, 1, 0.51);*/\n/*margin-left: 0%;*/\n/*padding-top: 0%;*/\n/*margin-bottom: 18px;*/\n/*}*/\n/*.row {*/\n/*margin-right: -11%;*/\n/*margin-left: -70%;*/\n/*}*/\n/*.padding-input-group {*/\n/*padding-bottom: 5px;*/\n/*}*/\n/*.panel-body {*/\n/*padding-top: 30px;*/\n/*}*/\n/*.map {*/\n/*border: 0;*/\n/*padding: 2px;*/\n/*margin-left: -4px;*/\n/*width: 138%;*/\n/*}*/\n/*.message-padding {*/\n/*padding-left: 5%;*/\n/*width: 100%;*/\n/*margin-left: 2%;*/\n/*}*/\n/*}*/\n/*!*-------Horizontal-----------*!*/\n/*@media only screen and (max-height: 414px) {*/\n/*.row {*/\n/*margin-right: 9%;*/\n/*margin-left: -21%;*/\n/*}*/\n/*.padding-input-group {*/\n/*padding-bottom: 5px;*/\n/*}*/\n/*.panel-default {*/\n/*width: 128%;*/\n/*border-color: #ddd;*/\n/*-webkit-box-shadow: 2px 5px 7px 6px rgba(13, 4, 1, 0.51);*/\n/*box-shadow: 2px 5px 7px 6px rgba(13, 4, 1, 0.51);*/\n/*margin-left: 0%;*/\n/*padding-top: 0%;*/\n/*margin-bottom: 18px;*/\n/*}*/\n/*.panel-body {*/\n/*padding-top: 30px;*/\n/*}*/\n/*.map {*/\n/*border: 0;*/\n/*padding: 2px;*/\n/*margin-left: -4px;*/\n/*width: 129%;*/\n/*}*/\n/*.message-padding {*/\n/*padding-left: 3%;*/\n/*width: 100%;*/\n/*margin-left: 1%;*/\n/*}*/\n/*}*/\n/*------------------New CSS-----------------------*/\n.row-settings {\n  /*background-color: #dddddd;*/\n  padding-top: 5%;\n  padding-bottom: 4%;\n  /*border-radius: 2px;*/\n  /*box-shadow: 0 1px 1px rgba(0,0,0,.05);*/\n  /*max-width: 90%;*/\n}\n.row-paddings {\n  padding-left: 15%;\n  padding-right: 10%;\n  padding-top: 4%;\n}\n.text-area {\n  width: 100%;\n  height: 90px;\n}\n.bg-2 p {\n  color: #0000006e;\n}\n.bg-0 {\n  height: 100% !important;\n}\n.i-padding {\n  padding: 12px 5px 0px 0px;\n}\n@media only screen and (max-width: 486px) {\n  .padding-container {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .padding-content {\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n  .container {\n    padding: 15% 3% 0 6% !important;\n  }\n  /*.row-settings {*/\n    /*max-width: 100%;*/\n  /*}*/\n\n}\n@media only screen and (max-width: 764px) {\n  /*.md-padding-content {*/\n    /*padding-left: 5%;*/\n    /*padding-right: 5%;*/\n  /*}*/\n  .btn {\n    width: 100% !important;\n  }\n  .container {\n    padding: 15% 5% 0 5%;\n  }\n  iframe {\n    /*padding-right: 19%;*/\n    padding-top: 5%;\n  }\n  .map-padding {\n    padding-bottom: 15%;\n  }\n}\n@media only screen and (max-width: 989px){\n  .lg-padding-content {\n    padding-left: 5%;\n    padding-right: 8%;\n  }\n}\n.invalid {\n  color: red;\n  padding-left: 15px;\n}\n.btn {\n  margin-right: 0px;\n  border-radius: 3px;\n  border: transparent;\n  box-shadow: 2px 3px 6px 1px #000000c2;\n}\n/*----------Google Map------------*/\n.google-maps {\n  /*position: relative;*/\n  /*padding-bottom: 75%; // This is the aspect ratio*/\n  /*height: 0;*/\n  /*-webkit-overflow-scrolling: touch;*/\n  /*overflow-x: scroll;*/\n  /*overflow-y: scroll;*/\n  /*overflow: hidden;*/\n  /*height: 100%;*/\n  /*width: 100%;*/\n  /*position: absolute;*/\n  /*top: 0px;*/\n  /*left: 0px;*/\n  /*background-color: rgb(229, 227, 223);*/\n}\n.google-maps iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100% !important;\n  height: 100% !important;\n  box-shadow: 0px 0px 25px 1px black;\n}\n.modal-backdrop {\n  position: inherit !important;\n}\n.modal-body {\n  z-index: 1029;\n}\n.modal-dialog {\n  padding-top: 8%;\n}\n.modal-class {\n  display: none;\n  z-index: 9999;\n}\n.container {\n  padding: 0 !important;\n}\n.row-top-padding {\n  padding-top: 90px;\n}\n.content {\n  max-width: 65%;\n  float: left;\n}\n.contact-form {\n  margin-bottom: 20px;\n}\n.contact-form div {\n  padding-left: 0;\n}\n.address-text {\n  color: #5f5f5f;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n}\n.inputs {\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #d1d1d1;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  font-weight: normal;\n  letter-spacing: 1px;\n  box-shadow: none;\n  padding: 35px 0 5%;\n}\n.btn-primary {\n  background-color: #000000;\n  border-color: #000000;\n  border-radius: 0 !important;\n}\n.form-control {\n  border-radius: 1px;\n}\n.contact-btn-padding {\n  padding-bottom: 25px;\n}\nlabel {\n  font-weight: 400;\n}\n/*.contact-map {*/\n/*height: 40vh;*/\n/*min-height: 40rem;*/\n/*border-bottom: 1px solid #1f3741;*/\n/*position: relative;*/\n/*overflow: hidden;*/\n/*}*/\n@media only screen and (max-width: 736px) {\n  .contact-btn-padding {\n    padding-bottom: 55px;\n  }\n  .textarea-padding {\n    padding-bottom: 25px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWLHdGQUF3RjtBQUN4RixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YsY0FBYztBQUNkLEtBQUs7QUFDTCxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLEtBQUs7QUFDTCxvQkFBb0I7QUFDcEIsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixxREFBcUQ7QUFDckQscUJBQXFCO0FBQ3JCLG9CQUFvQjtBQUNwQixLQUFLO0FBQ0wsVUFBVTtBQUNWLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLDBDQUEwQztBQUMxQyxLQUFLO0FBQ0wsa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixLQUFLO0FBQ0wsK0VBQStFO0FBQy9FLGdDQUFnQztBQUNoQywrQ0FBK0M7QUFDL0Msb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQiw2REFBNkQ7QUFDN0QscURBQXFEO0FBQ3JELG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsd0JBQXdCO0FBQ3hCLEtBQUs7QUFDTCxVQUFVO0FBQ1YsdUJBQXVCO0FBQ3ZCLHNCQUFzQjtBQUN0QixLQUFLO0FBQ0wsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4QixLQUFLO0FBQ0wsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixLQUFLO0FBQ0wsVUFBVTtBQUNWLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLEtBQUs7QUFDTCxLQUFLO0FBQ0wsb0NBQW9DO0FBQ3BDLGdEQUFnRDtBQUNoRCxVQUFVO0FBQ1YscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixLQUFLO0FBQ0wsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4QixLQUFLO0FBRUwsb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIsNkRBQTZEO0FBQzdELHFEQUFxRDtBQUNyRCxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixLQUFLO0FBQ0wsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixLQUFLO0FBQ0wsVUFBVTtBQUNWLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLEtBQUs7QUFDTCxLQUFLO0FBR0wsb0RBQW9EO0FBRXBEO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDBDQUEwQztFQUMxQyxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHdCQUF3QjtDQUN6QjtBQUNEO0VBQ0UsMEJBQTBCO0NBQzNCO0FBRUQ7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLGdDQUFnQztHQUNqQztFQUNELG1CQUFtQjtJQUNqQixvQkFBb0I7RUFDdEIsS0FBSzs7Q0FFTjtBQUNEO0VBQ0UseUJBQXlCO0lBQ3ZCLHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEIsS0FBSztFQUNMO0lBQ0UsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxxQkFBcUI7R0FDdEI7RUFDRDtJQUNFLHVCQUF1QjtJQUN2QixnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLG9CQUFvQjtHQUNyQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7R0FDbkI7Q0FDRjtBQUVEO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0NBQXNDO0NBQ3ZDO0FBRUQsb0NBQW9DO0FBQ3BDO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9EQUFvRDtFQUNwRCxjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QseUNBQXlDO0NBQzFDO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG1DQUFtQztDQUNwQztBQUVEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsY0FBYztFQUNkLGNBQWM7Q0FDZjtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGVBQWU7RUFDZixZQUFZO0NBQ2I7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixzQkFBc0I7Q0FDdkI7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtDQUM3QjtBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxxQkFBcUI7Q0FDdEI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNELGtCQUFrQjtBQUNoQixpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLHFDQUFxQztBQUNyQyx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3ZCLEtBQUs7QUFDTDtFQUNFO0lBQ0UscUJBQXFCO0dBQ3RCO0VBQ0Q7SUFDRSxxQkFBcUI7R0FDdEI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypib2R5IHsqL1xuLyohKmZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICBPcGVuIFNhbnM7KiEqL1xuLypmb250LXNpemU6IDE0cHg7Ki9cbi8qbGluZS1oZWlnaHQ6IDEuNDI4NTc7Ki9cbi8qaGVpZ2h0OiAzNTBweDsqL1xuLypwYWRkaW5nOiAwOyovXG4vKm1hcmdpbjogMDsqL1xuLyp9Ki9cbi8qLm1lc3NhZ2UtcGFkZGluZyB7Ki9cbi8qcGFkZGluZy1sZWZ0OiAxMiU7Ki9cbi8qfSovXG4vKi5wYW5lbC1kZWZhdWx0IHsqL1xuLyp3aWR0aDogNTIlOyovXG4vKmJvcmRlci1jb2xvcjogI2RkZDsqL1xuLypib3gtc2hhZG93OiAycHggNXB4IDdweCA2cHggcmdiYSgxMywgNCwgMSwgMC41MSk7Ki9cbi8qbWFyZ2luLWxlZnQ6IDI1JTsqL1xuLypwYWRkaW5nLXRvcDogNCU7Ki9cbi8qfSovXG4vKi5idG4geyovXG4vKm1hcmdpbi1yaWdodDogMHB4OyovXG4vKmJvcmRlci1yYWRpdXM6IDNweDsqL1xuLypib3JkZXI6IHRyYW5zcGFyZW50OyovXG4vKmJveC1zaGFkb3c6IDJweCAzcHggNnB4IDFweCAjMDAwMDAwYzI7Ki9cbi8qfSovXG4vKi5pbnB1dC1ncm91cCB7Ki9cbi8qZGlzcGxheTogaW5saW5lLWZsZXg7Ki9cbi8qfSovXG4vKiEqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU1vYmlsZSBDU1MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qISovXG4vKiEqLS0tLS0tLVZhcnRpY2FsLS0tLS0tLS0tKiEqL1xuLypAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7Ki9cbi8qLnBhbmVsLWRlZmF1bHQgeyovXG4vKndpZHRoOiAxMzYlOyovXG4vKi13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCA3cHggNnB4IHJnYmEoMTMsIDQsIDEsIDAuNTEpOyovXG4vKmJveC1zaGFkb3c6IDJweCA1cHggN3B4IDZweCByZ2JhKDEzLCA0LCAxLCAwLjUxKTsqL1xuLyptYXJnaW4tbGVmdDogMCU7Ki9cbi8qcGFkZGluZy10b3A6IDAlOyovXG4vKm1hcmdpbi1ib3R0b206IDE4cHg7Ki9cbi8qfSovXG4vKi5yb3cgeyovXG4vKm1hcmdpbi1yaWdodDogLTExJTsqL1xuLyptYXJnaW4tbGVmdDogLTcwJTsqL1xuLyp9Ki9cbi8qLnBhZGRpbmctaW5wdXQtZ3JvdXAgeyovXG4vKnBhZGRpbmctYm90dG9tOiA1cHg7Ki9cbi8qfSovXG4vKi5wYW5lbC1ib2R5IHsqL1xuLypwYWRkaW5nLXRvcDogMzBweDsqL1xuLyp9Ki9cbi8qLm1hcCB7Ki9cbi8qYm9yZGVyOiAwOyovXG4vKnBhZGRpbmc6IDJweDsqL1xuLyptYXJnaW4tbGVmdDogLTRweDsqL1xuLyp3aWR0aDogMTM4JTsqL1xuLyp9Ki9cbi8qLm1lc3NhZ2UtcGFkZGluZyB7Ki9cbi8qcGFkZGluZy1sZWZ0OiA1JTsqL1xuLyp3aWR0aDogMTAwJTsqL1xuLyptYXJnaW4tbGVmdDogMiU7Ki9cbi8qfSovXG4vKn0qL1xuLyohKi0tLS0tLS1Ib3Jpem9udGFsLS0tLS0tLS0tLS0qISovXG4vKkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQxNHB4KSB7Ki9cbi8qLnJvdyB7Ki9cbi8qbWFyZ2luLXJpZ2h0OiA5JTsqL1xuLyptYXJnaW4tbGVmdDogLTIxJTsqL1xuLyp9Ki9cbi8qLnBhZGRpbmctaW5wdXQtZ3JvdXAgeyovXG4vKnBhZGRpbmctYm90dG9tOiA1cHg7Ki9cbi8qfSovXG5cbi8qLnBhbmVsLWRlZmF1bHQgeyovXG4vKndpZHRoOiAxMjglOyovXG4vKmJvcmRlci1jb2xvcjogI2RkZDsqL1xuLyotd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggN3B4IDZweCByZ2JhKDEzLCA0LCAxLCAwLjUxKTsqL1xuLypib3gtc2hhZG93OiAycHggNXB4IDdweCA2cHggcmdiYSgxMywgNCwgMSwgMC41MSk7Ki9cbi8qbWFyZ2luLWxlZnQ6IDAlOyovXG4vKnBhZGRpbmctdG9wOiAwJTsqL1xuLyptYXJnaW4tYm90dG9tOiAxOHB4OyovXG4vKn0qL1xuLyoucGFuZWwtYm9keSB7Ki9cbi8qcGFkZGluZy10b3A6IDMwcHg7Ki9cbi8qfSovXG4vKi5tYXAgeyovXG4vKmJvcmRlcjogMDsqL1xuLypwYWRkaW5nOiAycHg7Ki9cbi8qbWFyZ2luLWxlZnQ6IC00cHg7Ki9cbi8qd2lkdGg6IDEyOSU7Ki9cbi8qfSovXG4vKi5tZXNzYWdlLXBhZGRpbmcgeyovXG4vKnBhZGRpbmctbGVmdDogMyU7Ki9cbi8qd2lkdGg6IDEwMCU7Ki9cbi8qbWFyZ2luLWxlZnQ6IDElOyovXG4vKn0qL1xuLyp9Ki9cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLU5ldyBDU1MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5yb3ctc2V0dGluZ3Mge1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7Ki9cbiAgcGFkZGluZy10b3A6IDUlO1xuICBwYWRkaW5nLWJvdHRvbTogNCU7XG4gIC8qYm9yZGVyLXJhZGl1czogMnB4OyovXG4gIC8qYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA1KTsqL1xuICAvKm1heC13aWR0aDogOTAlOyovXG59XG5cbi5yb3ctcGFkZGluZ3Mge1xuICBwYWRkaW5nLWxlZnQ6IDE1JTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xuICBwYWRkaW5nLXRvcDogNCU7XG59XG4udGV4dC1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbn1cbi5iZy0yIHAge1xuICBjb2xvcjogIzAwMDAwMDZlO1xufVxuLmJnLTAge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5pLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMnB4IDVweCAwcHggMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NnB4KSB7XG4gIC5wYWRkaW5nLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIC5wYWRkaW5nLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNSUgMyUgMCA2JSAhaW1wb3J0YW50O1xuICB9XG4gIC8qLnJvdy1zZXR0aW5ncyB7Ki9cbiAgICAvKm1heC13aWR0aDogMTAwJTsqL1xuICAvKn0qL1xuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NHB4KSB7XG4gIC8qLm1kLXBhZGRpbmctY29udGVudCB7Ki9cbiAgICAvKnBhZGRpbmctbGVmdDogNSU7Ki9cbiAgICAvKnBhZGRpbmctcmlnaHQ6IDUlOyovXG4gIC8qfSovXG4gIC5idG4ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTUlIDUlIDAgNSU7XG4gIH1cbiAgaWZyYW1lIHtcbiAgICAvKnBhZGRpbmctcmlnaHQ6IDE5JTsqL1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgfVxuICAubWFwLXBhZGRpbmcge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNSU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTg5cHgpe1xuICAubGctcGFkZGluZy1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDglO1xuICB9XG59XG5cbi5pbnZhbGlkIHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmJ0biB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNnB4IDFweCAjMDAwMDAwYzI7XG59XG5cbi8qLS0tLS0tLS0tLUdvb2dsZSBNYXAtLS0tLS0tLS0tLS0qL1xuLmdvb2dsZS1tYXBzIHtcbiAgLypwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbiAgLypwYWRkaW5nLWJvdHRvbTogNzUlOyAvLyBUaGlzIGlzIHRoZSBhc3BlY3QgcmF0aW8qL1xuICAvKmhlaWdodDogMDsqL1xuICAvKi13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsqL1xuICAvKm92ZXJmbG93LXg6IHNjcm9sbDsqL1xuICAvKm92ZXJmbG93LXk6IHNjcm9sbDsqL1xuICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cbiAgLypoZWlnaHQ6IDEwMCU7Ki9cbiAgLyp3aWR0aDogMTAwJTsqL1xuICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAvKnRvcDogMHB4OyovXG4gIC8qbGVmdDogMHB4OyovXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOSwgMjI3LCAyMjMpOyovXG59XG4uZ29vZ2xlLW1hcHMgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMXB4IGJsYWNrO1xufVxuXG4ubW9kYWwtYmFja2Ryb3Age1xuICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHotaW5kZXg6IDEwMjk7XG59XG4ubW9kYWwtZGlhbG9nIHtcbiAgcGFkZGluZy10b3A6IDglO1xufVxuXG4ubW9kYWwtY2xhc3Mge1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5yb3ctdG9wLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogOTBweDtcbn1cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA2NSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmNvbnRhY3QtZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGFjdC1mb3JtIGRpdiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5hZGRyZXNzLXRleHQge1xuICBjb2xvcjogIzVmNWY1ZjtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cblxuLmlucHV0cyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkMWQxO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMzVweCAwIDUlO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG59XG4uY29udGFjdC1idG4tcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxubGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLyouY29udGFjdC1tYXAgeyovXG4gIC8qaGVpZ2h0OiA0MHZoOyovXG4gIC8qbWluLWhlaWdodDogNDByZW07Ki9cbiAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFmMzc0MTsqL1xuICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cbi8qfSovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5jb250YWN0LWJ0bi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbiAgfVxuICAudGV4dGFyZWEtcGFkZGluZyB7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-0\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\n    <div class=\"row row-top-padding\">\n      <div style=\"width: 100%; border-bottom: 1px solid #0B1A33; border-top:1px solid #0B1A33; z-index: 99999; \"><iframe width=\"100%\" height=\"400\" src=\"https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=500%20Ebenezer%20Rd.%20Knoxville%2C%20TN+(Jacob%20Lei%20Property%20Management)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe></div><br />\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n        <h1>Contact Us</h1>\n          <div class=\"col-md-push-4 col-md-8 col-xs-12 content\">\n            <div class=\"contact-form\">\n              <div class=\"address-text\">\n                <label>\n                Jacob Lei Property Management LLC\n                </label>\n                <br>\n                <label>\n                500 Ebenezer Road\n                </label>\n                <br>\n                <label>\n                  Knoxville TN,  37923\n                </label>\n                <br><br>\n                <label>\n                  Phone:\n                </label>\n                <label>\n                  865.675.7880\n                </label>\n                <br>\n                <label>\n                  Fax:\n                </label>\n                <label>\n                  866.703.7882\n                </label>\n                <br>\n                <label>\n                  Email:\n                </label>\n                <a href=\"mailto:admin@jacobolei.com\">\n                 admin@jacoblei.com\n                </a>\n              </div>\n            </div>\n            <div class=\"contact-form\">\n              <div class=\"address-text\">\n                <form [formGroup]=\"contactForm\">\n                  <div class=\"col-sm-12 col-md-6\">\n                    <input  autocomplete=\"on\" type=\"text\" maxlength=\"30\"  max=\"30\" class=\"form-control inputs\" id=\"tenName\" formControlName=\"tenName\" name=\"tenName\" (input)=\"checkInputError()\" placeholder=\"Name\" required />\n                  </div>\n                  <div class=\"col-sm-12 col-md-6\">\n                    <input autocomplete=\"on\" type=\"text\" maxlength=\"50\" class=\"form-control inputs\" formControlName=\"emailAddress\" name=\"emailAddress\" value=\"\" (input)=\"checkInputError()\" placeholder=\"Email\" required />\n                  </div>\n                  <div class=\"col-sm-12 col-md-6\">\n                    <input autocomplete=\"on\" type=\"text\" maxlength=\"50\"  class=\"form-control inputs\" formControlName=\"appAddress\" name=\"appAddress\" value=\"\" (input)=\"checkInputError()\" placeholder=\"What is this Regarding?\" required />\n                  </div>\n                  <div class=\"col-sm-12 col-md-6\">\n                    <input autocomplete=\"on\" type=\"number\" max=\"12\" class=\"form-control inputs\" formControlName=\"phoneNumber\" name=\"phoneNumber\" value=\"\" (input)=\"checkInputError()\" placeholder=\"Phone(Optional)\" />\n                  </div>\n                  <div class=\"col-sm-12 col-md-12 textarea-padding\">\n                    <textarea formControlName=\"textArea\" maxlength=\"400\" class=\"text-area inputs\" (input)=\"checkInputError()\" placeholder=\"Message\"></textarea>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12 contact-btn-padding\">\n                    <button type=\"button\"  (click)=\"sendEmail(this)\" data-toggle=\"modal\" href=\"#modal\" [disabled]=\"!contactForm.valid\" class=\"btn btn-primary btn-lg btn-submit-fix pull-left\">Submit</button>\n                  </div>\n                  <!--Modal-->\n                  <div class=\"modal fade\" id=\"modal\">\n                    <div class=\"modal-dialog\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                          <h4 class=\"modal-title\">{{messageHeader}}</h4>\n                        </div>\n                        <div class=\"modal-body\">\n                          <h5>{{messageBody}}</h5>\n                        </div>\n                        <div class=\"modal-footer\">\n                          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                        </div>\n                      </div><!-- /.modal-content -->\n                    </div><!-- /.modal-dialog -->\n                  </div><!-- /.modal -->\n                </form>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder, appService) {
        this.formBuilder = formBuilder;
        this.appService = appService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = this.formBuilder.group({
            'tenName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'appAddress': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'textArea': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'phoneNumber': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]],
            'emailAddress': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^@]*@[^@]*')]]
        });
    };
    ContactComponent.prototype.checkInputError = function () {
        if (this.contactForm.controls.tenName.value === '') {
            this.nameError = 'Name Required';
        }
        else {
            this.nameError = null;
        }
        if (this.contactForm.controls.appAddress.value === '') {
            this.appAddressError = 'Address Required';
        }
        else {
            this.appAddressError = null;
        }
        if (this.contactForm.controls.phoneNumber.value === '') {
            this.phoneNumberError = 'Address Required';
        }
        else {
            this.phoneNumberError = null;
        }
        if (this.contactForm.controls.emailAddress.value === '') {
            this.emailAddressError = 'Address Required';
        }
        else {
            this.emailAddressError = null;
        }
        if (this.contactForm.controls.textArea.value === '') {
            this.textAreaError = 'Address Required';
        }
        else {
            this.textAreaError = null;
        }
    };
    ContactComponent.prototype.sendEmail = function (data) {
        var _this = this;
        this.appService.sendContacEmail(data.contactForm.value).subscribe(function (data) {
            console.log('data', data);
            if (data.success) {
                _this.emailSuccess = true;
                _this.messageHeader = 'Thank You';
                _this.messageBody = 'We received your email';
                _this.contactForm.reset();
            }
            else if (data.error) {
                _this.emailSuccess = false;
                _this.messageHeader = 'Error';
                _this.messageBody = 'Something went wrong. Please, check your form and try again';
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], ContactComponent.prototype, "contactForm", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.footer {*/\n/*text-indent: 20px;*/\n/*font-size: 14px;*/\n/*z-index: 1;*/\n/*}*/\np {\n  font: 400 15px/1.8 Lato, sans-serif;\n}\n.footer {\n  margin-bottom: 0 !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n.footer-no-padding {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n.footer-main {\n  /*background-color: #221f1f;*/\n  background-color: #d5d5d5;\n  padding: 0 0 0;\n  /*padding: 35px 0 0;*/\n}\n.top {\n  padding-left: 0;\n  padding-right: 0\n}\n/*.top {*/\n/*border-bottom: 1px solid #fff;*/\n/*}*/\n/*@media (min-width: 1200px) {*/\n/*.container {*/\n/*width: 1170px;*/\n/*}*/\n/*}*/\n/*@media (min-width: 992px) {*/\n/*.container {*/\n/*width: 970px;*/\n/*}*/\n/*}*/\n/*@media (min-width: 768px) {*/\n/*.container {*/\n/*width: 750px;*/\n/*}*/\n/*}*/\n/*.footer ul {*/\n/*padding-left: 0px !important;*/\n/*}*/\n.top .footer-blk {\n  height: 100%;\n  padding-left: 0;\n  padding-right: 0;\n}\n.router-link-active {\n  color: #ffffff !important;\n  font-weight: 400 !important;\n}\np {\n  /*color: #ffffff !important;*/\n  color: #000000 !important;\n  font-weight: normal;\n}\nh4 {\n  color: #0e0d0dbf;\n}\n.footer a {\n  /*color: #ffffff;*/\n  color: #000000;\n  font-weight: 200;\n}\n.footer a:hover {\n  font-weight: 400;\n}\n.img-size {\n  /*max-width: 110px;*/\n  /*background: #F5F5F5;*/\n  width: 10%;\n  height: 10%;\n  position: absolute;\n  padding-top: 50%;\n  padding-bottom: 60%;\n}\n.logo {\n  margin-right: 25px;\n}\n/*===============================================================================================================*/\n.block {\n  background-color: #d5d5d5;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  /*height: 63vh;*/\n}\n/*.row {*/\n/*display: table;*/\n/*width: 100%;*/\n/*margin: 0;*/\n/*}*/\n.brand-logo {\n  font-family: Cinzel, serif;\n  font-size: 35px;\n  color: #00005c !important;\n}\n.footer-logo {\n  font-family: Cinzel, serif;\n  font-size: 18px;\n  color: #00005c !important;\n}\n.brand-text {\n  font-size: 12px;\n  margin-left: -156px;\n}\n.container {\n  width: 100% !important;\n  /*padding: 80px 0px !important;*/\n}\n@media only screen and (max-width: 414px) {\n  .img-size {\n    display: none;\n    /*padding: 0 !important;*/\n    /*max-width: 25%;*/\n  }\n  .container {\n    padding: 2%;\n  }\n  .top-padding {\n    padding-top: 55px;\n  }\n  footer h4 {\n    font-size: 18px;\n    text-transform: uppercase;\n    letter-spacing: 0.15em;\n    margin-top: 0;\n  }\n  .brand-text {\n    font-size: 12px;\n    margin-left: -156px;\n  }\n  .brand-logo {\n    font-family: Cinzel, serif;\n    font-size:35px;\n    color: #00005C !important;\n  }\n  sub {\n    bottom: -0.9em;\n  }\n}\n@media only screen and (max-width: 736px){\n  .container {\n    width: 100% !important;\n    padding: 2% !important;\n    /*padding-top: 55px !important;*/\n    /*padding-bottom: 55px !important;*/\n  }\n  .top-padding {\n    padding-top: 55px;\n  }\n  .brand-text {\n    font-size: 12px;\n    margin-left: -156px;\n  }\n  sub {\n    bottom: -1.25em;\n  }\n}\n@media only screen and (min-width: 640px) and (max-width: 1366px){\n  sub {\n    bottom: -1.25em;\n  }\n}\n@media only screen and (min-width: 1367px) {\n  sub {\n    bottom: -1.25em;\n  }\n}\n.map {\n  height: 100px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n}\na {\n  color: #000000 !important;\n  font-weight: normal;\n}\n.links {\n  text-align: center;\n  padding: 0;\n}\n.contact-link {\n  cursor: pointer !important;\n}\n.contact-link:focus {\n  outline: transparent none !important;\n}\n/*===============================================================================================================*/\n/*BEGINNING OF NEW CSS*/\n/*---------------------------------------------------------------------------------------------------------*/\n/*.footer-container footer.block {*/\n/*padding: 0;*/\n/*}*/\n/*@media (min-width: 1200px) {*/\n/*.footer-container footer .container {*/\n/*position: relative;*/\n/*!*top: 50%;*!*/\n/*-webkit-transform: translateY(-50%);*/\n/*-moz-transform: translateY(-50%);*/\n/*-ms-transform: translateY(-50%);*/\n/*transform: translateY(-50%);*/\n/*padding-top: 60px !important;*/\n/*padding-bottom: 60px !important;*/\n/*}*/\n/*}*/\n/*@media (min-width: 992px) {*/\n/*.footer-container footer .container {*/\n/*padding-bottom: 90px !important;*/\n/*}*/\n/*.footer-container footer .container {*/\n/*padding-bottom: 90px !important;*/\n/*}*/\n/*.container {*/\n/*width: 940px;*/\n/*}*/\n/*}*/\n/*@media (min-width: 768px) {*/\n/*.container {*/\n/*width: 90%;*/\n/*}*/\n/*}*/\n/*@media (min-width: 1200px) {*/\n/*.block {*/\n/*position: relative;*/\n/*overflow: hidden;*/\n/*width: 100%;*/\n/*height: 63vh;*/\n/*background-color: #d5d5d5;*/\n/*}*/\n/*}*/\n/*@media (min-width: 1200px) {*/\n/*.footer-container footer .footer-base {*/\n/*position: absolute;*/\n/*bottom: 0;*/\n/*}*/\n/*}*/\n/*@media (min-width: 992px) {*/\n/*.footer-container footer .footer-base .row {*/\n/*display: table;*/\n/*width: 100%;*/\n/*margin: 0;*/\n/*}*/\n/*}*/\n/*@media (min-width: 992px) {*/\n/*.col-md-push-3 {*/\n/*left: 40%;*/\n/*}*/\n/*}*/\n/*@media (min-width: 992px) {*/\n/*.footer-container footer .footer-base-column {*/\n/*display: table-cell;*/\n/*vertical-align: bottom;*/\n/*float: none;*/\n/*}*/\n/*}*/\n/*@media (min-width: 1200px) {*/\n/*.footer-container footer .footer-base {*/\n/*position: absolute;*/\n/*bottom: 0;*/\n/*}*/\n/*}*/\n/*@media (min-width: 992px) {*/\n/*.footer-container footer .footer-base-column {*/\n/*display: table-cell;*/\n/*vertical-align: bottom;*/\n/*float: none;*/\n/*}*/\n/*}*/\n/*@media  only screen and (max-width: 768px) {*/\n/*.block {*/\n/*background-color: #d5d5d5;*/\n/*}*/\n/*.col-md-push-4 {*/\n/*left: 0px !important;*/\n/*}*/\n/*.col-md-pull-4 {*/\n/*right: 0 !important;*/\n/*}*/\n/*.col-md-push-3 {*/\n/*left: 0 !important;*/\n/*}*/\n/*.phone-number {*/\n/*text-align: -webkit-center;*/\n/*text-align: center;*/\n/*margin: 0 0 2em 2em !important;*/\n/*}*/\n/*.logo-wrapper{*/\n/*text-align: center;*/\n/*}*/\n/*.col-md-pull-6 {*/\n/*right: 30% !important;*/\n/*max-width: 30%;*/\n/*}*/\n/*.align-right {*/\n/*left: 110% !important;*/\n/*max-width: 30%;*/\n/*}*/\n/*.links {*/\n/*text-align: center;*/\n/*padding: 0;*/\n/*}*/\n/*}*/\n/*@media (min-width: 992px) {*/\n/*.col-md-pull-6 {*/\n/*right: 120%;*/\n/*}*/\n/*.align-right {*/\n/*left: 142%;*/\n/*}*/\n/*}*/\n/*@media (min-width: 1900px) {*/\n/*.col-md-pull-6 {*/\n/*right: 116%;*/\n/*}*/\n/*.col-md-push-3[_ngcontent-c2] {*/\n/*left: 44%;*/\n/*}*/\n/*.block {*/\n/*height: 42vh;*/\n/*}*/\n/*.align-right[_ngcontent-c2] {*/\n/*left: 130%;*/\n/*}*/\n/*}*/\n/*@media (min-width: 2100px) {*/\n/*.col-md-push-3 {*/\n/*left: 45%;*/\n/*}*/\n/*.align-right {*/\n/*left: 129%;*/\n/*}*/\n/*.col-md-pull-6 {*/\n/*right: 119%;*/\n/*}*/\n/*.block {*/\n/*height: 50vh;*/\n/*}*/\n/*}*/\n/*@media  only screen and (max-width: 1024px) {*/\n/*.block {*/\n/*height: 75vh;*/\n/*background-color: #d5d5d5;*/\n/*}*/\n/*.row {*/\n/*padding-top: 15px;*/\n/*}*/\n/*.align-right {*/\n/*left: 142%;*/\n/*}*/\n/*.col-md-pull-6 {*/\n/*right: 117%;*/\n/*width: 37%;*/\n/*}*/\n/*.col-md-push-3 {*/\n/*left: 35%;*/\n/*}*/\n/*.container {*/\n/*padding: 0 !important;*/\n/*}*/\n/*}*/\n/*@media  only screen and (max-width: 823px) {*/\n/*.block {*/\n/*height: 145vh;*/\n/*}*/\n/*.phone-number {*/\n/*margin: 0 0 2em 5em !important;*/\n/*}*/\n/*}*/\n/*@media  only screen and (max-width: 414px) {*/\n/*.block {*/\n/*height: 80vh ;*/\n/*}*/\n/*.brand-logo {*/\n/*font-size: 28px !important;*/\n/*}*/\n/*.brand-text {*/\n/*font-size: 9px !important;*/\n/*margin-left: -112px !important;*/\n/*}*/\n/*.phone-number {*/\n/*margin: 0 0 2em 2em !important;*/\n/*}*/\n/*}*/\n/*.footer-container footer .footer-base {*/\n/*width: 100%;*/\n/*padding: 30px 10px;*/\n/*}*/\n/*.footer-container footer .footer-base {*/\n/*width: 100%;*/\n/*padding: 30px 10px;*/\n/*}*/\n/*.phone-number {*/\n/*width: 80%;*/\n/*margin: 0 0 2em -2em;*/\n/*}*/\n/*i {*/\n/*color: black;*/\n/*}*/\n/*.position-top {*/\n/*margin-top: -34px;*/\n/*}*/\n/*a{*/\n/*color: #000000 !important;*/\n/*font-weight: normal;*/\n/*}*/\n/*!*.row {*!*/\n/*!*margin-right: -30px;*!*/\n/*!*margin-left: -30px;*!*/\n/*!*padding-top: 30px;*!*/\n/*!*}*!*/\n/*.col-md-pull-4 {*/\n/*right: 33.33333%;*/\n/*}*/\n/*.col-md-push-4 {*/\n/*left: 33.33333%;*/\n/*}*/\n/*.footer-container footer .footer-column h4 {*/\n/*font-size: 18px;*/\n/*text-transform: uppercase;*/\n/*letter-spacing: 0.15em;*/\n/*margin-top: 0;*/\n/*}*/\n/*.brand-text {*/\n/*font-size: 12px;*/\n/*margin-left: -156px;*/\n/*}*/\n/*.brand-logo {*/\n/*font-family: Cinzel, serif;*/\n/*font-size:35px;*/\n/*color: #00005C !important;*/\n/*}*/\n/*sub {*/\n/*bottom: -0.9em;*/\n/*}*/\n/*.row {*/\n/*display: table;*/\n/*width: 100%;*/\n/*margin: 0;*/\n/*}*/\n/*---------------------------------------------------------------------------------------------------------------*/\n/*END OF NEW CSS*/\n/*.footer {*/\n/*z-index: 1;*/\n/*!*font-style: italic;*!*/\n/*!*font-family: Montserrat, sans-serif;*!*/\n/*font-weight: 300;*/\n/*letter-spacing: 4px;*/\n/*text-indent: 20px;*/\n/*font-size: 14px !important;*/\n/*height: 45px;*/\n/*width: 100%;*/\n/*background-image: none;*/\n/*background-repeat: repeat;*/\n/*background-attachment: scroll;*/\n/*background-position: 0% 0%;*/\n/*position: fixed;*/\n/*bottom: 0pt;*/\n/*left: 0pt;*/\n/*background: #002754;*/\n/*color: #f5f5f5;*/\n/*opacity: 0.8;*/\n/*}*/\n/*.footer-contents {*/\n/*height:24px; !* Replace with the height your footer should be*!*/\n/*width: 100%; !* Visible width of footer *!*/\n/*margin:auto;*/\n/*padding-top: 10px;*/\n/*}*/\n/*.footer-link {*/\n/*color: #f5f5f5;*/\n/*text-decoration: none;*/\n/*}*/\n/*@media only screen and (max-width: 640px) {*/\n/*.padding {*/\n/*padding-top: 0px;*/\n/*}*/\n/*.footer p {*/\n/*font: 400 12px/1.8 Lato, sans-serif;*/\n/*!*font-size: 12px !important;*!*/\n/*}*/\n/*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixLQUFLO0FBQ0w7RUFDRSxvQ0FBb0M7Q0FDckM7QUFDRDtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0NBQy9CO0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0IsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7Q0FDakI7QUFDRCxVQUFVO0FBQ1Isa0NBQWtDO0FBQ3BDLEtBQUs7QUFDTCxnQ0FBZ0M7QUFDOUIsZ0JBQWdCO0FBQ2Qsa0JBQWtCO0FBQ3BCLEtBQUs7QUFDUCxLQUFLO0FBRUwsK0JBQStCO0FBQzdCLGdCQUFnQjtBQUNkLGlCQUFpQjtBQUNuQixLQUFLO0FBQ1AsS0FBSztBQUNMLCtCQUErQjtBQUM3QixnQkFBZ0I7QUFDZCxpQkFBaUI7QUFDbkIsS0FBSztBQUNQLEtBQUs7QUFDTCxnQkFBZ0I7QUFDZCxpQ0FBaUM7QUFDbkMsS0FBSztBQUVMO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7Q0FDN0I7QUFFRDtFQUNFLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBSUQsbUhBQW1IO0FBQ25IO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjtBQUNELFVBQVU7QUFDUixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDaEIsS0FBSztBQUNMO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsaUNBQWlDO0NBQ2xDO0FBRUQ7RUFDRTtJQUNFLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsbUJBQW1CO0dBQ3BCO0VBQ0Q7SUFDRSxZQUFZO0dBQ2I7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsY0FBYztHQUNmO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLDBCQUEwQjtHQUMzQjtFQUNEO0lBQ0UsZUFBZTtHQUNoQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG9DQUFvQztHQUNyQztFQUNEO0lBQ0Usa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxnQkFBZ0I7R0FDakI7Q0FDRjtBQUNEO0VBQ0U7SUFDRSxnQkFBZ0I7R0FDakI7Q0FDRjtBQUNEO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFFRCxtSEFBbUg7QUFHbkgsd0JBQXdCO0FBQ3hCLDZHQUE2RztBQUM3RyxvQ0FBb0M7QUFDbEMsZUFBZTtBQUNqQixLQUFLO0FBQ0wsZ0NBQWdDO0FBQzlCLHlDQUF5QztBQUN2Qyx1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCLHdDQUF3QztBQUN4QyxxQ0FBcUM7QUFDckMsb0NBQW9DO0FBQ3BDLGdDQUFnQztBQUNoQyxpQ0FBaUM7QUFDakMsb0NBQW9DO0FBQ3RDLEtBQUs7QUFDUCxLQUFLO0FBQ0wsK0JBQStCO0FBQzdCLHlDQUF5QztBQUN2QyxvQ0FBb0M7QUFDdEMsS0FBSztBQUNMLHlDQUF5QztBQUN2QyxvQ0FBb0M7QUFDdEMsS0FBSztBQUNMLGdCQUFnQjtBQUNkLGlCQUFpQjtBQUNuQixLQUFLO0FBQ1AsS0FBSztBQUVMLCtCQUErQjtBQUM3QixnQkFBZ0I7QUFDZCxlQUFlO0FBQ2pCLEtBQUs7QUFDUCxLQUFLO0FBRUwsZ0NBQWdDO0FBQzlCLFlBQVk7QUFDVix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsOEJBQThCO0FBQ2hDLEtBQUs7QUFDUCxLQUFLO0FBQ0wsZ0NBQWdDO0FBQzlCLDJDQUEyQztBQUN6Qyx1QkFBdUI7QUFDdkIsY0FBYztBQUNoQixLQUFLO0FBQ1AsS0FBSztBQUNMLCtCQUErQjtBQUM3QixnREFBZ0Q7QUFDOUMsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2hCLEtBQUs7QUFDUCxLQUFLO0FBQ0wsK0JBQStCO0FBQzdCLG9CQUFvQjtBQUNsQixjQUFjO0FBQ2hCLEtBQUs7QUFDUCxLQUFLO0FBQ0wsK0JBQStCO0FBQzdCLGtEQUFrRDtBQUNoRCx3QkFBd0I7QUFDeEIsMkJBQTJCO0FBQzNCLGdCQUFnQjtBQUNsQixLQUFLO0FBQ1AsS0FBSztBQUNMLGdDQUFnQztBQUM5QiwyQ0FBMkM7QUFDekMsdUJBQXVCO0FBQ3ZCLGNBQWM7QUFDaEIsS0FBSztBQUNQLEtBQUs7QUFDTCwrQkFBK0I7QUFDN0Isa0RBQWtEO0FBQ2hELHdCQUF3QjtBQUN4QiwyQkFBMkI7QUFDM0IsZ0JBQWdCO0FBQ2xCLEtBQUs7QUFDUCxLQUFLO0FBRUwsZ0RBQWdEO0FBQzlDLFlBQVk7QUFDViw4QkFBOEI7QUFDaEMsS0FBSztBQUNMLG9CQUFvQjtBQUNsQix5QkFBeUI7QUFDM0IsS0FBSztBQUNMLG9CQUFvQjtBQUNsQix3QkFBd0I7QUFDMUIsS0FBSztBQUNMLG9CQUFvQjtBQUNsQix1QkFBdUI7QUFDekIsS0FBSztBQUNMLG1CQUFtQjtBQUNqQiwrQkFBK0I7QUFDL0IsdUJBQXVCO0FBQ3ZCLG1DQUFtQztBQUNyQyxLQUFLO0FBQ0wsa0JBQWtCO0FBQ2hCLHVCQUF1QjtBQUN6QixLQUFLO0FBQ0wsb0JBQW9CO0FBQ2xCLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDckIsS0FBSztBQUNMLGtCQUFrQjtBQUNoQiwwQkFBMEI7QUFDMUIsbUJBQW1CO0FBQ3JCLEtBQUs7QUFDTCxZQUFZO0FBQ1YsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDakIsS0FBSztBQUNQLEtBQUs7QUFDTCwrQkFBK0I7QUFDN0Isb0JBQW9CO0FBQ2xCLGdCQUFnQjtBQUNsQixLQUFLO0FBRUwsa0JBQWtCO0FBQ2hCLGVBQWU7QUFDakIsS0FBSztBQUNQLEtBQUs7QUFDTCxnQ0FBZ0M7QUFDOUIsb0JBQW9CO0FBQ2xCLGdCQUFnQjtBQUNsQixLQUFLO0FBQ0wsbUNBQW1DO0FBQ2pDLGNBQWM7QUFDaEIsS0FBSztBQUNMLFlBQVk7QUFDVixpQkFBaUI7QUFDbkIsS0FBSztBQUNMLGlDQUFpQztBQUMvQixlQUFlO0FBQ2pCLEtBQUs7QUFDUCxLQUFLO0FBQ0wsZ0NBQWdDO0FBQzlCLG9CQUFvQjtBQUNsQixjQUFjO0FBQ2hCLEtBQUs7QUFDTCxrQkFBa0I7QUFDaEIsZUFBZTtBQUNqQixLQUFLO0FBQ0wsb0JBQW9CO0FBQ2xCLGdCQUFnQjtBQUNsQixLQUFLO0FBQ0wsWUFBWTtBQUNWLGlCQUFpQjtBQUNuQixLQUFLO0FBQ1AsS0FBSztBQUNMLGlEQUFpRDtBQUMvQyxZQUFZO0FBQ1YsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUNoQyxLQUFLO0FBQ0wsVUFBVTtBQUNSLHNCQUFzQjtBQUN4QixLQUFLO0FBQ0wsa0JBQWtCO0FBQ2hCLGVBQWU7QUFDakIsS0FBSztBQUVMLG9CQUFvQjtBQUNsQixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNqQixLQUFLO0FBRUwsb0JBQW9CO0FBQ2xCLGNBQWM7QUFDaEIsS0FBSztBQUNMLGdCQUFnQjtBQUNkLDBCQUEwQjtBQUM1QixLQUFLO0FBQ1AsS0FBSztBQUNMLGdEQUFnRDtBQUM5QyxZQUFZO0FBQ1Ysa0JBQWtCO0FBQ2xCLEtBQUs7QUFDUCxtQkFBbUI7QUFDakIsbUNBQW1DO0FBQ3JDLEtBQUs7QUFDUCxLQUFLO0FBQ0wsZ0RBQWdEO0FBQzlDLFlBQVk7QUFDVixrQkFBa0I7QUFDcEIsS0FBSztBQUNMLGlCQUFpQjtBQUNmLCtCQUErQjtBQUNqQyxLQUFLO0FBQ0wsaUJBQWlCO0FBQ2YsOEJBQThCO0FBQzlCLG1DQUFtQztBQUNyQyxLQUFLO0FBQ0wsbUJBQW1CO0FBQ2pCLG1DQUFtQztBQUNyQyxLQUFLO0FBQ1AsS0FBSztBQUVMLDJDQUEyQztBQUN6QyxnQkFBZ0I7QUFDaEIsdUJBQXVCO0FBQ3pCLEtBQUs7QUFFTCwyQ0FBMkM7QUFDekMsZ0JBQWdCO0FBQ2hCLHVCQUF1QjtBQUN6QixLQUFLO0FBQ0wsbUJBQW1CO0FBQ2pCLGVBQWU7QUFDZix5QkFBeUI7QUFDM0IsS0FBSztBQUNMLE9BQU87QUFDTCxpQkFBaUI7QUFDbkIsS0FBSztBQUNMLG1CQUFtQjtBQUNqQixzQkFBc0I7QUFDeEIsS0FBSztBQUNMLE1BQU07QUFDSiw4QkFBOEI7QUFDOUIsd0JBQXdCO0FBQzFCLEtBQUs7QUFDTCxjQUFjO0FBQ1osNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQiwwQkFBMEI7QUFDNUIsU0FBUztBQUNULG9CQUFvQjtBQUNsQixxQkFBcUI7QUFDdkIsS0FBSztBQUNMLG9CQUFvQjtBQUNsQixvQkFBb0I7QUFDdEIsS0FBSztBQUNMLGdEQUFnRDtBQUM5QyxvQkFBb0I7QUFDcEIsOEJBQThCO0FBQzlCLDJCQUEyQjtBQUMzQixrQkFBa0I7QUFDcEIsS0FBSztBQUNMLGlCQUFpQjtBQUNmLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDMUIsS0FBSztBQUNMLGlCQUFpQjtBQUNmLCtCQUErQjtBQUMvQixtQkFBbUI7QUFDbkIsOEJBQThCO0FBQ2hDLEtBQUs7QUFDTCxTQUFTO0FBQ1AsbUJBQW1CO0FBQ3JCLEtBQUs7QUFDTCxVQUFVO0FBQ1IsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2hCLEtBQUs7QUFDTCxtSEFBbUg7QUFDbkgsa0JBQWtCO0FBR2xCLGFBQWE7QUFDWCxlQUFlO0FBQ2YsMkJBQTJCO0FBQzNCLDRDQUE0QztBQUM1QyxxQkFBcUI7QUFDckIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QiwrQkFBK0I7QUFDL0IsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0IsOEJBQThCO0FBQzlCLGtDQUFrQztBQUNsQywrQkFBK0I7QUFDL0Isb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2Qsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDbkIsS0FBSztBQUVMLHNCQUFzQjtBQUVwQixtRUFBbUU7QUFDbkUsOENBQThDO0FBQzlDLGdCQUFnQjtBQUNoQixzQkFBc0I7QUFDeEIsS0FBSztBQUNMLGtCQUFrQjtBQUNoQixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzVCLEtBQUs7QUFDTCwrQ0FBK0M7QUFDN0MsY0FBYztBQUNaLHFCQUFxQjtBQUN2QixLQUFLO0FBQ0wsZUFBZTtBQUNiLHdDQUF3QztBQUN4QyxtQ0FBbUM7QUFDckMsS0FBSztBQUNQLEtBQUsiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5mb290ZXIgeyovXG4vKnRleHQtaW5kZW50OiAyMHB4OyovXG4vKmZvbnQtc2l6ZTogMTRweDsqL1xuLyp6LWluZGV4OiAxOyovXG4vKn0qL1xucCB7XG4gIGZvbnQ6IDQwMCAxNXB4LzEuOCBMYXRvLCBzYW5zLXNlcmlmO1xufVxuLmZvb3RlciB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXItbm8tcGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmZvb3Rlci1tYWluIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjIxZjFmOyovXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7XG4gIHBhZGRpbmc6IDAgMCAwO1xuICAvKnBhZGRpbmc6IDM1cHggMCAwOyovXG59XG4udG9wIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwXG59XG4vKi50b3AgeyovXG4gIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7Ki9cbi8qfSovXG4vKkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsqL1xuICAvKi5jb250YWluZXIgeyovXG4gICAgLyp3aWR0aDogMTE3MHB4OyovXG4gIC8qfSovXG4vKn0qL1xuXG4vKkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyovXG4gIC8qLmNvbnRhaW5lciB7Ki9cbiAgICAvKndpZHRoOiA5NzBweDsqL1xuICAvKn0qL1xuLyp9Ki9cbi8qQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7Ki9cbiAgLyouY29udGFpbmVyIHsqL1xuICAgIC8qd2lkdGg6IDc1MHB4OyovXG4gIC8qfSovXG4vKn0qL1xuLyouZm9vdGVyIHVsIHsqL1xuICAvKnBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7Ki9cbi8qfSovXG5cbi50b3AgLmZvb3Rlci1ibGsge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5yb3V0ZXItbGluay1hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICAvKmNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7Ki9cbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbmg0IHtcbiAgY29sb3I6ICMwZTBkMGRiZjtcbn1cbi5mb290ZXIgYSB7XG4gIC8qY29sb3I6ICNmZmZmZmY7Ki9cbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG4uZm9vdGVyIGE6aG92ZXIge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmltZy1zaXplIHtcbiAgLyptYXgtd2lkdGg6IDExMHB4OyovXG4gIC8qYmFja2dyb3VuZDogI0Y1RjVGNTsqL1xuICB3aWR0aDogMTAlO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogNTAlO1xuICBwYWRkaW5nLWJvdHRvbTogNjAlO1xufVxuLmxvZ28ge1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cblxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4uYmxvY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICAvKmhlaWdodDogNjN2aDsqL1xufVxuLyoucm93IHsqL1xuICAvKmRpc3BsYXk6IHRhYmxlOyovXG4gIC8qd2lkdGg6IDEwMCU7Ki9cbiAgLyptYXJnaW46IDA7Ki9cbi8qfSovXG4uYnJhbmQtbG9nbyB7XG4gIGZvbnQtZmFtaWx5OiBDaW56ZWwsIHNlcmlmO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjMDAwMDVjICFpbXBvcnRhbnQ7XG59XG4uZm9vdGVyLWxvZ28ge1xuICBmb250LWZhbWlseTogQ2luemVsLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwMDA1YyAhaW1wb3J0YW50O1xufVxuLmJyYW5kLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTU2cHg7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgLypwYWRkaW5nOiA4MHB4IDBweCAhaW1wb3J0YW50OyovXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgLmltZy1zaXplIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIC8qcGFkZGluZzogMCAhaW1wb3J0YW50OyovXG4gICAgLyptYXgtd2lkdGg6IDI1JTsqL1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIlO1xuICB9XG4gIC50b3AtcGFkZGluZyB7XG4gICAgcGFkZGluZy10b3A6IDU1cHg7XG4gIH1cbiAgZm9vdGVyIGg0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgLmJyYW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1NnB4O1xuICB9XG4gIC5icmFuZC1sb2dvIHtcbiAgICBmb250LWZhbWlseTogQ2luemVsLCBzZXJpZjtcbiAgICBmb250LXNpemU6MzVweDtcbiAgICBjb2xvcjogIzAwMDA1QyAhaW1wb3J0YW50O1xuICB9XG4gIHN1YiB7XG4gICAgYm90dG9tOiAtMC45ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpe1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDIlICFpbXBvcnRhbnQ7XG4gICAgLypwYWRkaW5nLXRvcDogNTVweCAhaW1wb3J0YW50OyovXG4gICAgLypwYWRkaW5nLWJvdHRvbTogNTVweCAhaW1wb3J0YW50OyovXG4gIH1cbiAgLnRvcC1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogNTVweDtcbiAgfVxuICAuYnJhbmQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTU2cHg7XG4gIH1cbiAgc3ViIHtcbiAgICBib3R0b206IC0xLjI1ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpe1xuICBzdWIge1xuICAgIGJvdHRvbTogLTEuMjVlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY3cHgpIHtcbiAgc3ViIHtcbiAgICBib3R0b206IC0xLjI1ZW07XG4gIH1cbn1cbi5tYXAge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuYSB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubGlua3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udGFjdC1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG4uY29udGFjdC1saW5rOmZvY3VzIHtcbiAgb3V0bGluZTogdHJhbnNwYXJlbnQgbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuLypCRUdJTk5JTkcgT0YgTkVXIENTUyovXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKi5mb290ZXItY29udGFpbmVyIGZvb3Rlci5ibG9jayB7Ki9cbiAgLypwYWRkaW5nOiAwOyovXG4vKn0qL1xuLypAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7Ki9cbiAgLyouZm9vdGVyLWNvbnRhaW5lciBmb290ZXIgLmNvbnRhaW5lciB7Ki9cbiAgICAvKnBvc2l0aW9uOiByZWxhdGl2ZTsqL1xuICAgIC8qISp0b3A6IDUwJTsqISovXG4gICAgLyotd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsqL1xuICAgIC8qLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Ki9cbiAgICAvKi1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Ki9cbiAgICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsqL1xuICAgIC8qcGFkZGluZy10b3A6IDYwcHggIWltcG9ydGFudDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDYwcHggIWltcG9ydGFudDsqL1xuICAvKn0qL1xuLyp9Ki9cbi8qQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7Ki9cbiAgLyouZm9vdGVyLWNvbnRhaW5lciBmb290ZXIgLmNvbnRhaW5lciB7Ki9cbiAgICAvKnBhZGRpbmctYm90dG9tOiA5MHB4ICFpbXBvcnRhbnQ7Ki9cbiAgLyp9Ki9cbiAgLyouZm9vdGVyLWNvbnRhaW5lciBmb290ZXIgLmNvbnRhaW5lciB7Ki9cbiAgICAvKnBhZGRpbmctYm90dG9tOiA5MHB4ICFpbXBvcnRhbnQ7Ki9cbiAgLyp9Ki9cbiAgLyouY29udGFpbmVyIHsqL1xuICAgIC8qd2lkdGg6IDk0MHB4OyovXG4gIC8qfSovXG4vKn0qL1xuXG4vKkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyovXG4gIC8qLmNvbnRhaW5lciB7Ki9cbiAgICAvKndpZHRoOiA5MCU7Ki9cbiAgLyp9Ki9cbi8qfSovXG5cbi8qQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyovXG4gIC8qLmJsb2NrIHsqL1xuICAgIC8qcG9zaXRpb246IHJlbGF0aXZlOyovXG4gICAgLypvdmVyZmxvdzogaGlkZGVuOyovXG4gICAgLyp3aWR0aDogMTAwJTsqL1xuICAgIC8qaGVpZ2h0OiA2M3ZoOyovXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1OyovXG4gIC8qfSovXG4vKn0qL1xuLypAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7Ki9cbiAgLyouZm9vdGVyLWNvbnRhaW5lciBmb290ZXIgLmZvb3Rlci1iYXNlIHsqL1xuICAgIC8qcG9zaXRpb246IGFic29sdXRlOyovXG4gICAgLypib3R0b206IDA7Ki9cbiAgLyp9Ki9cbi8qfSovXG4vKkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyovXG4gIC8qLmZvb3Rlci1jb250YWluZXIgZm9vdGVyIC5mb290ZXItYmFzZSAucm93IHsqL1xuICAgIC8qZGlzcGxheTogdGFibGU7Ki9cbiAgICAvKndpZHRoOiAxMDAlOyovXG4gICAgLyptYXJnaW46IDA7Ki9cbiAgLyp9Ki9cbi8qfSovXG4vKkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyovXG4gIC8qLmNvbC1tZC1wdXNoLTMgeyovXG4gICAgLypsZWZ0OiA0MCU7Ki9cbiAgLyp9Ki9cbi8qfSovXG4vKkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyovXG4gIC8qLmZvb3Rlci1jb250YWluZXIgZm9vdGVyIC5mb290ZXItYmFzZS1jb2x1bW4geyovXG4gICAgLypkaXNwbGF5OiB0YWJsZS1jZWxsOyovXG4gICAgLyp2ZXJ0aWNhbC1hbGlnbjogYm90dG9tOyovXG4gICAgLypmbG9hdDogbm9uZTsqL1xuICAvKn0qL1xuLyp9Ki9cbi8qQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkgeyovXG4gIC8qLmZvb3Rlci1jb250YWluZXIgZm9vdGVyIC5mb290ZXItYmFzZSB7Ki9cbiAgICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICAgIC8qYm90dG9tOiAwOyovXG4gIC8qfSovXG4vKn0qL1xuLypAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsqL1xuICAvKi5mb290ZXItY29udGFpbmVyIGZvb3RlciAuZm9vdGVyLWJhc2UtY29sdW1uIHsqL1xuICAgIC8qZGlzcGxheTogdGFibGUtY2VsbDsqL1xuICAgIC8qdmVydGljYWwtYWxpZ246IGJvdHRvbTsqL1xuICAgIC8qZmxvYXQ6IG5vbmU7Ki9cbiAgLyp9Ki9cbi8qfSovXG5cbi8qQG1lZGlhICBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsqL1xuICAvKi5ibG9jayB7Ki9cbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDU7Ki9cbiAgLyp9Ki9cbiAgLyouY29sLW1kLXB1c2gtNCB7Ki9cbiAgICAvKmxlZnQ6IDBweCAhaW1wb3J0YW50OyovXG4gIC8qfSovXG4gIC8qLmNvbC1tZC1wdWxsLTQgeyovXG4gICAgLypyaWdodDogMCAhaW1wb3J0YW50OyovXG4gIC8qfSovXG4gIC8qLmNvbC1tZC1wdXNoLTMgeyovXG4gICAgLypsZWZ0OiAwICFpbXBvcnRhbnQ7Ki9cbiAgLyp9Ki9cbiAgLyoucGhvbmUtbnVtYmVyIHsqL1xuICAgIC8qdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7Ki9cbiAgICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xuICAgIC8qbWFyZ2luOiAwIDAgMmVtIDJlbSAhaW1wb3J0YW50OyovXG4gIC8qfSovXG4gIC8qLmxvZ28td3JhcHBlcnsqL1xuICAgIC8qdGV4dC1hbGlnbjogY2VudGVyOyovXG4gIC8qfSovXG4gIC8qLmNvbC1tZC1wdWxsLTYgeyovXG4gICAgLypyaWdodDogMzAlICFpbXBvcnRhbnQ7Ki9cbiAgICAvKm1heC13aWR0aDogMzAlOyovXG4gIC8qfSovXG4gIC8qLmFsaWduLXJpZ2h0IHsqL1xuICAgIC8qbGVmdDogMTEwJSAhaW1wb3J0YW50OyovXG4gICAgLyptYXgtd2lkdGg6IDMwJTsqL1xuICAvKn0qL1xuICAvKi5saW5rcyB7Ki9cbiAgICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xuICAgIC8qcGFkZGluZzogMDsqL1xuICAvKn0qL1xuLyp9Ki9cbi8qQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7Ki9cbiAgLyouY29sLW1kLXB1bGwtNiB7Ki9cbiAgICAvKnJpZ2h0OiAxMjAlOyovXG4gIC8qfSovXG5cbiAgLyouYWxpZ24tcmlnaHQgeyovXG4gICAgLypsZWZ0OiAxNDIlOyovXG4gIC8qfSovXG4vKn0qL1xuLypAbWVkaWEgKG1pbi13aWR0aDogMTkwMHB4KSB7Ki9cbiAgLyouY29sLW1kLXB1bGwtNiB7Ki9cbiAgICAvKnJpZ2h0OiAxMTYlOyovXG4gIC8qfSovXG4gIC8qLmNvbC1tZC1wdXNoLTNbX25nY29udGVudC1jMl0geyovXG4gICAgLypsZWZ0OiA0NCU7Ki9cbiAgLyp9Ki9cbiAgLyouYmxvY2sgeyovXG4gICAgLypoZWlnaHQ6IDQydmg7Ki9cbiAgLyp9Ki9cbiAgLyouYWxpZ24tcmlnaHRbX25nY29udGVudC1jMl0geyovXG4gICAgLypsZWZ0OiAxMzAlOyovXG4gIC8qfSovXG4vKn0qL1xuLypAbWVkaWEgKG1pbi13aWR0aDogMjEwMHB4KSB7Ki9cbiAgLyouY29sLW1kLXB1c2gtMyB7Ki9cbiAgICAvKmxlZnQ6IDQ1JTsqL1xuICAvKn0qL1xuICAvKi5hbGlnbi1yaWdodCB7Ki9cbiAgICAvKmxlZnQ6IDEyOSU7Ki9cbiAgLyp9Ki9cbiAgLyouY29sLW1kLXB1bGwtNiB7Ki9cbiAgICAvKnJpZ2h0OiAxMTklOyovXG4gIC8qfSovXG4gIC8qLmJsb2NrIHsqL1xuICAgIC8qaGVpZ2h0OiA1MHZoOyovXG4gIC8qfSovXG4vKn0qL1xuLypAbWVkaWEgIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHsqL1xuICAvKi5ibG9jayB7Ki9cbiAgICAvKmhlaWdodDogNzV2aDsqL1xuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDVkNTsqL1xuICAvKn0qL1xuICAvKi5yb3cgeyovXG4gICAgLypwYWRkaW5nLXRvcDogMTVweDsqL1xuICAvKn0qL1xuICAvKi5hbGlnbi1yaWdodCB7Ki9cbiAgICAvKmxlZnQ6IDE0MiU7Ki9cbiAgLyp9Ki9cblxuICAvKi5jb2wtbWQtcHVsbC02IHsqL1xuICAgIC8qcmlnaHQ6IDExNyU7Ki9cbiAgICAvKndpZHRoOiAzNyU7Ki9cbiAgLyp9Ki9cblxuICAvKi5jb2wtbWQtcHVzaC0zIHsqL1xuICAgIC8qbGVmdDogMzUlOyovXG4gIC8qfSovXG4gIC8qLmNvbnRhaW5lciB7Ki9cbiAgICAvKnBhZGRpbmc6IDAgIWltcG9ydGFudDsqL1xuICAvKn0qL1xuLyp9Ki9cbi8qQG1lZGlhICBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIzcHgpIHsqL1xuICAvKi5ibG9jayB7Ki9cbiAgICAvKmhlaWdodDogMTQ1dmg7Ki9cbiAgICAvKn0qL1xuICAvKi5waG9uZS1udW1iZXIgeyovXG4gICAgLyptYXJnaW46IDAgMCAyZW0gNWVtICFpbXBvcnRhbnQ7Ki9cbiAgLyp9Ki9cbi8qfSovXG4vKkBtZWRpYSAgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7Ki9cbiAgLyouYmxvY2sgeyovXG4gICAgLypoZWlnaHQ6IDgwdmggOyovXG4gIC8qfSovXG4gIC8qLmJyYW5kLWxvZ28geyovXG4gICAgLypmb250LXNpemU6IDI4cHggIWltcG9ydGFudDsqL1xuICAvKn0qL1xuICAvKi5icmFuZC10ZXh0IHsqL1xuICAgIC8qZm9udC1zaXplOiA5cHggIWltcG9ydGFudDsqL1xuICAgIC8qbWFyZ2luLWxlZnQ6IC0xMTJweCAhaW1wb3J0YW50OyovXG4gIC8qfSovXG4gIC8qLnBob25lLW51bWJlciB7Ki9cbiAgICAvKm1hcmdpbjogMCAwIDJlbSAyZW0gIWltcG9ydGFudDsqL1xuICAvKn0qL1xuLyp9Ki9cblxuLyouZm9vdGVyLWNvbnRhaW5lciBmb290ZXIgLmZvb3Rlci1iYXNlIHsqL1xuICAvKndpZHRoOiAxMDAlOyovXG4gIC8qcGFkZGluZzogMzBweCAxMHB4OyovXG4vKn0qL1xuXG4vKi5mb290ZXItY29udGFpbmVyIGZvb3RlciAuZm9vdGVyLWJhc2UgeyovXG4gIC8qd2lkdGg6IDEwMCU7Ki9cbiAgLypwYWRkaW5nOiAzMHB4IDEwcHg7Ki9cbi8qfSovXG4vKi5waG9uZS1udW1iZXIgeyovXG4gIC8qd2lkdGg6IDgwJTsqL1xuICAvKm1hcmdpbjogMCAwIDJlbSAtMmVtOyovXG4vKn0qL1xuLyppIHsqL1xuICAvKmNvbG9yOiBibGFjazsqL1xuLyp9Ki9cbi8qLnBvc2l0aW9uLXRvcCB7Ki9cbiAgLyptYXJnaW4tdG9wOiAtMzRweDsqL1xuLyp9Ki9cbi8qYXsqL1xuICAvKmNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7Ki9cbiAgLypmb250LXdlaWdodDogbm9ybWFsOyovXG4vKn0qL1xuLyohKi5yb3cgeyohKi9cbiAgLyohKm1hcmdpbi1yaWdodDogLTMwcHg7KiEqL1xuICAvKiEqbWFyZ2luLWxlZnQ6IC0zMHB4OyohKi9cbiAgLyohKnBhZGRpbmctdG9wOiAzMHB4OyohKi9cbi8qISp9KiEqL1xuLyouY29sLW1kLXB1bGwtNCB7Ki9cbiAgLypyaWdodDogMzMuMzMzMzMlOyovXG4vKn0qL1xuLyouY29sLW1kLXB1c2gtNCB7Ki9cbiAgLypsZWZ0OiAzMy4zMzMzMyU7Ki9cbi8qfSovXG4vKi5mb290ZXItY29udGFpbmVyIGZvb3RlciAuZm9vdGVyLWNvbHVtbiBoNCB7Ki9cbiAgLypmb250LXNpemU6IDE4cHg7Ki9cbiAgLyp0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyovXG4gIC8qbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTsqL1xuICAvKm1hcmdpbi10b3A6IDA7Ki9cbi8qfSovXG4vKi5icmFuZC10ZXh0IHsqL1xuICAvKmZvbnQtc2l6ZTogMTJweDsqL1xuICAvKm1hcmdpbi1sZWZ0OiAtMTU2cHg7Ki9cbi8qfSovXG4vKi5icmFuZC1sb2dvIHsqL1xuICAvKmZvbnQtZmFtaWx5OiBDaW56ZWwsIHNlcmlmOyovXG4gIC8qZm9udC1zaXplOjM1cHg7Ki9cbiAgLypjb2xvcjogIzAwMDA1QyAhaW1wb3J0YW50OyovXG4vKn0qL1xuLypzdWIgeyovXG4gIC8qYm90dG9tOiAtMC45ZW07Ki9cbi8qfSovXG4vKi5yb3cgeyovXG4gIC8qZGlzcGxheTogdGFibGU7Ki9cbiAgLyp3aWR0aDogMTAwJTsqL1xuICAvKm1hcmdpbjogMDsqL1xuLyp9Ki9cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qRU5EIE9GIE5FVyBDU1MqL1xuXG5cbi8qLmZvb3RlciB7Ki9cbiAgLyp6LWluZGV4OiAxOyovXG4gIC8qISpmb250LXN0eWxlOiBpdGFsaWM7KiEqL1xuICAvKiEqZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7KiEqL1xuICAvKmZvbnQtd2VpZ2h0OiAzMDA7Ki9cbiAgLypsZXR0ZXItc3BhY2luZzogNHB4OyovXG4gIC8qdGV4dC1pbmRlbnQ6IDIwcHg7Ki9cbiAgLypmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsqL1xuICAvKmhlaWdodDogNDVweDsqL1xuICAvKndpZHRoOiAxMDAlOyovXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogbm9uZTsqL1xuICAvKmJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7Ki9cbiAgLypiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDsqL1xuICAvKmJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlOyovXG4gIC8qcG9zaXRpb246IGZpeGVkOyovXG4gIC8qYm90dG9tOiAwcHQ7Ki9cbiAgLypsZWZ0OiAwcHQ7Ki9cbiAgLypiYWNrZ3JvdW5kOiAjMDAyNzU0OyovXG4gIC8qY29sb3I6ICNmNWY1ZjU7Ki9cbiAgLypvcGFjaXR5OiAwLjg7Ki9cbi8qfSovXG5cbi8qLmZvb3Rlci1jb250ZW50cyB7Ki9cblxuICAvKmhlaWdodDoyNHB4OyAhKiBSZXBsYWNlIHdpdGggdGhlIGhlaWdodCB5b3VyIGZvb3RlciBzaG91bGQgYmUqISovXG4gIC8qd2lkdGg6IDEwMCU7ICEqIFZpc2libGUgd2lkdGggb2YgZm9vdGVyICohKi9cbiAgLyptYXJnaW46YXV0bzsqL1xuICAvKnBhZGRpbmctdG9wOiAxMHB4OyovXG4vKn0qL1xuLyouZm9vdGVyLWxpbmsgeyovXG4gIC8qY29sb3I6ICNmNWY1ZjU7Ki9cbiAgLyp0ZXh0LWRlY29yYXRpb246IG5vbmU7Ki9cbi8qfSovXG4vKkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHsqL1xuICAvKi5wYWRkaW5nIHsqL1xuICAgIC8qcGFkZGluZy10b3A6IDBweDsqL1xuICAvKn0qL1xuICAvKi5mb290ZXIgcCB7Ki9cbiAgICAvKmZvbnQ6IDQwMCAxMnB4LzEuOCBMYXRvLCBzYW5zLXNlcmlmOyovXG4gICAgLyohKmZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50OyohKi9cbiAgLyp9Ki9cbi8qfSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"block\">\n  <div class=\"container\">\n    <div class=\"row top-padding\">\n      <div class=\"col-md-4 text-center\">\n        <h4>JACOB LEI</h4>\n        <p>Knoxville Professional\n          <br>\n          Property Management</p>\n      </div>\n      <div routerLink=\"/contact\" class=\"col-md-4 contact-link col-md-push-4 text-center\">\n        <h4>CONTACT US</h4>\n        <p>\n          <a  title=\"Call (865) 675-7880\" >(865) 675-7880</a>\n          <br>\n          <a title=\"Send Us Email\" id=\"footer-email\" href=\"mailto:admin@jacoblei.com\">admin@jacoblei.com</a>\n          <br>\n          <span>\n             500 Ebenezer Road\n            <br>\n            Knoxville TN,  37923\n          </span>\n        </p>\n      </div>\n      <div class=\"col-xss-12 col-sm-12 col-md-4 col-md-pull-4 text-center\">\n        <h4>LOCATION</h4>\n        <div class=\"map\">\n          <iframe width=\"100%\" height=\"100\" src=\"https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=500%20Ebenezer%20Rd.%20Knoxville%2C%20TN+(Jacob%20Lei%20Property%20Management)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe></div>\n      </div>\n    </div>\n\n    <div class=\"footer-base\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-push-3\">\n          <div class=\"logo-wrapper text-center\">\n            <a class=\"brand-logo\"  routerLink=\"/home\">Jacob Lei <sub class=\"brand-text\">Property Management</sub></a>\n          </div>\n          <div class=\"footer-menu text-center\">\n            <p class=\"phone-number\">\n              T: 865.675.7880 | F: 866.703.7882\n            </p>\n          </div>\n          <div class=\"links-wrapper\">\n            <ul class=\"links\">\n            <a href=\"\" target=\"_blank\"><i class=\"fa fa-twitter fa-2x\" aria-hidden=\"true\"></i></a>\n            <a href=\"\" target=\"_blank\"><i class=\"fa fa-facebook fa-2x\"></i></a>\n            <a href=\"\" target=\"_blank\"><i class=\"fa fa-instagram fa-2x\"></i></a>\n          </ul>\n          </div>\n          <!--<div class=\"visible-md col-md-4 col-md-pull-6 position-top\">-->\n            <!--<h6>Copyright 2018</h6>-->\n          <!--</div>-->\n          <!--<div class=\"visible-md  col-md-4 position-top align-right\">-->\n            <!--<h6>Jacob Lei</h6>-->\n          <!--</div>-->\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n<!--<footer class=\"block\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"footer-column col-md-4 text-center\">-->\n        <!--<h4>JACOB LEI</h4>-->\n        <!--<p>Knoxville Professional-->\n          <!--<br>-->\n          <!--Property Management</p>-->\n      <!--</div>-->\n      <!--<div class=\"footer-column col-md-4 col-md-push-4 text-center\">-->\n        <!--<h4>CONTACT US</h4>-->\n        <!--<p>-->\n          <!--<a href=\"https://172.27.1.47:5001/webclient/#/call?phone= 8656757880\" title=\"Call (865) 675-7880 with 3CX Web Client\" tcxhref=\"https://172.27.1.47:5001/webclient/#/call?phone= 8656757880\" target=\"_blank\">(865) 675-7880</a>-->\n          <!--<br>-->\n          <!--<a id=\"footer-email\" href=\"mailto:admin@jacoblei.com\">admin@jacoblei.com</a>-->\n          <!--<br>-->\n          <!--<span>-->\n             <!--346 Ebenezer Road-->\n            <!--<br>-->\n            <!--Knoxville TN,  37923-->\n          <!--</span>-->\n        <!--</p>-->\n      <!--</div>-->\n      <!--<div class=\"footer-column col-md-4 col-md-pull-4 text-center\">-->\n        <!--<h4>LOCATION</h4>-->\n        <!--<div class=\"map\">-->\n          <!--<iframe width=\"100%\" height=\"100\" src=\"https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=346%20Ebenezer%20Rd.%20Knoxville%2C%20TN+(Jacob%20Lei%20Property%20Management)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe></div>-->\n      <!--</div>-->\n    <!--</div>-->\n\n    <!--<div class=\"footer-base\">-->\n      <!--<div class=\"row\">-->\n        <!--<div class=\"footer-base-column col-md-6 col-md-push-3 align-center footer-logos-menu-container\">-->\n          <!--<div class=\"logo-wrapper\">-->\n            <!--<a class=\"brand-logo\"  routerLink=\"/home\">Jacob Lei <sub class=\"brand-text\">Property Management</sub></a>-->\n          <!--</div>-->\n          <!--<div class=\"footer-menu\">-->\n            <!--<p class=\"phone-number\">-->\n              <!--T: 865.675.7880 | F: 866.703.7882-->\n            <!--</p>-->\n          <!--</div>-->\n          <!--<ul class=\"links\">-->\n            <!--<a href=\"\" target=\"_blank\"><i class=\"fa fa-twitter fa-2x\" aria-hidden=\"true\"></i></a>-->\n            <!--<a href=\"\" target=\"_blank\"><i class=\"fa fa-facebook fa-2x\"></i></a>-->\n            <!--<a href=\"\" target=\"_blank\"><i class=\"fa fa-instagram fa-2x\"></i></a>-->\n          <!--</ul>-->\n          <!--<div class=\"visible-md footer-base-column col-md-4 col-md-pull-6 position-top\">-->\n            <!--<h6>Copyright 2018</h6>-->\n          <!--</div>-->\n          <!--<div class=\"visible-md footer-base-column col-md-4 position-top align-right\">-->\n            <!--<h6>Jacob Lei</h6>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n\n<!--<div class=\"container-fluid footer-no-padding\">-->\n  <!--<div class=\"footer-main\">-->\n\n    <!--<div class=\"container top\">-->\n      <!--<div class=\"col-xs-12 col-sm-12 col-md-2 footer-blk pull-left logo\">-->\n        <!--<img class=\"img-size\" src=\"assets/img/JL.png\">-->\n      <!--</div>-->\n      <!--<div class=\"col-xs-12 col-sm-12 col-md-3 footer-blk\">-->\n          <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n            <!--<h4>Services</h4>-->\n          <!--</div>-->\n          <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n            <!--<ul>-->\n              <!--<li><a routerLinkActive=\"router-link-active\" routerLink=\"/single\">Single Family Property Management</a></li>-->\n            <!--</ul>-->\n          <!--</div>-->\n          <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n            <!--<ul>-->\n              <!--<li><a routerLinkActive=\"router-link-active\" routerLink=\"/multi\">Multi Family Property Management</a></li>-->\n            <!--</ul>-->\n          <!--</div>-->\n          <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n            <!--<h4>Properties</h4>-->\n          <!--</div>-->\n          <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n            <!--<ul>-->\n              <!--<li><a routerLinkActive=\"router-link-active\" routerLink=\"/properties\">Our Properties</a></li>-->\n            <!--</ul>-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--<div class=\"col-xs-12 col-sm-12 col-md-3 footer-blk\">-->\n        <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n          <!--<h4>Tenants</h4>-->\n        <!--</div>-->\n        <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n          <!--<ul>-->\n          <!--<li><a routerLinkActive=\"router-link-active\" routerLink=\"/payment\">Payment</a></li>-->\n          <!--</ul>-->\n        <!--</div>-->\n        <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n          <!--<ul>-->\n            <!--<li><a routerLinkActive=\"router-link-active\" routerLink=\"/maintenance\">Maintenance Request</a></li>-->\n          <!--</ul>-->\n        <!--</div>-->\n        <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n          <!--<ul>-->\n            <!--<li><a routerLinkActive=\"router-link-active\" routerLink=\"/notice\">Notice of Vacating</a></li>-->\n          <!--</ul>-->\n        <!--</div>-->\n        <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n          <!--<h4>Contact Us</h4>-->\n        <!--</div>-->\n        <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n          <!--<ul>-->\n            <!--<li><a routerLinkActive=\"router-link-active\" routerLink=\"/contact\">Contact Us</a></li>-->\n          <!--</ul>-->\n        <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"col-xs-12 col-sm-12 col-md-3 footer-blk\">-->\n        <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n          <!--<h4>Address</h4>-->\n        <!--</div>-->\n        <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n          <!--<p>Jacob Lei Property Management</p>-->\n          <!--<a class=\"footer-link\" href=\"http://maps.google.com/?q=346 Ebenezer Rd. Knoxville, TN 37923\"> 346 Ebenezer Rd.<br> Knoxville, TN <br>37923</a>-->\n          <!--<p>T: 865.675.7880</p>-->\n          <!--<p>F: 866.703.7882</p>-->\n          <!--<p>E: admin@jacoblei.com</p>-->\n        <!--</div>-->\n      <!--</div>-->\n      <!--&lt;!&ndash;</div>&ndash;&gt;-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n</footer>\n<!--<p class=\"footer-contents padding\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> (865) 675-7880   <a class=\"footer-link\" href=\"http://maps.google.com/?q=346 Ebenezer Rd. Knoxville, TN 37923\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> 346 Ebenezer Rd. Knoxville, TN 37923 </a></p>-->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-0 {\n  height: 100% !important;\n}\nh2 {\n  color: #00005c;\n}\np {\n  font-size: 17px;\n  color: #1c1c1c !important;\n  text-align: left;\n  padding-left: 80px;\n  padding-right: 80px;\n}\n/*.text-padding {*/\n/*padding: 50px 5px 60px 5px*/\n/*}*/\n@media only screen and (max-width: 414px) {\n  p {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n@media only screen and (min-width: 1200px) {\n    .text-padding {\n      padding: 50px 145px 60px;\n    }\n  }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0NBQ3pCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCO0FBQ0QsbUJBQW1CO0FBQ2pCLDhCQUE4QjtBQUVoQyxLQUFLO0FBQ0w7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7R0FDckI7Q0FDRjtBQUNDO0lBQ0U7TUFDRSx5QkFBeUI7S0FDMUI7R0FDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy0wIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5oMiB7XG4gIGNvbG9yOiAjMDAwMDVjO1xufVxucCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMxYzFjMWMgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xufVxuLyoudGV4dC1wYWRkaW5nIHsqL1xuICAvKnBhZGRpbmc6IDUwcHggNXB4IDYwcHggNXB4Ki9cblxuLyp9Ki9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAudGV4dC1wYWRkaW5nIHtcbiAgICAgIHBhZGRpbmc6IDUwcHggMTQ1cHggNjBweDtcbiAgICB9XG4gIH1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-0\" style=\"z-index: 1\">\n  <div class=\"row\">\n    <app-carousel></app-carousel>\n  </div>\n  <div class=\"row\" style=\"background-color: #F5F5F5;\">\n    <div class=\"col-sm-12 col-md-12 text-padding\">\n      <h2 class=\"text-center\">Professional Management. Personal Service.</h2>\n<br>\n      <p>\n        Jacob Lei is your premier full service property management company serving East TN.\n        Whether you are a seasoned real estate investor or the owner of one rental, we take the hassles and worry of being\n        a landlord off your shoulders. Owners and tenants alike, value our knowledge of the market and the personalized\n        attention they get from our friendly, local team. We tend to your property so that you can minimize your risk\n        and maximize your profits. We specialize in multi-family, single family, and student housing properties.\n<br>\n        Jacob Lei is a locally owned management company based out of Knoxville, TN. As a full service management company\n        we use innovative state of the art management systems to handle advertising, tenant placement, leasing,\n        funds management, as well as accounting and reporting for the properties in our care. We offer unparalleled\n        performance for our owners by providing stress-free worry-free service.\n<br><br>\n\n        <!--<strong>Professional Management Service. Professional Service.</strong>-->\n      </p>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/maintenance/maintenance.component.css":
/*!*******************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-area {\n  width: 100%;\n  height: 90px;\n}\nbg-2 p {\n  color: #0000006e;\n}\n@media only screen and (max-width: 486px) {\n  .padding-container {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .padding-content {\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n\n}\n@media only screen and (max-width: 764px) {\n  .md-padding-content {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  .btn {\n    width: 100% !important;\n  }\n\n}\n@media only screen and (max-width: 989px){\n  .lg-padding-content {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n}\n.invalid {\n  color: red;\n  padding-left: 15px;\n}\n.btn {\n  margin-right: 0px;\n  border-radius: 3px;\n  border: transparent;\n  box-shadow: 2px 3px 6px 1px #000000c2;\n}\n.modal-backdrop {\n  z-index: 99999;\n  position: absolute !important;\n}\n.modal-body {\n  z-index: 1029;\n}\n.modal-dialog {\n  padding-top: 8%;\n}\n.modal-class {\n  display: none;\n  z-index: 9999;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRlbmFuY2UvbWFpbnRlbmFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0dBQ3BCO0VBQ0Q7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0dBQ3BCOztDQUVGO0FBQ0Q7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7R0FDbkI7RUFDRDtJQUNFLHVCQUF1QjtHQUN4Qjs7Q0FFRjtBQUNEO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0dBQ25CO0NBQ0Y7QUFFRDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHNDQUFzQztDQUN2QztBQUVEO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtDQUMvQjtBQUVEO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLGNBQWM7RUFDZCxjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9tYWludGVuYW5jZS9tYWludGVuYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG59XG5iZy0yIHAge1xuICBjb2xvcjogIzAwMDAwMDZlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODZweCkge1xuICAucGFkZGluZy1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAucGFkZGluZy1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gIH1cblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjRweCkge1xuICAubWQtcGFkZGluZy1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICB9XG4gIC5idG4ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODlweCl7XG4gIC5sZy1wYWRkaW5nLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gIH1cbn1cblxuLmludmFsaWQge1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggMXB4ICMwMDAwMDBjMjtcbn1cblxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgei1pbmRleDogOTk5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHotaW5kZXg6IDEwMjk7XG59XG4ubW9kYWwtZGlhbG9nIHtcbiAgcGFkZGluZy10b3A6IDglO1xufVxuXG4ubW9kYWwtY2xhc3Mge1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiA5OTk5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/maintenance/maintenance.component.html":
/*!********************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-2 padding-container\" xmlns=\"\">\n  <form [formGroup]=\"maintenanceForm\">\n    <div class=\"row row-padding padding-content md-padding-content lg-padding-content\">\n      <div class=\"panel panel-info\">\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6  panel-heading\">\n          <div class= \"col-xs-12 col-sm-12 col-md-6 col-lg-6\"><span><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i></span> Maintenance Request\n          </div>\n        </div>\n        <div class=\"panel-body panel-box\">\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <strong>Tenant Name</strong>\n            </div>\n            <div class=\"col-sm-12 col-md-12\">\n              <input autocomplete=\"off\" type=\"text\" class=\"form-control\"  formControlName=\"tenName\" name=\"name\" id=\"name\" (input)=\"checkInputError()\" value=\"\" required />\n            </div>\n            <!--<span *ngIf=\"maintenanceForm.controls.tenName.errors\" class=\"invalid\">Name of Tenant Required</span>-->\n            <span class=\"alert-warning small\" *ngIf=\"inputNameError !== null\">{{inputNameError}}</span>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <strong>Rental Property Address</strong>\n            </div>\n            <div class=\"col-sm-12 col-md-12\">\n              <input autocomplete=\"off\" type=\"text\" class=\"form-control\" formControlName=\"appAddress\" (input)=\"checkInputError()\" name=\"address\" id=\"address\" value=\"\" required />\n            </div>\n            <span class=\"alert-warning small\" *ngIf=\"inputAddressError !== null\">{{inputAddressError}}</span>\n            <!--<span *ngIf=\"maintenanceForm.controls.appAddress.errors\" class=\"invalid\">Rental Property Address Required</span>-->\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <strong>Your Contact Number</strong>\n            </div>\n            <div class=\"col-sm-12 col-md-12\">\n              <input autocomplete=\"off\" type=\"number\" class=\"form-control\" formControlName=\"phoneNumber\" name=\"phoneNumber\" (input)=\"checkInputError()\" id=\"phoneNumber\" value=\"\" required />\n            </div>\n            <span class=\"alert-warning small\" *ngIf=\"inputPhoneError !== null\">{{inputPhoneError}}</span>\n            <!--<span *ngIf=\"maintenanceForm.controls.phoneNumber.errors\" class=\"invalid\">Phone Number Required</span>-->\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <strong>Your ​Email</strong>\n            </div>\n            <div class=\"col-sm-12 col-md-12\">\n              <input autocomplete=\"off\" type=\"text\" class=\"form-control\" formControlName=\"email\" name=\"email\" (input)=\"checkInputError()\" id=\"email\" value=\"\" required />\n            </div>\n            <span class=\"alert-warning small\" *ngIf=\"inputEmailError !== null\">{{inputEmailError}}</span>\n            <!--<span *ngIf=\"maintenanceForm.controls.emailAddress.errors\" class=\"invalid\">Invalid Email</span>-->\n            <!--<span *ngIf=\"maintenanceForm.controls.emailAddress.required\" class=\"invalid\">Email Required</span>-->\n          </div>\n\n          <div class=\"form-group\">\n            <div class='col-xs-12 col-md-6 col-lg-6 form-group expiration required'>\n              <label class='control-label'>Repair Issue</label>\n              <textarea id=\"message\" name=\"message\" formControlName=\"textArea\" class=\"text-area\" (input)=\"checkInputError()\" required></textarea>\n              <span class=\"alert-warning small\" *ngIf=\"inputTextError !== null\">{{inputTextError}}</span>\n              <button type=\"button\" (click)=\"sendEmail(this)\" class=\"btn btn-primary btn-lg btn-submit-fix pull-right\" data-toggle=\"modal\" href=\"#modal\" [disabled]=\"!maintenanceForm.valid\">Submit</button>\n            </div>\n            <div class=\"col-sm-12 col-md-12 col-lg-12 pull-left\">\n              <div>\n                <!--<a class=\"btn btn-primary\" >Trigger modal</a>-->\n                <!--data-toggle=\"modal\" href=\"#modal\" (click)=\"showInfoModal()\"-->\n              </div>\n              <p style=\"font-size: 14px\">\n                <strong>Note:</strong> An EMERGENCY ISSUE is related to...<br>\n                <strong>A.</strong> Heating and Air with extreme outside temperatures.\n                However, there are no emergency HVAC services, after hours that any HVAC company offers so,\n                the HVAC issue will have to be addressed during the next day.<br>\n                <strong>B.</strong> Major Water Leak that cannot be controlled by turning off a water valve to the fixture (Faucet, Commode, Washing Machine Hose, etc...)<br>\n                <strong>C.</strong> Fire... CALL 911 IMMEDIATELY\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<!--<div class=\"container-fluid\" >-->\n\n  <div class=\"modal fade\" id=\"modal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h3 class=\"modal-title\">{{messageHeader}}</h3>\n        </div>\n        <div class=\"modal-body\">\n          <h5>{{messageBody}}</h5>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n<!--</div>-->\n\n"

/***/ }),

/***/ "./src/app/maintenance/maintenance.component.ts":
/*!******************************************************!*\
  !*** ./src/app/maintenance/maintenance.component.ts ***!
  \******************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent(formBuilder, appService) {
        this.formBuilder = formBuilder;
        this.appService = appService;
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
        this.maintenanceForm = this.formBuilder.group({
            'tenName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'appAddress': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'textArea': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'phoneNumber': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^@]*@[^@]*')]]
        });
    };
    MaintenanceComponent.prototype.checkInputError = function () {
        if (this.maintenanceForm.controls.tenName.value === '') {
            this.inputNameError = 'Name Required';
        }
        else {
            this.inputNameError = null;
        }
        if (this.maintenanceForm.controls.appAddress.value === '') {
            this.inputAddressError = 'Property Address Required';
        }
        else {
            this.inputAddressError = null;
        }
        if (this.maintenanceForm.controls.phoneNumber.value === '') {
            this.inputPhoneError = 'Phone Number Required';
        }
        else {
            this.inputPhoneError = null;
        }
        if (this.maintenanceForm.controls.email.value === '') {
            this.inputEmailError = 'Email Address Required';
        }
        else {
            this.inputEmailError = null;
        }
        if (this.maintenanceForm.controls.textArea.value === '') {
            this.inputTextError = 'Repair Issue Required';
        }
        else {
            this.inputTextError = null;
        }
    };
    MaintenanceComponent.prototype.sendEmail = function (data) {
        var _this = this;
        this.appService.sendMaintEmail(data.maintenanceForm.value).subscribe(function (data) {
            console.log('data', data);
            if (data.success) {
                _this.emailSuccess = true;
                _this.messageHeader = 'Thank You';
                _this.messageBody = 'We received your email';
                _this.maintenanceForm.reset();
            }
            else if (data.error) {
                _this.emailSuccess = false;
                _this.messageHeader = 'Error';
                _this.messageBody = 'Something went wrong. Please, check your form and try again';
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], MaintenanceComponent.prototype, "maintenanceForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MaintenanceComponent.prototype, "showModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalInfo'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MaintenanceComponent.prototype, "modal", void 0);
    MaintenanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintenance',
            template: __webpack_require__(/*! ./maintenance.component.html */ "./src/app/maintenance/maintenance.component.html"),
            styles: [__webpack_require__(/*! ./maintenance.component.css */ "./src/app/maintenance/maintenance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/multi/multi.component.css":
/*!*******************************************!*\
  !*** ./src/app/multi/multi.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-padding {\n  padding-top: 20%;\n}\np {\n  color: #333 !important;\n  padding-top: 3%;\n}\nh3 {\n  color: #444 !important;\n  letter-spacing: 4px;\n}\nh4 {\n  margin-bottom: 0px !important;\n  letter-spacing: 2px;\n  font-size: 18px;\n  color: #444;\n}\n.container {\n  /*padding-top: 10%;*/\n  padding: 7% 0 !important;\n  /*padding-top: 10% !important;*/\n  /*padding-bottom: 10% !important;*/\n}\n.container-content {\n  /*background-color: #ddd;*/\n  padding: 11px !important;\n  border-radius: 3px;\n\n}\ntd {\n  font: 400 15px/1.8 Lato, sans-serif;\n  color: #333 !important;\n  font-style: italic;\n  letter-spacing: 0px;\n  width: 50%;\n  padding: 1px 0px 4px 4px !important;\n  border: none !important;\n  border-color: transparent !important;\n}\ntr {\n  font: 400 15px/1.8 Lato, sans-serif;\n  margin-bottom: 0px !important;\n  letter-spacing: 2px;\n  font-size: 18px;\n  color: #444;\n}\n.table>thead>tr>th {\n  border: none !important;\n  border-color: transparent !important;\n}\nthead {\n  border-color: transparent !important;\n}\n@media only screen and (max-width: 640px) {\n  .container-content {\n    margin: 2%;\n  }\n  .container {\n    padding-top: 10% !important;\n    padding-bottom: 10% !important;\n  }\n}\n.img-responsive {\n  max-width: 60%;\n  margin-left: 20%;\n}\ntable {\n  border-spacing: 25px 0px !important;\n  border-collapse: separate;\n}\ntd {\n  padding: 0px 55px 0px 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGkvbXVsdGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxtQ0FBbUM7Q0FDcEM7QUFFRDtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsbUJBQW1COztDQUVwQjtBQUNEO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLHFDQUFxQztDQUN0QztBQUNEO0VBQ0Usb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLHFDQUFxQztDQUN0QztBQUNEO0VBQ0UscUNBQXFDO0NBQ3RDO0FBQ0Q7RUFDRTtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0UsNEJBQTRCO0lBQzVCLCtCQUErQjtHQUNoQztDQUNGO0FBRUQ7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxxQ0FBcUM7Q0FDdEMiLCJmaWxlIjoic3JjL2FwcC9tdWx0aS9tdWx0aS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG59XG5wIHtcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDMlO1xufVxuaDMge1xuICBjb2xvcjogIzQ0NCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuaDQge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzQ0NDtcbn1cbi5jb250YWluZXIge1xuICAvKnBhZGRpbmctdG9wOiAxMCU7Ki9cbiAgcGFkZGluZzogNyUgMCAhaW1wb3J0YW50O1xuICAvKnBhZGRpbmctdG9wOiAxMCUgIWltcG9ydGFudDsqL1xuICAvKnBhZGRpbmctYm90dG9tOiAxMCUgIWltcG9ydGFudDsqL1xufVxuXG4uY29udGFpbmVyLWNvbnRlbnQge1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNkZGQ7Ki9cbiAgcGFkZGluZzogMTFweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbn1cbnRkIHtcbiAgZm9udDogNDAwIDE1cHgvMS44IExhdG8sIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMXB4IDBweCA0cHggNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG50ciB7XG4gIGZvbnQ6IDQwMCAxNXB4LzEuOCBMYXRvLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzQ0NDtcbn1cbi50YWJsZT50aGVhZD50cj50aCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG50aGVhZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmNvbnRhaW5lci1jb250ZW50IHtcbiAgICBtYXJnaW46IDIlO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmltZy1yZXNwb25zaXZlIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDI1cHggMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG59XG50ZCB7XG4gIHBhZGRpbmc6IDBweCA1NXB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/multi/multi.component.html":
/*!********************************************!*\
  !*** ./src/app/multi/multi.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <script src=\"/src/assets/js/hideTable.js\"></script>\n</head>\n<div class=\"container bg-0\">\n  <!--style=\"padding-top: 7% !important; padding-bottom: 7% !important\"-->\n  <!--<div class=\"row pull-right\">-->\n  <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n  <!--<a href=\"http://www.jacobleiadmin.com/\" target=\"_blank\"><i class=\"fa fa-circle\"></i></a>-->\n  <!--</div>-->\n  <!--</div>-->\n  <div class=\"container container-content\">\n    <div class=\"row\">\n      <div class=\"col-xss-12 col-sm-12 col-md-12 col-lg-12\">\n        <div>\n          <h3>\n            MULTI-FAMILY PROPERTY MANAGEMENT\n          </h3>\n          <img class=\"img-responsive\" src=\"assets/img/multi.png\" alt=\"Multiple House Property\">\n        </div>\n        <div>\n          <p>\n            Our apartment property management services include all necessary maintenance,\n            tenant screening & management, and regular property inspections.\n            Whether you own one unit or many in an apartment building, our property managers can handle it all.\n            <br>\n            Managing your real estate investment properties the smart way through effective and efficient property management services.\n            Effective property management is about strategic planning, addressing common challenges and providing property\n            specific solutions. At Jacob Lei, we can help whether you have a single family home or a vast portfolio.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <!--<div class=\"col-xss-12 col-sm-12 col-md-12 col-lg-12\">-->\n        <!--<p>-->\n          <!--Managing your real estate investment properties the smart way through effective and efficient property management services.-->\n          <!--Effective property management is about strategic planning, addressing common challenges and providing property-->\n          <!--specific solutions. At Jacob Lei, we can help whether you have a single family home or a vast portfolio.-->\n        <!--</p>-->\n      <!--</div>-->\n      <div id=\"desktop\"  class=\"col-md-12 col-lg-12 visible-md visible-lg visible-xxl \">\n        <table id=\"communication\" class=\"table table-responsive\">\n          <thead>\n          <tr>\n            <th>Communication:</th>\n            <th>Repair & Maintenance Issues:</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              Our company is committed to delivering high touch customer service and we know that this starts with communication.\n              We have a steadfast commitment to respond and address client demands swiftly and effectively.\n              We utilize cutting-edge software to manage all of your properties efficiently.\n              Access your account online anytime, anywhere.\n            </td>\n            <td>\n              Maintenance is a necessary expense in owning rental property, when required we ensure the job is done quickly,\n              correctly and cost effective.  We supervise and coordinate comprehensive programs for all property maintenance,\n              repair, and renovations.  Jacob Lei has an extensive network of service providers as well as in house maintenance\n              to handle all your property maintenance and repair work. When maintenance is required we ensure the job is done quickly,\n              correctly and cost effective.\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <table id=\"rent\" class=\"table table-responsive\">\n          <thead>\n          <tr>\n            <th>Rent Collection:</th>\n            <th>Leasing/Tenant Screening:</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              At Jacob Lei our systematic approach ensures our owners get their money faster.\n              Tenants receive automated rent invoices via email monthly with a detailed breakdown of any charges.\n              Tenants can also log-in to our website at any time to check rent balances or to confirm that previous payments\n              have been processed. With our diligent approach deposits are promptly made to owners.\n            </td>\n            <td>\n              We handle all tenant screening and leasing to ensure that only pre qualified individuals who passed credit screening\n              as well as criminal and evictions background  check are allowed to occupy your rental property.\n              Our systematic approach placing a tenant.\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <table id=\"marketing\" class=\"table table-responsive\">\n          <thead>\n          <tr>\n            <th>Emergency Repair Assistance:</th>\n            <th>Marketing & Advertising:</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              The company’s trained and qualified service providers allows us to provide emergency services in a timely\n              and efficient manner.  On call maintenance and management personnel available on a 24/7/365 basis.\n            </td>\n            <td>\n              We provide comprehensive marketing services, which include  targeted advertising and informational materials.\n              Our efforts are tailored to maximizing exposure of our properties to potential tenants local and across the US.\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <table id=\"inspection\" class=\"table table-responsive\">\n          <thead>\n          <tr>\n            <th>Tenant Management:</th>\n            <th>Routine Property Inspections:</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              We establish strong relationships with tenants to ensure a mutually beneficial experience for the tenant and the owner.\n            </td>\n            <td>\n              We perform regular inspections to detail property conditions and maintenance needs.\n              We facilitate all maintenance needs on the property in a cost effective and timely manner.\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <table id=\"accounting\" class=\"table table-responsive\">\n          <thead>\n          <tr>\n            <th>Comprehensive Accounting:</th>\n            <th></th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              We keep an accurate account of all cash flow. Every month you’ll get an owner statement which describes what was received,\n              what was paid out for maintenance issues, and the amount being remitted to you.\n              All information to your property will be available 24/7 through your owner portal.\n            </td>\n            <td>\n\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-xss-12 col-sm-12 hidden-md hidden-lg\">\n        <h4>Communication:</h4>\n        <p>\n          Our company is committed to delivering high touch customer service and we know that this starts with communication.\n          We have a steadfast commitment to respond and address client demands swiftly and effectively.\n          We utilize cutting-edge software to manage all of your properties efficiently.\n          Access your account online anytime, anywhere.\n        </p>\n        <h4>Repair & Maintenance Issues:</h4>\n        <p>\n          Maintenance is a necessary expense in owning rental property, when required we ensure the job is done quickly,\n          correctly and cost effective.  We supervise and coordinate comprehensive programs for all property maintenance,\n          repair, and renovations.  Jacob Lei has an extensive network of service providers as well as in house maintenance\n          to handle all your property maintenance and repair work. When maintenance is required we ensure the job is done quickly,\n          correctly and cost effective.\n        </p>\n        <h4>Rent Collection:</h4>\n        <p>\n          At Jacob Lei our systematic approach ensures our owners get their money faster.\n          Tenants receive automated rent invoices via email monthly with a detailed breakdown of any charges.\n          Tenants can also log-in to our website at any time to check rent balances or to confirm that previous payments\n          have been processed. With our diligent approach deposits are promptly made to owners.\n        </p>\n        <h4>Leasing/Tenant Screening:</h4>\n        <p>\n          We handle all tenant screening and leasing to ensure that only pre qualified individuals who passed credit screening\n          as well as criminal and evictions background  check are allowed to occupy your rental property.\n          Our systematic approach placing a tenant.\n        </p>\n      </div>\n      <div class=\"col-xss-12 col-sm-12 hidden-md hidden-lg\">\n        <h4>Emergency Repair Assistance:</h4>\n        <p>\n          The company’s trained and qualified service providers allows us to provide emergency services in a timely\n          and efficient manner.  On call maintenance and management personnel available on a 24/7/365 basis.\n        </p>\n        <h4>Marketing & Advertising:</h4>\n        <p>\n          We provide comprehensive marketing services, which include  targeted advertising and informational materials.\n          Our efforts are tailored to maximizing exposure of our properties to potential tenants local and across the US.\n        </p>\n        <h4>Tenant Management:</h4>\n        <p>\n          We establish strong relationships with tenants to ensure a mutually beneficial experience for the tenant and the owner.\n        </p>\n        <h4>Routine Property Inspections:</h4>\n        <p>\n          We perform regular inspections to detail property conditions and maintenance needs.\n          We facilitate all maintenance needs on the property in a cost effective and timely manner.\n        </p>\n        <h4>Comprehensive Accounting:</h4>\n        <p>\n          We keep an accurate account of all cash flow. Every month you’ll get an owner statement which describes what was received,\n          what was paid out for maintenance issues, and the amount being remitted to you.\n          All information to your property will be available 24/7 through your owner portal.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<!--<div class=\"row justify-content-md-center content-padding\">-->\n<!--<p>-->\n<!--We specialize in the management of residential and commercial properties.-->\n<!--Our business is designed to tailor an individual program that will suit your property-->\n<!--management needs. We operate our business with the highest degree of integrity,-->\n<!--ethics and professionalism while providing outstanding property management services.-->\n<!--e specialize in the management of residential and commercial properties.-->\n<!--Our business is designed to tailor an individual program that will suit your property-->\n<!--management needs. We operate our business with the highest degree of integrity,-->\n<!--ethics and professionalism while providing outstanding property management services.-->\n<!--</p>-->\n<!--</div>-->\n\n\n"

/***/ }),

/***/ "./src/app/multi/multi.component.ts":
/*!******************************************!*\
  !*** ./src/app/multi/multi.component.ts ***!
  \******************************************/
/*! exports provided: MultiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiComponent", function() { return MultiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultiComponent = /** @class */ (function () {
    function MultiComponent() {
    }
    MultiComponent.prototype.ngOnInit = function () {
    };
    MultiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multi',
            template: __webpack_require__(/*! ./multi.component.html */ "./src/app/multi/multi.component.html"),
            styles: [__webpack_require__(/*! ./multi.component.css */ "./src/app/multi/multi.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiComponent);
    return MultiComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.logo {*/\n  /*width: 57%;*/\n  /*margin-top: -16px;*/\n  /*}*/\n  /*.navbar-default .navbar-nav > li.dropdown:hover > a,*/\n  /*.navbar-default .navbar-nav > li.dropdown:hover > a:hover,*/\n  /*.navbar-default .navbar-nav > li.dropdown:hover > a:focus {*/\n  /*!*background-color: rgba(0, 0, 128, 0.53);*!*/\n  /*color: rgba(0, 0, 128, 0.71);*/\n  /*}*/\n  li.dropdown:hover > .dropdown-menu {\n  display: block;\n}\n  .dropdown-menu {\n  /*font-family: Montserrat, sans-serif !important;*/\n  font-family: 'Cinzel', serif !important;\n  font-size: 11px !important;\n  background-color: #fff;\n  top: 20px;\n  /*opacity: 0.8;*/\n}\n  a.dropdown:hover {\n  background-color: transparent;\n\n}\n  /*dropdown-menu>li>a:focus,*/\n  .dropdown-menu>li>a:hover ,.dropdown-menu>li>a:focus{\n  /* color: #262626; */\n  text-decoration: none;\n  background-color: rgba(255, 255, 255, 0.05);\n}\n  .navbar-default .navbar-nav>.open>a:hover, .navbar-nav>.open>a:focus {\n  color: #555;\n  background-color: transparent;\n}\n  .nav .open>a {\n  background-color: transparent;\n}\n  .router-link-active {\n  /*color: #ffffff !important;*/\n  color: #13034d !important;\n  font-weight: 900;\n}\n  .dropdown:hover .dropdown-menu {\n  display: block;\n}\n  .dropdown-menu>li>a:hover {\n  border: none !important;\n}\n  .navbar-collapse {\n  background: #ffffff;\n}\n  .brand-text {\n  font-size: 9px;\n  margin-left: -156px;\n\n}\n  .brand-text-mobile {\n  font-size: 8px;\n  margin-left: -116px;\n\n}\n  sub {\n  bottom: -1.25em;\n}\n  @media only screen and  (max-width: 736px) {\n  .nav .open>a, .nav .open>a:focus, .nav .open>a:hover {\n    border: none;\n  }\n  .navbar-nav li a:hover {\n    border-bottom: none !important;\n  }\n  .navbar {\n    height: 65px !important;\n  }\n}\n  /*@media (min-width: 764px) {*/\n  /*ul.nav li.dropdown:hover > ul.dropdown-menu {*/\n  /*display: block;*/\n  /*}*/\n  /*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7RUFDVCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3hCLEtBQUs7RUFHTCx3REFBd0Q7RUFDeEQsOERBQThEO0VBQzlELCtEQUErRDtFQUM3RCxnREFBZ0Q7RUFDaEQsaUNBQWlDO0VBQ25DLEtBQUs7RUFDTDtFQUNFLGVBQWU7Q0FDaEI7RUFDRDtFQUNFLG1EQUFtRDtFQUNuRCx3Q0FBd0M7RUFDeEMsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsaUJBQWlCO0NBQ2xCO0VBQ0Q7RUFDRSw4QkFBOEI7O0NBRS9CO0VBQ0QsNkJBQTZCO0VBQzdCO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qiw0Q0FBNEM7Q0FDN0M7RUFDRDtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7Q0FDL0I7RUFDRDtFQUNFLDhCQUE4QjtDQUMvQjtFQUNEO0VBQ0UsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixpQkFBaUI7Q0FDbEI7RUFFRDtFQUNFLGVBQWU7Q0FDaEI7RUFFRDtFQUNFLHdCQUF3QjtDQUN6QjtFQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0VBRUQ7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9COztDQUVyQjtFQUNEO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjs7Q0FFckI7RUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtFQUNEO0VBQ0U7SUFDRSxhQUFhO0dBQ2Q7RUFDRDtJQUNFLCtCQUErQjtHQUNoQztFQUNEO0lBQ0Usd0JBQXdCO0dBQ3pCO0NBQ0Y7RUFFRCwrQkFBK0I7RUFFN0IsaURBQWlEO0VBQy9DLG1CQUFtQjtFQUNyQixLQUFLO0VBQ1AsS0FBSyIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmxvZ28geyovXG4gIC8qd2lkdGg6IDU3JTsqL1xuICAvKm1hcmdpbi10b3A6IC0xNnB4OyovXG4vKn0qL1xuXG5cbi8qLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2ID4gbGkuZHJvcGRvd246aG92ZXIgPiBhLCovXG4vKi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiA+IGxpLmRyb3Bkb3duOmhvdmVyID4gYTpob3ZlciwqL1xuLyoubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgPiBsaS5kcm9wZG93bjpob3ZlciA+IGE6Zm9jdXMgeyovXG4gIC8qISpiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDEyOCwgMC41Myk7KiEqL1xuICAvKmNvbG9yOiByZ2JhKDAsIDAsIDEyOCwgMC43MSk7Ki9cbi8qfSovXG5saS5kcm9wZG93bjpob3ZlciA+IC5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZHJvcGRvd24tbWVudSB7XG4gIC8qZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWYgIWltcG9ydGFudDsqL1xuICBmb250LWZhbWlseTogJ0NpbnplbCcsIHNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0b3A6IDIwcHg7XG4gIC8qb3BhY2l0eTogMC44OyovXG59XG5hLmRyb3Bkb3duOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbn1cbi8qZHJvcGRvd24tbWVudT5saT5hOmZvY3VzLCovXG4uZHJvcGRvd24tbWVudT5saT5hOmhvdmVyICwuZHJvcGRvd24tbWVudT5saT5hOmZvY3Vze1xuICAvKiBjb2xvcjogIzI2MjYyNjsgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xufVxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2Pi5vcGVuPmE6aG92ZXIsIC5uYXZiYXItbmF2Pi5vcGVuPmE6Zm9jdXMge1xuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubmF2IC5vcGVuPmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5yb3V0ZXItbGluay1hY3RpdmUge1xuICAvKmNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7Ki9cbiAgY29sb3I6ICMxMzAzNGQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5uYXZiYXItY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uYnJhbmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBtYXJnaW4tbGVmdDogLTE1NnB4O1xuXG59XG4uYnJhbmQtdGV4dC1tb2JpbGUge1xuICBmb250LXNpemU6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMTZweDtcblxufVxuc3ViIHtcbiAgYm90dG9tOiAtMS4yNWVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm5hdiAub3Blbj5hLCAubmF2IC5vcGVuPmE6Zm9jdXMsIC5uYXYgLm9wZW4+YTpob3ZlciB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC5uYXZiYXItbmF2IGxpIGE6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFyIHtcbiAgICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKkBtZWRpYSAobWluLXdpZHRoOiA3NjRweCkgeyovXG5cbiAgLyp1bC5uYXYgbGkuZHJvcGRvd246aG92ZXIgPiB1bC5kcm9wZG93bi1tZW51IHsqL1xuICAgIC8qZGlzcGxheTogYmxvY2s7Ki9cbiAgLyp9Ki9cbi8qfSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Mobile NavBar-->\n<nav class=\"navbar sm-navbar  navbar-default navbar-fixed-top\">\n\n  <div class=\"container-fluid visible-sm visible-xs\">\n    <!--<a class=\"navbar-brand brand\" routerLink=\"/home\"><img class=\"sm-logo\" src=\"/assets/img/JL.png\"></a>-->\n    <!--<a class=\"navbar-brand ipad\" routerLink=\"/home\">JL <sub class=\"desc-display\">Property Management</sub></a>-->\n      <!--<img class=\"sm-logo\" src=\"assets/img/logo-white.png\"></a>-->\n    <div class=\"navbar-header\">\n    <a class=\"navbar-brand brand\" routerLink=\"/home\">Jacob Lei <sub class=\"brand-text-mobile\">Property Management</sub></a>\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#mobileNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"mobileNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"collapse\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">SERVICES</a>\n          <ul id=\"dropDownLinksServices\" class=\"dropdown-menu\">\n            <li><a (click)=\"collapseNav()\" routerLinkActive=\"router-link-active\" routerLink=\"/single\">SINGLE FAMILY PROPERTY MANAGEMENT</a></li>\n            <li><a (click)=\"collapseNav()\" routerLinkActive=\"router-link-active\" routerLink=\"/multi\">MULTI-FAMILY PROPERTY MANAGEMENT</a></li>\n          </ul>\n        </li>\n        <li><a target=\"_blank\" href=\"https://jacoblei.managebuilding.com/Resident/rental-application/apply\" (click)=\"collapseNav()\">APPLICATION</a> </li>\n        <li><a (click)=\"collapseNav()\" routerLinkActive=\"router-link-active\" routerLink=\"/owners\">OWNERS</a></li>\n        <li class=\"collapse\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">TENANTS</a>\n          <ul id=\"dropDownLinks\" class=\"dropdown-menu\">\n            <li><a (click)=\"collapseNav()\" routerLinkActive=\"router-link-active\" routerLink=\"/payment\">PAYMENT</a></li>\n            <li><a (click)=\"collapseNav()\" routerLinkActive=\"router-link-active\" routerLink=\"/maintenance\">MAINTENANCE REQUEST</a></li>\n            <li><a (click)=\"collapseNav()\" routerLinkActive=\"router-link-active\" routerLink=\"/notice\">NOTICE TO VACATE</a></li>\n          </ul>\n        </li>\n        <li><a (click)=\"collapseNav()\" routerLinkActive=\"router-link-active\" routerLink=\"/properties\">PROPERTIES</a></li>\n        <li><a (click)=\"collapseNav()\" routerLinkActive=\"router-link-active\" routerLink=\"/contact\">CONTACT US</a></li>\n      </ul>\n    </div>\n  </div>\n\n\n<!--Desktop NavBar-->\n\n\n  <div class=\"container-fluid visible-md visible-lg\">\n    <a class=\"navbar-brand brand\" routerLink=\"/home\">Jacob Lei <sub class=\"brand-text\">Property Management</sub></a>\n    <!--<img class=\"img-size\" src=\"assets/img/JL.png\">-->\n    <!--<a class=\"navbar-brand brand\" routerLink=\"/home\"><img class=\"sm-logo\" src=\"assets/img/JL.png\"></a>-->\n    <!--<a class=\"navbar-brand\" routerLink=\"/home\">Jacob Lei Property Management</a>-->\n    <div class=\"collapse navbar-collapse\" id=\"desktopNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">SERVICES</a>\n          <ul id=\"dropLinks\" class=\"dropdown-menu\">\n            <li><a routerLinkActive=\"router-link-active\" routerLink=\"/single\">SINGLE-FAMILY PROPERTY MANAGEMENT</a></li>\n            <li><a routerLinkActive=\"router-link-active\" routerLink=\"/multi\">MULTI-FAMILY PROPERTY MANAGEMENT</a></li>\n          </ul>\n        </li>\n        <li><a target=\"_blank\" href=\"https://jacoblei.managebuilding.com/Resident/rental-application/apply\">APPLICATION</a> </li>\n        <li><a routerLinkActive=\"router-link-active\" routerLink=\"/owners\">OWNERS</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">TENANTS</a>\n          <ul id=\"dropLinks\" class=\"dropdown-menu\">\n            <li><a routerLinkActive=\"router-link-active\" routerLink=\"/payment\">PAYMENT</a></li>\n            <li><a routerLinkActive=\"router-link-active\" routerLink=\"/maintenance\">MAINTENANCE REQUEST</a></li>\n            <li><a routerLinkActive=\"router-link-active\" routerLink=\"/notice\">NOTICE TO VACATE</a></li>\n          </ul>\n        </li>\n        <li><a routerLinkActive=\"router-link-active\" routerLink=\"/properties\">PROPERTIES</a></li>\n        <li><a routerLinkActive=\"router-link-active\" routerLink=\"/contact\">CONTACT US</a></li>\n      </ul>\n    </div>\n    <script>\n      // $(\".dropdown\").hover(\n      //   function() {\n      //     $('.dropdown-menu').collapse('show');\n      //   }, function() {\n      //     $('.dropdown-menu').collapse('hide');\n      //   }\n      // );\n      $(document).ready(function(){\n        $('ul.nav li.dropdown').hover(function() {\n          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);\n        }, function() {\n          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);\n        });\n      });\n      // $(document).ready(function(){\n      //   $('ul.nav li.dropdown').hover(function() {\n      //     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);\n      //   }, function() {\n      //     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);\n      //   });\n      // });\n    </script>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.navBarTogglerIsVisible = function () {
        return this.mobileNavbar.nativeElement.offsetParent !== null;
    };
    NavbarComponent.prototype.collapseNav = function () {
        if (this.navBarTogglerIsVisible()) {
            this.mobileNavbar.nativeElement.click();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mobileNavbar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NavbarComponent.prototype, "mobileNavbar", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/notice/notice.component.css":
/*!*********************************************!*\
  !*** ./src/app/notice/notice.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-area {\n  width: 100%;\n  height: 90px;\n}\nbg-2 p {\n  color: #0000006e;\n  height: 100vh !important;\n}\n@media only screen and (max-width: 486px) {\n  .padding-container {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .padding-content {\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n\n}\n@media only screen and (max-width: 764px) {\n  .md-padding-content {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  .btn {\n    width: 100% !important;\n  }\n\n}\n@media only screen and (max-width: 989px){\n  .lg-padding-content {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n}\n.invalid {\n  color: red;\n  padding-left: 15px;\n}\n.btn {\n  margin-right: 0px;\n  border-radius: 3px;\n  border: transparent;\n  box-shadow: 2px 3px 6px 1px #000000c2;\n}\n.modal-backdrop {\n  z-index: 99999;\n  position: absolute !important;\n}\n.modal-body {\n  z-index: 1029;\n}\n.modal-dialog {\n  padding-top: 8%;\n}\n.modal-class {\n  display: none;\n  z-index: 9999;\n}\n.fa {\n  padding-right: 5px;\n}\ntextarea {\n  margin-bottom: 10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNlL25vdGljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtDQUMxQjtBQUNEO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0dBQ3BCO0VBQ0Q7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0dBQ3BCOztDQUVGO0FBQ0Q7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7R0FDbkI7RUFDRDtJQUNFLHVCQUF1QjtHQUN4Qjs7Q0FFRjtBQUNEO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0dBQ25CO0NBQ0Y7QUFFRDtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHNDQUFzQztDQUN2QztBQUVEO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtDQUMvQjtBQUVEO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLGNBQWM7RUFDZCxjQUFjO0NBQ2Y7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbm90aWNlL25vdGljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG59XG5iZy0yIHAge1xuICBjb2xvcjogIzAwMDAwMDZlO1xuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NnB4KSB7XG4gIC5wYWRkaW5nLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIC5wYWRkaW5nLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgfVxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NHB4KSB7XG4gIC5tZC1wYWRkaW5nLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG4gIH1cbiAgLmJ0biB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4OXB4KXtcbiAgLmxnLXBhZGRpbmctY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgfVxufVxuXG4uaW52YWxpZCB7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAxcHggIzAwMDAwMGMyO1xufVxuXG4ubW9kYWwtYmFja2Ryb3Age1xuICB6LWluZGV4OiA5OTk5OTtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgei1pbmRleDogMTAyOTtcbn1cbi5tb2RhbC1kaWFsb2cge1xuICBwYWRkaW5nLXRvcDogOCU7XG59XG5cbi5tb2RhbC1jbGFzcyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5mYSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxudGV4dGFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/notice/notice.component.html":
/*!**********************************************!*\
  !*** ./src/app/notice/notice.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-2 padding-container\">\n  <form [formGroup]=\"noticeForm\">\n    <div class=\"row row-padding padding-content md-padding-content lg-padding-content\">\n      <!--<div class=\"col-12\"></div>-->\n      <div class=\"panel panel-info\">\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6  panel-heading\">\n          <div class= \"col-xs-12 col-sm-12 col-md-6 col-lg-6\"><span><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i></span>  Notice to Vacate\n          </div>\n        </div>\n        <div class=\"panel-body panel-box\">\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <strong>Tenant Name</strong>\n            </div>\n            <div class=\"col-sm-12 col-md-12\">\n              <input autocomplete=\"on\" type=\"text\" class=\"form-control\" id=\"tenName\" formControlName=\"tenName\" name=\"tenName\" (input)=\"checkInputError()\" placeholder=\"John Smith\" required />\n            </div>\n            <span class=\"alert-warning small\" *ngIf=\"nameError !== null\">{{nameError}}</span>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <strong>This Notice is Regarding Property</strong>\n            </div>\n            <div class=\"col-sm-12 col-md-12\">\n              <input autocomplete=\"on\" type=\"text\" class=\"form-control\" formControlName=\"appAddress\" name=\"appAddress\" placeholder=\"123 Smith Ln.\" required />\n            </div>\n            <span class=\"alert-warning small\" *ngIf=\"appAddressError !== null\">{{appAddressError}}</span>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <strong>Your Contact number</strong>\n            </div>\n            <div class=\"col-sm-12 col-md-12\">\n              <input autocomplete=\"on\" type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\" [textMask]=\"{mask: mask}\" [(ngModel)]=\"phoneNumberModel\" name=\"phoneNumber\"  placeholder=\"(865) 555 555\" required />\n            </div>\n            <span class=\"alert-warning small\" *ngIf=\"phoneNumberError !== null\">{{phoneNumberError}}</span>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n              <strong>Your ​Email</strong>\n            </div>\n            <div class=\"col-sm-12 col-md-12\">\n              <input autocomplete=\"on\" type=\"text\" class=\"form-control\" formControlName=\"emailAddress\" name=\"emailAddress\" placeholder=\"john@smith.com\" required />\n            </div>\n            <span class=\"alert-warning small\" *ngIf=\"emailAddressError !== null\">{{emailAddressError}}</span>\n          </div>\n\n          <div class=\"form-group\">\n            <div class='col-xs-12 col-md-6 col-lg-6 form-group expiration required'>\n              <label for=\"textArea\" class='control-label'>Please Specify Reason </label>\n              <textarea formControlName=\"textArea\" class=\"form-control\" name=\"textArea\" id=\"textArea\" value=\"\" placeholder=\"Issue ...\" required></textarea>\n              <button type=\"button\" (click)=\"sendEmail(this)\" data-toggle=\"modal\" href=\"#modal\" class=\"btn btn-primary btn-lg btn-submit-fix pull-right\" [disabled]=\"!noticeForm.valid\">Submit</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"modal fade\" id=\"modal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">{{messageHeader}}</h4>\n        </div>\n        <div class=\"modal-body\">\n          <h5>{{messageBody}}</h5>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n</div>\n"

/***/ }),

/***/ "./src/app/notice/notice.component.ts":
/*!********************************************!*\
  !*** ./src/app/notice/notice.component.ts ***!
  \********************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoticeComponent = /** @class */ (function () {
    function NoticeComponent(formBuilder, appService) {
        this.formBuilder = formBuilder;
        this.appService = appService;
        this.phoneNumberModel = '';
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    NoticeComponent.prototype.ngOnInit = function () {
        this.noticeForm = this.formBuilder.group({
            'tenName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'appAddress': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'textArea': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'phoneNumber': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]],
            'emailAddress': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^@]*@[^@]*')]]
        });
    };
    NoticeComponent.prototype.checkInputError = function () {
        if (this.noticeForm.controls.tenName.value === '') {
            this.nameError = 'Name Required';
        }
        else {
            this.nameError = null;
        }
        if (this.noticeForm.controls.appAddress.value === '') {
            this.appAddressError = 'Address Required';
        }
        else {
            this.appAddressError = null;
        }
        if (this.noticeForm.controls.phoneNumber.value === '') {
            this.phoneNumberError = 'Address Required';
        }
        else {
            this.phoneNumberError = null;
        }
        if (this.noticeForm.controls.emailAddress.value === '') {
            this.emailAddressError = 'Address Required';
        }
        else {
            this.emailAddressError = null;
        }
        if (this.noticeForm.controls.textArea.value === '') {
            this.textAreaError = 'Address Required';
        }
        else {
            this.textAreaError = null;
        }
    };
    NoticeComponent.prototype.sendEmail = function (data) {
        var _this = this;
        this.appService.sendNoticeEmail(data.noticeForm.value).subscribe(function (data) {
            console.log('data', data);
            if (data.success) {
                _this.emailSuccess = true;
                _this.messageHeader = 'Thank You';
                _this.messageBody = 'We received your email';
                _this.noticeForm.reset();
            }
            else if (data.error) {
                _this.emailSuccess = false;
                _this.messageHeader = 'Error';
                _this.messageBody = 'Something went wrong. Please, check your form and try again';
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], NoticeComponent.prototype, "noticeForm", void 0);
    NoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice',
            template: __webpack_require__(/*! ./notice.component.html */ "./src/app/notice/notice.component.html"),
            styles: [__webpack_require__(/*! ./notice.component.css */ "./src/app/notice/notice.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], NoticeComponent);
    return NoticeComponent;
}());



/***/ }),

/***/ "./src/app/owners/owners.component.css":
/*!*********************************************!*\
  !*** ./src/app/owners/owners.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 486px){\n  .padding {\n    padding-bottom: 5%;\n  }\n\n}\niframe {\n  border-width: 0px !important; ;\n}\n.intrinsic-container {\n  position: relative;\n  height: 0;\n  /*overflow: hidden;*/\n}\n/* 16x9 Aspect Ratio */\n.intrinsic-container-16x9 {\n  padding-bottom: 65%;\n  margin-top: 88px;\n  /*margin-bottom: 100%;*/\n}\n/* 4x3 Aspect Ratio */\n.intrinsic-container-4x3 {\n  padding-bottom: 75%;\n}\n.intrinsic-container iframe {\n  position: absolute;\n  top:0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*.iframe-wrapper {*/\n/*-webkit-overflow-scrolling: touch;*/\n/*overflow-y: scroll;*/\n/*overflow-x: scroll;*/\n/*}*/\n@media only screen and (max-width: 736px) {\n  .intrinsic-container-16x9 {\n    padding-bottom: 160%;\n    margin-top: 88px;\n  }\n  .iframe-wrapper {\n    -webkit-overflow-scrolling: touch;\n    overflow-y: scroll;\n    overflow-x: scroll;\n  }\n  .fix-container {\n    padding: 0 !important;\n    width: 100% !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3duZXJzL293bmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxtQkFBbUI7R0FDcEI7O0NBRUY7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixxQkFBcUI7Q0FDdEI7QUFFRCx1QkFBdUI7QUFDdkI7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtDQUN6QjtBQUVELHNCQUFzQjtBQUN0QjtFQUNFLG9CQUFvQjtDQUNyQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLE1BQU07RUFDTixRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNELHFCQUFxQjtBQUNuQixzQ0FBc0M7QUFDdEMsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN6QixLQUFLO0FBRUw7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7R0FDbEI7RUFDRDtJQUNFLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0dBQ3BCO0VBQ0Q7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0dBQ3hCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9vd25lcnMvb3duZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NnB4KXtcbiAgLnBhZGRpbmcge1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgfVxuXG59XG5pZnJhbWUge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50OyA7XG59XG5cbi5pbnRyaW5zaWMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xufVxuXG4vKiAxNng5IEFzcGVjdCBSYXRpbyAqL1xuLmludHJpbnNpYy1jb250YWluZXItMTZ4OSB7XG4gIHBhZGRpbmctYm90dG9tOiA2NSU7XG4gIG1hcmdpbi10b3A6IDg4cHg7XG4gIC8qbWFyZ2luLWJvdHRvbTogMTAwJTsqL1xufVxuXG4vKiA0eDMgQXNwZWN0IFJhdGlvICovXG4uaW50cmluc2ljLWNvbnRhaW5lci00eDMge1xuICBwYWRkaW5nLWJvdHRvbTogNzUlO1xufVxuXG4uaW50cmluc2ljLWNvbnRhaW5lciBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLyouaWZyYW1lLXdyYXBwZXIgeyovXG4gIC8qLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyovXG4gIC8qb3ZlcmZsb3cteTogc2Nyb2xsOyovXG4gIC8qb3ZlcmZsb3cteDogc2Nyb2xsOyovXG4vKn0qL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSB7XG4gIC5pbnRyaW5zaWMtY29udGFpbmVyLTE2eDkge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNjAlO1xuICAgIG1hcmdpbi10b3A6IDg4cHg7XG4gIH1cbiAgLmlmcmFtZS13cmFwcGVyIHtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgfVxuICAuZml4LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/owners/owners.component.html":
/*!**********************************************!*\
  !*** ./src/app/owners/owners.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 100% !important; padding: 0px !important;\">\n  <div class=\"intrinsic-container intrinsic-container-16x9 padding iframe-wrapper\">\n    <iframe  src=\"https://account.box.com/login\"></iframe>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/owners/owners.component.ts":
/*!********************************************!*\
  !*** ./src/app/owners/owners.component.ts ***!
  \********************************************/
/*! exports provided: OwnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnersComponent", function() { return OwnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OwnersComponent = /** @class */ (function () {
    function OwnersComponent() {
    }
    OwnersComponent.prototype.ngOnInit = function () {
    };
    OwnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owners',
            template: __webpack_require__(/*! ./owners.component.html */ "./src/app/owners/owners.component.html"),
            styles: [__webpack_require__(/*! ./owners.component.css */ "./src/app/owners/owners.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OwnersComponent);
    return OwnersComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 486px) {\n  .padding-container {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .padding-content {\n    padding-left: 2px;\n    padding-right: 2px;\n  }\n  .btn {\n    width: 100% !important;\n  }\n\n}\n@media only screen and (max-width: 724px) {\n  .md-padding-content {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n  .selection-padding {\n    padding-bottom: 5%;\n  }\n  .btn {\n    width: 100% !important;\n  }\n}\n@media only screen and (max-width: 989px){\n  .lg-padding-content {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n}\n.note {\n  display: block;\n  color: #ff332b !important;\n  font-size: 10px;\n}\n.info-p {\n  font-style: italic;\n  color: #4c4c4c !important;\n}\n.btn {\n  margin-right: 0px;\n  width: 15%;\n  border-radius: 3px;\n  border: transparent;\n  box-shadow: 2px 3px 6px 1px #000000c2;\n}\n#error {\n  color: red;\n}\n.currency-input {\n  position: absolute;\n  top: 35px;\n  left: 17px;\n}\n.currency-input input {\n  border: 0;\n}\n@media only screen and (min-width: 768px) and (max-width: 825px) {\n  .currency-input {\n    position: absolute;\n    top: 62px !important;\n    left: 17px;\n  }\n}\n@media only screen and (min-width: 990px) and (max-width: 1293px) {\n  .currency-input {\n    position: absolute;\n    top: 62px !important;\n    left: 17px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .btn-default {\n    width: 115px !important;\n  }\n  .modal-title {\n    font-size: 15px !important;\n  }\n}\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLHVCQUF1QjtHQUN4Qjs7Q0FFRjtBQUNEO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0dBQ25CO0VBQ0Q7SUFDRSxtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLHVCQUF1QjtHQUN4QjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7R0FDbkI7Q0FDRjtBQUNEO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixzQ0FBc0M7Q0FDdkM7QUFFRDtFQUNFLFdBQVc7Q0FDWjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0NBQ1o7QUFDRDtFQUNFLFVBQVU7Q0FDWDtBQUNEO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7R0FDWjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsV0FBVztHQUNaO0NBQ0Y7QUFDRDtFQUNFO0lBQ0Usd0JBQXdCO0dBQ3pCO0VBQ0Q7SUFDRSwyQkFBMkI7R0FDNUI7Q0FDRjtBQUNEO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NnB4KSB7XG4gIC5wYWRkaW5nLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIC5wYWRkaW5nLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgfVxuICAuYnRuIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzI0cHgpIHtcbiAgLm1kLXBhZGRpbmctY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgfVxuICAuc2VsZWN0aW9uLXBhZGRpbmcge1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgfVxuICAuYnRuIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4OXB4KXtcbiAgLmxnLXBhZGRpbmctY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgfVxufVxuLm5vdGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZjMzMmIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmluZm8tcCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM0YzRjNGMgIWltcG9ydGFudDtcbn1cbi5idG4ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAxcHggIzAwMDAwMGMyO1xufVxuXG4jZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuLmN1cnJlbmN5LWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1cHg7XG4gIGxlZnQ6IDE3cHg7XG59XG4uY3VycmVuY3ktaW5wdXQgaW5wdXQge1xuICBib3JkZXI6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcbiAgLmN1cnJlbmN5LWlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MnB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMTdweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTBweCkgYW5kIChtYXgtd2lkdGg6IDEyOTNweCkge1xuICAuY3VycmVuY3ktaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYycHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAxN3B4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZGVmYXVsdCB7XG4gICAgd2lkdGg6IDExNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm1vZGFsLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmNsZWFyZml4OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-1 padding-container\">\n<div id=\"sq-ccbox\">\n  <form [formGroup]=\"infoPaymentForm\" id=\"nonce-form\"  method=\"POST\">\n    <input type=\"hidden\" name=\"action\" value=\"/api/sendpayment\"/>\n  <div class=\"row row-padding padding-content md-padding-content lg-padding-content\">\n    <div class=\"col-12\"></div>\n    <div class=\"panel panel-info\">\n      <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6  panel-heading\">\n        <div class= \"col-xs-12 col-sm-12 col-md-6 col-lg-6\"><span><i class=\"glyphicon glyphicon-lock\"></i></span> Secure Payment\n        </div>\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 pull-right\"><img class=\"pull-right cards-img\" src=\"assets/img/credit-cards.png\">\n        </div>\n      </div>\n\n      <div class=\"panel-body panel-box\">\n        <div class=\"form-group\" >\n          <div class=\"col-sm-12 col-md-12\">\n            <label for=\"first_name\">First Name on Card (Required)</label>\n            <input id=\"first_name\" formControlName=\"given_name\" autocomplete=\"off\" type=\"text\" (focus)=\"loadPaymentForm()\" (input)=\"checkInputError()\" class=\"form-control\" name=\"first_name\" required/>\n<!--            <span class=\"alert-warning small\" *ngIf=\"firstNameError !== null\">{{firstNameError}}<br></span>-->\n<!--            <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n          </div>\n        </div>\n        <div class=\"form-group\" >\n          <div class=\"col-sm-12 col-md-12\">\n            <label for=\"last_name\">Last Name on Card (Required)</label>\n            <input id=\"last_name\" formControlName=\"family_name\" autocomplete=\"off\" type=\"text\" (focus)=\"loadPaymentForm()\" (input)=\"checkInputError()\" class=\"form-control\" name=\"last_name\" required/>\n<!--            <span class=\"alert-warning small\" *ngIf=\"lastNameError !== null\">{{lastNameError}}<br></span>-->\n<!--            <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <label for=\"phone_number\">Phone Number (Required)</label>\n            <input id=\"phone_number\" formControlName=\"phone_number\" autocomplete=\"off\" (input)=\"checkInputError()\" (focus)=\"loadPaymentForm()\" [textMask]=\"{mask: mask}\" [(ngModel)]=\"phoneNumberModel\" type=\"text\" class=\"form-control\" name=\"phone_number\" required/>\n<!--            <span class=\"alert-warning small\" *ngIf=\"phoneNumberError !== null\">{{phoneNumberError}}<br></span>-->\n<!--            <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <label for=\"email_address\">Email Address (Required)</label>\n            <input id=\"email_address\" formControlName=\"email_address\" autocomplete=\"off\" (input)=\"checkInputError()\" (focus)=\"loadPaymentForm()\" type=\"text\" class=\"form-control\" name=\"email_address\" required/>\n<!--            <span class=\"alert-warning small\" *ngIf=\"emailError !== null\">{{emailError}}<br></span>-->\n<!--            <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n          </div>\n        </div>\n        <!--Beginning of Square-->\n\n        <div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <label for=\"sq-card-number\">Card Number (Required)</label>\n              <input id=\"sq-card-number\" (focus)=\"loadPaymentForm()\" placeholder=\"•••• •••• •••• ••••\" class=\"form-control\"/>\n<!--              <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-xss-12 col-sm-12 col-md-12 col-lg-12\">\n            <label for=\"sq-expiration-date\">Expiration Date (Required)</label>\n              <input id=\"sq-expiration-date\" placeholder=\"MM/YY\" class=\"form-control\"/>\n<!--              <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n            </div>\n          </div>\n          <div class=\"form-group clearfix\">\n            <div class='col-xs-12 col-md-12 col-lg-12'>\n            <label for=\"sq-cvv\">Card CVV (Required)</label>\n              <input id=\"sq-cvv\" placeholder=\"CVV\" (focus)=\"loadPaymentForm()\" class=\"form-control\"/>\n<!--              <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n              <span class=\"afix\">3 Digit Security Code on Back or 4 Digits on Front of AmEx</span>\n            </div>\n          </div>\n          <div class=\"form-group clearfix\">\n            <div class='col-xs-12 col-md-12 col-lg-12'>\n            <label for=\"sq-postal-code\">5 Digit Card Zip Code (Required)</label>\n              <input id=\"sq-postal-code\" placeholder=\"54321\" (focus)=\"loadPaymentForm()\" class=\"form-control\"/>\n<!--              <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n              <span class=\"afix\">5 Digit Credit Card Zip Code</span>\n            </div>\n          </div>\n          <div id=\"error\"></div>\n        </div>\n\n        <!--End of Square payment-->\n\n        <div class=\"form-group clearfix\">\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <label for=\"property_name\">Rental Property Address (Required)</label>\n              <input id=\"property_name\" formControlName=\"property_name\"  (focus)=\"loadPaymentForm()\" (input)=\"checkInputError()\" type=\"text\" class=\"form-control\" name=\"property_name\" required/>\n<!--            <span class=\"alert-warning small\" *ngIf=\"propertyNameError !== null\">{{propertyNameError}}<br></span>-->\n<!--            <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-12 col-md-12 col-lg-12\">\n            <label for=\"differentName\">Are You Paying for Yourself or Someone Else, Please Enter Name (Required)</label>\n            <input id=\"differentName\" autocomplete=\"off\" formControlName=\"differentName\" (focus)=\"loadPaymentForm()\" (input)=\"checkInputError()\" type=\"text\" class=\"form-control\" name=\"differentName\"  required/>\n<!--            <span class=\"alert-warning small\" *ngIf=\"differentNameError !== null\">{{differentNameError}}<br></span>-->\n<!--            <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-6 col-md-6 col-lg-6\">\n            <label for=\"amountToPay\">Amount You Are Paying (Required)</label>\n            <span class=\"currency-input\">$</span><input id=\"amountToPay\" formControlName=\"amountToPay\" (focus)=\"loadPaymentForm()\" (input)=\"checkInputError()\" autocomplete=\"off\" type=\"number\" min=\"1\" max=\"9999\" class=\"form-control\" name=\"amountToPay\"  value=\"0\" />\n            <span class=\"alert-warning small\" *ngIf=\"amountToPayError !== null\">{{amountToPayError}}<br></span>\n<!--            <span class=\"note\"> *Field Cannot Be Left Blank</span>-->\n            <span class=\"afix\">***3.75% fee will be added to the amount (see below)</span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12 col-md-12 col-sm-12 col-xs-12 col-lg-12 pull-right btn-row\">\n            <button id=\"sq-creditcard\"  class=\"btn btn-primary btn-lg btn-submit-fix pull-right\" [disabled]=\"!infoPaymentForm.valid\" data-toggle=\"modal\" data-target=\"#modalConformation\" (click)=\"conformationModal();\" >Pay</button>\n            <input type=\"hidden\" id=\"sq-id\" name=\"sq-id\">\n            <input type=\"hidden\" id=\"card-nonce\" name=\"nonce\">\n            <!--<input type=\"hidden\" id=\"amountWithFee\" name=\"amountWithFee\" value=\"{{totalAmount}}\">-->\n            <!--(click)=\"requestCardNonce($event)\"-->\n          </div>\n          <div class=\"col-xs-12 col-md-6 col-sm-6 col-xs-6 col-lg-6 pull-right\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <p class=\"alert alert-info info-p\">\n              ***3.75% fee added as a transaction processing fee charged by the merchant account provider***\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </form>\n</div>\n</div>\n<!--Modal-->\n<div class=\"modal fade\" id=\"modalConformation\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h3 *ngIf=\"conformationShow\" class=\"modal-title\">{{modalHeader}}</h3>\n        <h3 *ngIf=\"paymnetSuccess\" class=\"modal-title\">{{modalHeader}}</h3>\n        <!--<h3 *ngIf=\"paymnetSuccess === false\" class=\"modal-title\">{{modalHeader}}</h3>-->\n      </div>\n      <div class=\"modal-body\">\n        <h5 *ngIf=\"conformationShow\">${{modalAmountToPay}}</h5>\n        <h5 *ngIf=\"paymnetSuccess\">{{modalConformation}}</h5>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-default\" id=\"payButton\"  data-target=\"#modal\" (click)=\"requestCardNonce($event)\">Pay</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = /** @class */ (function () {
    //   loadsScript = loadafter.loadsScript;
    // url: 'https://js.squareup.com/v2/paymentform';
    function PaymentComponent(appService, formBuilder) {
        this.appService = appService;
        this.formBuilder = formBuilder;
        this.phoneNumberModel = '';
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.infoPaymentForm = this.formBuilder.group({
            // user: this.formBuilder.group({
            'given_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
            'family_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
            'phone_number': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
            'email_address': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[^@]*@[^@]*')]],
            'property_name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]],
            'differentName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            'amountToPay': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            'sqCardNumberError': [''],
            'sqExpirationDateError': [''],
            'sqCVVError': [''],
            'sqPostalCodeError': ['']
        });
        this.formLoaded = false;
        this.totalAmount = 0;
    }
    PaymentComponent.prototype.ngAfterContentInit = function () { };
    PaymentComponent.prototype.ngAfterContentChecked = function () { };
    PaymentComponent.prototype.ngAfterViewChecked = function () { };
    PaymentComponent.prototype.ngOnDestroy = function () {
    };
    // ngOnChanges():  {
    // }
    PaymentComponent.prototype.ngOnInit = function () {
        this.squarePaymentFunction();
        this.checkInputError();
    };
    PaymentComponent.prototype.ngAfterViewInit = function () {
    };
    PaymentComponent.prototype.ngOnChanges = function () { };
    PaymentComponent.prototype.ngDoCheck = function () { };
    PaymentComponent.prototype.checkInputError = function () {
        if (this.infoPaymentForm.controls.given_name.value === '') {
            this.firstNameError = 'First Name Required';
        }
        else {
            this.firstNameError = null;
        }
        if (this.infoPaymentForm.controls.family_name.value === '') {
            this.lastNameError = 'Last Name Required';
        }
        else {
            this.lastNameError = null;
        }
        if (this.infoPaymentForm.controls.phone_number.value === '') {
            this.phoneNumberError = 'Phone Number Required';
        }
        else {
            this.phoneNumberError = null;
        }
        if (this.infoPaymentForm.controls.email_address.value === '') {
            this.emailError = 'Email Address Required';
        }
        else {
            this.emailError = null;
        }
        if (this.infoPaymentForm.controls.property_name.value === '') {
            this.propertyNameError = 'Property Name Required';
        }
        else {
            this.propertyNameError = null;
        }
        if (this.infoPaymentForm.controls.differentName.value === '') {
            this.differentNameError = 'Name Required';
        }
        else {
            this.differentNameError = null;
        }
        if (this.infoPaymentForm.controls.amountToPay.value === '' || this.infoPaymentForm.controls.amountToPay.value === 0
            || this.infoPaymentForm.controls.amountToPay.value < 1) {
            this.amountToPayError = 'Amount Required. Minimum $1 maximum $9999';
        }
        else {
            this.amountToPayError = null;
        }
    };
    PaymentComponent.prototype.squarePaymentFunction = function () {
        var vm;
        vm = this;
        // this.calculatePayment();
        var applicationId = 'sq0idp-kh1SRsHUXqn-d5ba6YGQqg';
        // const applicationIdTest = 'sandbox-sq0idp-par5NbRuDfbBOcgNv5j3sw';
        // 'sq0idp-kh1SRsHUXqn-d5ba6YGQqg'; prod
        // 'sandbox-sq0idp-par5NbRuDfbBOcgNv5j3sw';
        // Set the location ID
        var locationId = 'B0RXTVMP1T4WP';
        // const locationIdTest = 'CBASEDepGeN6Eev-N-FYE90UA1sgAQ';
        // 'B0RXTVMP1T4WP'; prod
        // 'CBASEDepGeN6Eev-N-FYE90UA1sgAQ';
        this.paymentForm = new SqPaymentForm({
            // Initialize the payment form elements
            applicationId: applicationId,
            locationId: locationId,
            inputClass: 'sq-input',
            autoBuild: false,
            // Customize the CSS for SqPaymentForm iframe elements
            inputStyles: [{
                    fontSize: '.9em'
                }],
            // Initialize the credit card placeholders
            cardNumber: {
                elementId: 'sq-card-number',
                placeholder: '•••• •••• •••• ••••'
            },
            cvv: {
                elementId: 'sq-cvv',
                placeholder: 'CVV'
            },
            expirationDate: {
                elementId: 'sq-expiration-date',
                placeholder: 'MM/YY'
            },
            postalCode: {
                elementId: 'sq-postal-code',
                placeholder: '54321'
            },
            // SqPaymentForm callback functions
            callbacks: {
                /*
                 * callback function: methodsSupported
                 * Triggered when: the page is loaded.
                 */
                methodsSupported: function (methods) {
                    // let applePayBtn = document.getElementById('sq-apple-pay');
                    // let applePayLabel = document.getElementById('sq-apple-pay-label');
                    // let masterpassBtn = document.getElementById('sq-masterpass');
                    // let masterpassLabel = document.getElementById('sq-masterpass-label');
                    //
                    // // Only show the button if Apple Pay for Web is enabled
                    // // Otherwise, display the wallet not enabled message.
                    // if (methods.applePay === true) {
                    //   applePayBtn.style.display = 'inline-block';
                    //   applePayLabel.style.display = 'none' ;
                    // }
                    // // Only show the button if Masterpass is enabled
                    // // Otherwise, display the wallet not enabled message.
                    // if (methods.masterpass === true) {
                    //   masterpassBtn.style.display = 'inline-block';
                    //   masterpassLabel.style.display = 'none';
                    // }
                },
                /*
                 * callback function: createPaymentRequest
                 * Triggered when: a digital wallet payment button is clicked.
                 */
                createPaymentRequest: function () {
                    // The payment request below is provided as
                    // guidance. You should add code to create the object
                    // programmatically.
                    var paymentRequestJson;
                    return paymentRequestJson;
                    // return {
                    //   requestShippingAddress: true,
                    //   currencyCode: 'USD',
                    //   countryCode: 'US',
                    //   total: {
                    //     label: 'Hakuna',
                    //     amount: '{{REPLACE_ME}}',
                    //     pending: false,
                    //   },
                    //   lineItems: [
                    //     {
                    //       label: 'Subtotal',
                    //       amount: '{{REPLACE_ME}}',
                    //       pending: false,
                    //     },
                    //     {
                    //       label: 'Shipping',
                    //       amount: '{{REPLACE_ME}}',
                    //       pending: true,
                    //     },
                    //     {
                    //       label: 'Tax',
                    //       amount: '{{REPLACE_ME}}',
                    //       pending: false,
                    //     }
                    //   ]
                    // };
                },
                /*
                 * callback function: cardNonceResponseReceived
                 * Triggered when: SqPaymentForm completes a card nonce request
                 */
                cardNonceResponseReceived: function (errors, nonce, cardData) {
                    if (errors) {
                        // Log errors from nonce generation to the Javascript console
                        console.log('Encountered errors:');
                        errors.forEach(function (error) {
                            console.log('  ' + error.message);
                        });
                        return;
                    }
                    // alert('Nonce received: ' + nonce); /* FOR TESTING ONLY */
                    // Assign the nonce value to the hidden form field
                    // document.getElementById('card-nonce').value = nonce;
                    // needs to be extracted from the
                    document.getElementById('card-nonce').value = nonce; // casting so .value will work
                    var intAmount = 0;
                    var amount = document.getElementById('amountToPay').value;
                    var first_name = document.getElementById('first_name').value;
                    var last_name = document.getElementById('last_name').value;
                    var email_address = document.getElementById('email_address').value;
                    var phone_number = document.getElementById('phone_number').value;
                    intAmount = parseInt(amount, 10);
                    // let totalAmount = (<HTMLInputElement>document.getElementById('amountWithFee')).value;
                    // get this value from the database when the user is logged in
                    // (<HTMLInputElement>document.getElementById('sq-id')).value = "sandbox-sq0idp-par5NbRuDfbBOcgNv5j3sw" // "CBASEC8F-Phq5_pV7UNi64_kX_4gAQ";
                    // POST the nonce form to the payment processing page
                    // let formdata = (<HTMLFormElement>document.getElementById('nonce-form'));
                    vm.sendSqPayment({ 'nonce': nonce, 'amountToPay': amount, first_name: first_name, last_name: last_name, email_address: email_address, phone_number: phone_number });
                },
                /*
                 * callback function: unsupportedBrowserDetected
                 * Triggered when: the page loads and an unsupported browser is detected
                 */
                unsupportedBrowserDetected: function () {
                    alert('Your browser seems to be unsupported for card processing. Please try a different browser.');
                },
                /*
                 * callback function: inputEventReceived
                 * Triggered when: visitors interact with SqPaymentForm iframe elements.
                 */
                inputEventReceived: function (inputEvent) {
                    switch (inputEvent.eventType) {
                        case 'focusClassAdded':
                            /* HANDLE AS DESIRED */
                            break;
                        case 'focusClassRemoved':
                            /* HANDLE AS DESIRED */
                            break;
                        case 'errorClassAdded':
                            document.getElementById('error').innerHTML = 'Please fix card information errors before continuing.';
                            /* HANDLE AS DESIRED */
                            break;
                        case 'errorClassRemoved':
                            document.getElementById('error').style.display = 'none';
                            /* HANDLE AS DESIRED */
                            break;
                        case 'cardBrandChanged':
                            /* HANDLE AS DESIRED */
                            break;
                        case 'postalCodeChanged':
                            /* HANDLE AS DESIRED */
                            break;
                    }
                },
                /*
                 * callback function: paymentFormLoaded
                 * Triggered when: SqPaymentForm is fully loaded
                 */
                paymentFormLoaded: function () {
                    /* HANDLE AS DESIRED */
                    console.log('The form loaded!');
                }
            }
        });
    };
    PaymentComponent.prototype.requestCardNonce = function (event) {
        // Don't submit the form until SqPaymentForm returns with a nonce
        event.preventDefault();
        // const address = $('#delivery-address').val();
        // const differentName = $('#differentName').val();
        // const propertyComment = $('#propertyComment').val();
        // const propertyName = $('#propertyName').val();
        // const phoneNumber = $('#phoneNumber').val();
        // const email = $('#email').val();
        // const peyeeName = $('#peyeeName').val();
        //
        // if (!differentName) {
        //   $('#differentName').css('border-color', 'red');
        // }
        //
        // if (!propertyComment) {
        //   $('#propertyComment').css('border-color', 'red');
        // }
        //
        // if (!propertyName) {
        //   $('#propertyName').css('border-color', 'red');
        // }
        //
        // if (!phoneNumber) {
        //   $('#phoneNumber').css('border-color', 'red');
        // }
        //
        // if (!email) {
        //   $('#email-address').css('border-color', 'red');
        // }
        // if (!peyeeName) {
        //   $('#peyeeName').css('border-color', 'red');
        // }
        //
        // if (!differentName || !propertyComment || !propertyName || !peyeeName || !email || !phoneNumber) {
        //   return false;
        // }
        // Request a nonce from the SqPaymentForm object
        this.paymentForm.requestCardNonce();
    };
    PaymentComponent.prototype.loadPaymentForm = function () {
        if (this.formLoaded === false) {
            this.paymentForm.build();
            this.formLoaded = true;
        }
    };
    PaymentComponent.prototype.conformationModal = function () {
        this.conformationShow = true;
        // const amountModal = (<HTMLInputElement>document.getElementById('amountToPay')).value;
        this.modalHeader = 'Do You Agree To Pay';
        this.modalAmountToPay = this.modalTotal();
    };
    PaymentComponent.prototype.modalTotal = function () {
        this.amountValue = document.getElementById('amountToPay').value;
        this.intAmount = parseInt(this.amountValue);
        this.totalAmount = (this.intAmount * 0.0375) + this.intAmount;
        console.log('Total amount' + ' ' + this.totalAmount);
        return this.totalAmount.toFixed(2);
    };
    PaymentComponent.prototype.sendUserEmail = function (data) {
        this.appService.sendUserPaymentEmail(data.infoPaymentForm.value).subscribe(function (data) {
            // console.log('data', data);
        });
    };
    PaymentComponent.prototype.sendAdminEmail = function (data) {
        this.appService.sendAdminPaymentEmail(data.infoPaymentForm.value).subscribe(function (data) {
            // console.log('data', data);
        });
    };
    PaymentComponent.prototype.sendSqPayment = function (data) {
        var _this = this;
        this.conformationShow = false;
        this.appService.sendPayment(data).subscribe(function (data) {
            if (data.statusCode === 200) {
                _this.paymnetSuccess = true;
                _this.sendUserEmail(_this);
                _this.modalHeader = 'Thank You';
                _this.modalConformation = 'We received yor payment';
                document.getElementById('payButton').disabled = true;
                _this.sendAdminEmail(_this);
                console.log('Data success');
                _this.infoPaymentForm.reset();
            }
            else if (data.statusCode !== 200) {
                _this.paymnetSuccess = false;
                _this.modalHeader = 'Sorry Something Went Wrong';
                _this.modalConformation = 'Please, check form for errors';
                // console.log('Message:' + '' + data.statusCode + ' ' + data.toString());
            }
            // console.log('data', data);
        });
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")],
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/properties/properties.component.css":
/*!*****************************************************!*\
  !*** ./src/app/properties/properties.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 486px){\n  .padding {\n    padding-bottom: 5%;\n  }\n\n}\niframe {\n  border-width: 0px !important; ;\n}\n.intrinsic-container {\n  position: relative;\n  height: 0;\n  /*overflow: hidden;*/\n}\n.container {\n  padding: 0 !important;\n  width: 100%;\n}\n/* 16x9 Aspect Ratio */\n.intrinsic-container-16x9 {\n  padding-bottom: 65%;\n  margin-top: 88px;\n  /*margin-bottom: 100%;*/\n}\n/* 4x3 Aspect Ratio */\n.intrinsic-container-4x3 {\n  padding-bottom: 75%;\n}\n.intrinsic-container iframe {\n  position: absolute;\n  top:0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*.iframe-wrapper {*/\n/*-webkit-overflow-scrolling: touch;*/\n/*overflow-y: scroll;*/\n/*overflow-x: scroll;*/\n/*}*/\n@media only screen and (max-width: 735px) {\n  .intrinsic-container-16x9 {\n    padding-bottom: 160%;\n    margin-top: 88px;\n  }\n  .iframe-wrapper {\n    -webkit-overflow-scrolling: touch;\n    overflow-y: scroll;\n    overflow-x: scroll;\n  }\n  .container {\n    padding: 0 !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydGllcy9wcm9wZXJ0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLG1CQUFtQjtHQUNwQjs7Q0FFRjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7Q0FDYjtBQUNELHVCQUF1QjtBQUN2QjtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0NBQ3pCO0FBRUQsc0JBQXNCO0FBQ3RCO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsTUFBTTtFQUNOLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtDQUNkO0FBQ0QscUJBQXFCO0FBQ25CLHNDQUFzQztBQUN0Qyx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3pCLEtBQUs7QUFDTDtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtHQUNsQjtFQUNEO0lBQ0Usa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixtQkFBbUI7R0FDcEI7RUFDRDtJQUNFLHNCQUFzQjtHQUN2QjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvcGVydGllcy9wcm9wZXJ0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4NnB4KXtcbiAgLnBhZGRpbmcge1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgfVxuXG59XG5pZnJhbWUge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50OyA7XG59XG5cbi5pbnRyaW5zaWMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xufVxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG4vKiAxNng5IEFzcGVjdCBSYXRpbyAqL1xuLmludHJpbnNpYy1jb250YWluZXItMTZ4OSB7XG4gIHBhZGRpbmctYm90dG9tOiA2NSU7XG4gIG1hcmdpbi10b3A6IDg4cHg7XG4gIC8qbWFyZ2luLWJvdHRvbTogMTAwJTsqL1xufVxuXG4vKiA0eDMgQXNwZWN0IFJhdGlvICovXG4uaW50cmluc2ljLWNvbnRhaW5lci00eDMge1xuICBwYWRkaW5nLWJvdHRvbTogNzUlO1xufVxuXG4uaW50cmluc2ljLWNvbnRhaW5lciBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLyouaWZyYW1lLXdyYXBwZXIgeyovXG4gIC8qLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyovXG4gIC8qb3ZlcmZsb3cteTogc2Nyb2xsOyovXG4gIC8qb3ZlcmZsb3cteDogc2Nyb2xsOyovXG4vKn0qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzVweCkge1xuICAuaW50cmluc2ljLWNvbnRhaW5lci0xNng5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTYwJTtcbiAgICBtYXJnaW4tdG9wOiA4OHB4O1xuICB9XG4gIC5pZnJhbWUtd3JhcHBlciB7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/properties/properties.component.html":
/*!******************************************************!*\
  !*** ./src/app/properties/properties.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"intrinsic-container intrinsic-container-16x9 padding iframe-wrapper\">\n    <iframe  src=\"https://jacoblei.managebuilding.com/Resident/PublicPages/ApartmentSearch.aspx\"></iframe>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/properties/properties.component.ts":
/*!****************************************************!*\
  !*** ./src/app/properties/properties.component.ts ***!
  \****************************************************/
/*! exports provided: PropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesComponent", function() { return PropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertiesComponent = /** @class */ (function () {
    function PropertiesComponent() {
    }
    PropertiesComponent.prototype.ngOnInit = function () {
    };
    PropertiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-properties',
            template: __webpack_require__(/*! ./properties.component.html */ "./src/app/properties/properties.component.html"),
            styles: [__webpack_require__(/*! ./properties.component.css */ "./src/app/properties/properties.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PropertiesComponent);
    return PropertiesComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-padding {\n  padding-top: 20%;\n}\np {\n  color: #333 !important;\n  padding-top: 3%;\n}\nh3 {\n  color: #444 !important;\n  letter-spacing: 4px;\n}\nh4 {\n  margin-bottom: 0px !important;\n  letter-spacing: 2px;\n  font-size: 18px;\n  color: #444;\n}\n.container {\n  /*padding-top: 10%;*/\n  padding: 7% 0% !important;\n  /*padding-top: 10% !important;*/\n  /*padding-bottom: 10% !important;*/\n}\n.container-content {\n   /*background-color: #ddd;*/\n   padding: 11px !important;\n   border-radius: 3px;\n\n }\ntd {\n  font: 400 15px/1.8 Lato, sans-serif;\n  color: #333 !important;\n  font-style: italic;\n  letter-spacing: 0px;\n  width: 50%;\n  padding: 1px 0px 4px 4px !important;\n  border: none !important;\n  border-color: transparent !important;\n}\ntr {\n  font: 400 15px/1.8 Lato, sans-serif;\n  margin-bottom: 0px !important;\n  letter-spacing: 2px;\n  font-size: 18px;\n  color: #444;\n}\n.table>thead>tr>th {\n  border: none !important;\n  border-color: transparent !important;\n}\nthead {\n  border-color: transparent !important;\n}\n@media only screen and (max-width: 640px) {\n  .container-content {\n    margin: 2%;\n  }\n  .container {\n    padding-top: 10% !important;\n    padding-bottom: 10% !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLGdDQUFnQztFQUNoQyxtQ0FBbUM7Q0FDcEM7QUFFRDtHQUNHLDJCQUEyQjtHQUMzQix5QkFBeUI7R0FDekIsbUJBQW1COztFQUVwQjtBQUNGO0VBQ0Usb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLHFDQUFxQztDQUN0QztBQUNEO0VBQ0Usb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLHFDQUFxQztDQUN0QztBQUNEO0VBQ0UscUNBQXFDO0NBQ3RDO0FBQ0Q7RUFDRTtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0UsNEJBQTRCO0lBQzVCLCtCQUErQjtHQUNoQztDQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMjAlO1xufVxucCB7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzJTtcbn1cbmgzIHtcbiAgY29sb3I6ICM0NDQgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbn1cbmg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0NDQ7XG59XG4uY29udGFpbmVyIHtcbiAgLypwYWRkaW5nLXRvcDogMTAlOyovXG4gIHBhZGRpbmc6IDclIDAlICFpbXBvcnRhbnQ7XG4gIC8qcGFkZGluZy10b3A6IDEwJSAhaW1wb3J0YW50OyovXG4gIC8qcGFkZGluZy1ib3R0b206IDEwJSAhaW1wb3J0YW50OyovXG59XG5cbi5jb250YWluZXItY29udGVudCB7XG4gICAvKmJhY2tncm91bmQtY29sb3I6ICNkZGQ7Ki9cbiAgIHBhZGRpbmc6IDExcHggIWltcG9ydGFudDtcbiAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuIH1cbnRkIHtcbiAgZm9udDogNDAwIDE1cHgvMS44IExhdG8sIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMXB4IDBweCA0cHggNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG50ciB7XG4gIGZvbnQ6IDQwMCAxNXB4LzEuOCBMYXRvLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzQ0NDtcbn1cbi50YWJsZT50aGVhZD50cj50aCB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG50aGVhZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmNvbnRhaW5lci1jb250ZW50IHtcbiAgICBtYXJnaW46IDIlO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <script src=\"/src/assets/js/hideTable.js\"></script>\n</head>\n<div class=\"container bg-0\">\n  <!--style=\"padding-top: 7% !important; padding-bottom: 7% !important\"-->\n  <!--<div class=\"row pull-right\">-->\n    <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n      <!--<a href=\"http://www.jacobleiadmin.com/\" target=\"_blank\"><i class=\"fa fa-circle\"></i></a>-->\n    <!--</div>-->\n  <!--</div>-->\n    <div class=\"container container-content\">\n      <div class=\"row\">\n        <div class=\"col-xss-12 col-sm-12 col-md-6 col-lg-6\">\n          <div>\n            <h3>\n              SINGLE FAMILY PROPERTY MANAGEMENT\n            </h3>\n            <img class=\"img-responsive\" src=\"assets/img/singleHouse.jpg\" alt=\"Single Property\">\n          </div>\n          <div>\n            <p>\n              Our area property managers will safeguard your property, manage your tenants, and protect your\n              investment,\n              all without you having to lift a finger. You'll be amazed at how much time and money our residential\n              property management services can save you in both the long and short term.\n            </p>\n          </div>\n        </div>\n          <div class=\"col-xss-12 col-sm-12 col-md-6 col-lg-6\">\n            <div>\n              <h3>\n                MULTI-FAMILY PROPERTY MANAGEMENT\n              </h3>\n              <img class=\"img-responsive\" src=\"assets/img/apartmentComplex.jpg\" alt=\"Multiple House Property\">\n            </div>\n            <div>\n              <p>\n                Our apartment property management services include all necessary maintenance,\n                tenant screening & management, and regular property inspections.\n                Whether you own one unit or many in an apartment building, our property managers can handle it all.\n              </p>\n            </div>\n          </div>\n        </div>\n      <div class=\"row\">\n        <div class=\"col-xss-12 col-sm-12 col-md-12 col-lg-12\">\n          <p>\n            Managing your real estate investment properties the smart way through effective and efficient property management services.\n            Effective property management is about strategic planning, addressing common challenges and providing property\n            specific solutions. At Jacob Lei, we can help whether you have a single family home or a vast portfolio.\n          </p>\n        </div>\n        <div id=\"desktop\"  class=\"col-md-12 col-lg-12 visible-md visible-lg visible-xxl \">\n          <table id=\"communication\" class=\"table table-responsive\">\n            <thead>\n            <tr>\n              <th>Communication:</th>\n              <th>Repair & Maintenance Issues:</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>\n                Our company is committed to delivering high touch customer service and we know that this starts with communication.\n                We have a steadfast commitment to respond and address client demands swiftly and effectively.\n                We utilize cutting-edge software to manage all of your properties efficiently.\n                Access your account online anytime, anywhere.\n              </td>\n              <td>\n                Maintenance is a necessary expense in owning rental property, when required we ensure the job is done quickly,\n                correctly and cost effective.  We supervise and coordinate comprehensive programs for all property maintenance,\n                repair, and renovations.  Jacob Lei has an extensive network of service providers as well as in house maintenance\n                to handle all your property maintenance and repair work. When maintenance is required we ensure the job is done quickly,\n                correctly and cost effective.\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <table id=\"rent\" class=\"table table-responsive\">\n            <thead>\n            <tr>\n              <th>Rent Collection:</th>\n              <th>Leasing/Tenant Screening:</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>\n                At Jacob Lei our systematic approach ensures our owners get their money faster.\n                Tenants receive automated rent invoices via email monthly with a detailed breakdown of any charges.\n                Tenants can also log-in to our website at any time to check rent balances or to confirm that previous payments\n                have been processed. With our diligent approach deposits are promptly made to owners.\n              </td>\n              <td>\n                We handle all tenant screening and leasing to ensure that only pre qualified individuals who passed credit screening\n                as well as criminal and evictions background  check are allowed to occupy your rental property.\n                Our systematic approach placing a tenant.\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <table id=\"marketing\" class=\"table table-responsive\">\n            <thead>\n            <tr>\n              <th>Emergency Repair Assistance:</th>\n              <th>Marketing & Advertising:</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>\n                The company’s trained and qualified service providers allows us to provide emergency services in a timely\n                and efficient manner.  On call maintenance and management personnel available on a 24/7/365 basis.\n              </td>\n              <td>\n                We provide comprehensive marketing services, which include  targeted advertising and informational materials.\n                Our efforts are tailored to maximizing exposure of our properties to potential tenants local and across the US.\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <table id=\"inspection\" class=\"table table-responsive\">\n            <thead>\n            <tr>\n              <th>Tenant Management:</th>\n              <th>Routine Property Inspections:</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>\n                We establish strong relationships with tenants to ensure a mutually beneficial experience for the tenant and the owner.\n              </td>\n              <td>\n                We perform regular inspections to detail property conditions and maintenance needs.\n                We facilitate all maintenance needs on the property in a cost effective and timely manner.\n              </td>\n            </tr>\n            </tbody>\n          </table>\n          <table id=\"accounting\" class=\"table table-responsive\">\n            <thead>\n            <tr>\n              <th>Comprehensive Accounting:</th>\n              <th></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <td>\n                We keep an accurate account of all cash flow. Every month you’ll get an owner statement which describes what was received,\n                what was paid out for maintenance issues, and the amount being remitted to you.\n                All information to your property will be available 24/7 through your owner portal.\n              </td>\n              <td>\n\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"col-xss-12 col-sm-12 hidden-md hidden-lg\">\n          <h4>Communication:</h4>\n          <p>\n            Our company is committed to delivering high touch customer service and we know that this starts with communication.\n            We have a steadfast commitment to respond and address client demands swiftly and effectively.\n            We utilize cutting-edge software to manage all of your properties efficiently.\n            Access your account online anytime, anywhere.\n          </p>\n          <h4>Repair & Maintenance Issues:</h4>\n          <p>\n            Maintenance is a necessary expense in owning rental property, when required we ensure the job is done quickly,\n            correctly and cost effective.  We supervise and coordinate comprehensive programs for all property maintenance,\n            repair, and renovations.  Jacob Lei has an extensive network of service providers as well as in house maintenance\n            to handle all your property maintenance and repair work. When maintenance is required we ensure the job is done quickly,\n            correctly and cost effective.\n          </p>\n          <h4>Rent Collection:</h4>\n          <p>\n            At Jacob Lei our systematic approach ensures our owners get their money faster.\n            Tenants receive automated rent invoices via email monthly with a detailed breakdown of any charges.\n            Tenants can also log-in to our website at any time to check rent balances or to confirm that previous payments\n            have been processed. With our diligent approach deposits are promptly made to owners.\n           </p>\n          <h4>Leasing/Tenant Screening:</h4>\n          <p>\n            We handle all tenant screening and leasing to ensure that only pre qualified individuals who passed credit screening\n            as well as criminal and evictions background  check are allowed to occupy your rental property.\n            Our systematic approach placing a tenant.\n          </p>\n        </div>\n        <div class=\"col-xss-12 col-sm-12 hidden-md hidden-lg\">\n          <h4>Emergency Repair Assistance:</h4>\n          <p>\n            The company’s trained and qualified service providers allows us to provide emergency services in a timely\n            and efficient manner.  On call maintenance and management personnel available on a 24/7/365 basis.\n          </p>\n          <h4>Marketing & Advertising:</h4>\n          <p>\n            We provide comprehensive marketing services, which include  targeted advertising and informational materials.\n            Our efforts are tailored to maximizing exposure of our properties to potential tenants local and across the US.\n          </p>\n          <h4>Tenant Management:</h4>\n          <p>\n            We establish strong relationships with tenants to ensure a mutually beneficial experience for the tenant and the owner.\n          </p>\n          <h4>Routine Property Inspections:</h4>\n          <p>\n            We perform regular inspections to detail property conditions and maintenance needs.\n            We facilitate all maintenance needs on the property in a cost effective and timely manner.\n          </p>\n          <h4>Comprehensive Accounting:</h4>\n          <p>\n            We keep an accurate account of all cash flow. Every month you’ll get an owner statement which describes what was received,\n            what was paid out for maintenance issues, and the amount being remitted to you.\n            All information to your property will be available 24/7 through your owner portal.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--<div class=\"row justify-content-md-center content-padding\">-->\n  <!--<p>-->\n  <!--We specialize in the management of residential and commercial properties.-->\n  <!--Our business is designed to tailor an individual program that will suit your property-->\n  <!--management needs. We operate our business with the highest degree of integrity,-->\n  <!--ethics and professionalism while providing outstanding property management services.-->\n  <!--e specialize in the management of residential and commercial properties.-->\n  <!--Our business is designed to tailor an individual program that will suit your property-->\n  <!--management needs. We operate our business with the highest degree of integrity,-->\n  <!--ethics and professionalism while providing outstanding property management services.-->\n  <!--</p>-->\n  <!--</div>-->\n\n\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        this.desktop = false;
    }
    ServicesComponent.prototype.showTable = function () {
        this.desktop = true;
    };
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/single/single.component.css":
/*!*********************************************!*\
  !*** ./src/app/single/single.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-padding {\n  padding-top: 20%;\n}\np {\n  color: #333 !important;\n  padding-top: 3%;\n}\nh3 {\n  color: #444 !important;\n  letter-spacing: 4px;\n}\nh4 {\n  margin-bottom: 0px !important;\n  letter-spacing: 2px;\n  font-size: 18px;\n  color: #444;\n}\n.container {\n  /*!*padding-top: 10%;*!*/\n  padding: 7% 0 !important;\n  /*!*padding-top: 10% !important;*!*/\n  /*!*padding-bottom: 10% !important;*!*/\n}\n.container-content {\n  /*background-color: #ddd;*/\n  padding: 11px !important;\n  border-radius: 3px;\n\n}\ntd {\n  font: 400 15px/1.8 Lato, sans-serif;\n  color: #333 !important;\n  font-style: italic;\n  letter-spacing: 0px;\n  width: 50%;\n  padding: 1px 0px 4px 4px !important;\n  border: none !important;\n  border-color: transparent !important;\n}\ntr {\n  font: 400 15px/1.8 Lato, sans-serif;\n  margin-bottom: 0px !important;\n  letter-spacing: 2px;\n  font-size: 18px;\n  color: #444;\n}\n.table>thead>tr>th {\n  border: none !important;\n  border-color: transparent !important;\n}\nthead {\n  border-color: transparent !important;\n}\n@media only screen and (max-width: 640px) {\n  .container-content {\n    margin: 2%;\n  }\n  .container {\n    padding-top: 10% !important;\n    padding-bottom: 10% !important;\n  }\n}\n.img-responsive {\n  max-width: 60%;\n  margin-left: 20%;\n}\n@media screen and (min-width: 768px) {\n  .container-content {\n    padding-top: 45px !important;\n  }\n}\ntable {\n  border-spacing: 25px 0px !important;\n  border-collapse: separate;\n}\ntd {\n  padding: 0px 55px 0px 0px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlL3NpbmdsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7QUFDRDtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLHVDQUF1QztDQUN4QztBQUVEO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixtQkFBbUI7O0NBRXBCO0FBQ0Q7RUFDRSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIscUNBQXFDO0NBQ3RDO0FBQ0Q7RUFDRSxvQ0FBb0M7RUFDcEMsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIscUNBQXFDO0NBQ3RDO0FBQ0Q7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFDRDtFQUNFO0lBQ0UsV0FBVztHQUNaO0VBQ0Q7SUFDRSw0QkFBNEI7SUFDNUIsK0JBQStCO0dBQ2hDO0NBQ0Y7QUFDRDtFQUNFLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFO0lBQ0UsNkJBQTZCO0dBQzlCO0NBQ0Y7QUFDRDtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLHFDQUFxQztDQUN0QyIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS9zaW5nbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMjAlO1xufVxucCB7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAzJTtcbn1cbmgzIHtcbiAgY29sb3I6ICM0NDQgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbn1cbmg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0NDQ7XG59XG4uY29udGFpbmVyIHtcbiAgLyohKnBhZGRpbmctdG9wOiAxMCU7KiEqL1xuICBwYWRkaW5nOiA3JSAwICFpbXBvcnRhbnQ7XG4gIC8qISpwYWRkaW5nLXRvcDogMTAlICFpbXBvcnRhbnQ7KiEqL1xuICAvKiEqcGFkZGluZy1ib3R0b206IDEwJSAhaW1wb3J0YW50OyohKi9cbn1cblxuLmNvbnRhaW5lci1jb250ZW50IHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyovXG4gIHBhZGRpbmc6IDExcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG59XG50ZCB7XG4gIGZvbnQ6IDQwMCAxNXB4LzEuOCBMYXRvLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDFweCAwcHggNHB4IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxudHIge1xuICBmb250OiA0MDAgMTVweC8xLjggTGF0bywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0NDQ7XG59XG4udGFibGU+dGhlYWQ+dHI+dGgge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxudGhlYWQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXItY29udGVudCB7XG4gICAgbWFyZ2luOiAyJTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJSAhaW1wb3J0YW50O1xuICB9XG59XG4uaW1nLXJlc3BvbnNpdmUge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXItY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDQ1cHggIWltcG9ydGFudDtcbiAgfVxufVxudGFibGUge1xuICBib3JkZXItc3BhY2luZzogMjVweCAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cbnRkIHtcbiAgcGFkZGluZzogMHB4IDU1cHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/single/single.component.html":
/*!**********************************************!*\
  !*** ./src/app/single/single.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <!--<script src=\"/src/assets/js/hideTable.js\"></script>-->\n</head>\n<div class=\"container bg-0\">\n  <!--style=\"padding-top: 7% !important; padding-bottom: 7% !important\"-->\n  <!--<div class=\"row pull-right\">-->\n  <!--<div class=\"col-sm-12 col-md-12 col-lg-12\">-->\n  <!--<a href=\"http://www.jacobleiadmin.com/\" target=\"_blank\"><i class=\"fa fa-circle\"></i></a>-->\n  <!--</div>-->\n  <!--</div>-->\n  <div class=\"container container-content\">\n    <div class=\"row\">\n      <div class=\"col-xss-12 col-sm-12 col-md-12 col-lg-12\">\n        <div>\n          <h3>\n            SINGLE FAMILY PROPERTY MANAGEMENT\n          </h3>\n          <img class=\"img-responsive\" src=\"assets/img/single01.png\" alt=\"Single Property\">\n        </div>\n        <div>\n          <p>\n            Our area property managers will safeguard your property, manage your tenants, and protect your\n            investment,\n            all without you having to lift a finger. You'll be amazed at how much time and money our residential\n            property management services can save you in both the long and short term.<br>\n            Managing your real estate investment properties the smart way through effective and efficient property management services.\n            Effective property management is about strategic planning, addressing common challenges and providing property\n            specific solutions. At Jacob Lei, we can help whether you have a single family home or a vast portfolio.\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <!--<div class=\"col-xss-12 col-sm-12 col-md-12 col-lg-12\">-->\n        <!--<p>-->\n          <!--Managing your real estate investment properties the smart way through effective and efficient property management services.-->\n          <!--Effective property management is about strategic planning, addressing common challenges and providing property-->\n          <!--specific solutions. At Jacob Lei, we can help whether you have a single family home or a vast portfolio.-->\n        <!--</p>-->\n      <!--</div>-->\n      <div id=\"desktop\"  class=\"col-md-12 col-lg-12 visible-md visible-lg visible-xxl \">\n        <table id=\"communication\" class=\"table table-responsive\">\n          <thead>\n          <tr>\n            <th>Communication:</th>\n            <th>Repair & Maintenance Issues:</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              Our company is committed to delivering high touch customer service and we know that this starts with communication.\n              We have a steadfast commitment to respond and address client demands swiftly and effectively.\n              We utilize cutting-edge software to manage all of your properties efficiently.\n              Access your account online anytime, anywhere.\n            </td>\n            <td>\n              Maintenance is a necessary expense in owning rental property, when required we ensure the job is done quickly,\n              correctly and cost effective.  We supervise and coordinate comprehensive programs for all property maintenance,\n              repair, and renovations.  Jacob Lei has an extensive network of service providers as well as in house maintenance\n              to handle all your property maintenance and repair work. When maintenance is required we ensure the job is done quickly,\n              correctly and cost effective.\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <table id=\"rent\" class=\"table table-responsive\">\n          <thead>\n          <tr>\n            <th>Rent Collection:</th>\n            <th>Leasing/Tenant Screening:</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              At Jacob Lei our systematic approach ensures our owners get their money faster.\n              Tenants receive automated rent invoices via email monthly with a detailed breakdown of any charges.\n              Tenants can also log-in to our website at any time to check rent balances or to confirm that previous payments\n              have been processed. With our diligent approach deposits are promptly made to owners.\n            </td>\n            <td>\n              We handle all tenant screening and leasing to ensure that only pre qualified individuals who passed credit screening\n              as well as criminal and evictions background  check are allowed to occupy your rental property.\n              Our systematic approach placing a tenant.\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <table id=\"marketing\" class=\"table table-responsive\">\n          <thead>\n          <tr>\n            <th>Emergency Repair Assistance:</th>\n            <th>Marketing & Advertising:</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              The company’s trained and qualified service providers allows us to provide emergency services in a timely\n              and efficient manner.  On call maintenance and management personnel available on a 24/7/365 basis.\n            </td>\n            <td>\n              We provide comprehensive marketing services, which include  targeted advertising and informational materials.\n              Our efforts are tailored to maximizing exposure of our properties to potential tenants local and across the US.\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <table id=\"inspection\" class=\"table table-responsive\">\n          <thead>\n          <tr>\n            <th>Tenant Management:</th>\n            <th>Routine Property Inspections:</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              We establish strong relationships with tenants to ensure a mutually beneficial experience for the tenant and the owner.\n            </td>\n            <td>\n              We perform regular inspections to detail property conditions and maintenance needs.\n              We facilitate all maintenance needs on the property in a cost effective and timely manner.\n            </td>\n          </tr>\n          </tbody>\n        </table>\n        <table id=\"accounting\" class=\"table table-responsive\">\n          <thead>\n          <tr>\n            <th>Comprehensive Accounting:</th>\n            <th></th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td>\n              We keep an accurate account of all cash flow. Every month you’ll get an owner statement which describes what was received,\n              what was paid out for maintenance issues, and the amount being remitted to you.\n              All information to your property will be available 24/7 through your owner portal.\n            </td>\n            <td>\n\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"col-xss-12 col-sm-12 hidden-md hidden-lg\">\n        <h4>Communication:</h4>\n        <p>\n          Our company is committed to delivering high touch customer service and we know that this starts with communication.\n          We have a steadfast commitment to respond and address client demands swiftly and effectively.\n          We utilize cutting-edge software to manage all of your properties efficiently.\n          Access your account online anytime, anywhere.\n        </p>\n        <h4>Repair & Maintenance Issues:</h4>\n        <p>\n          Maintenance is a necessary expense in owning rental property, when required we ensure the job is done quickly,\n          correctly and cost effective.  We supervise and coordinate comprehensive programs for all property maintenance,\n          repair, and renovations.  Jacob Lei has an extensive network of service providers as well as in house maintenance\n          to handle all your property maintenance and repair work. When maintenance is required we ensure the job is done quickly,\n          correctly and cost effective.\n        </p>\n        <h4>Rent Collection:</h4>\n        <p>\n          At Jacob Lei our systematic approach ensures our owners get their money faster.\n          Tenants receive automated rent invoices via email monthly with a detailed breakdown of any charges.\n          Tenants can also log-in to our website at any time to check rent balances or to confirm that previous payments\n          have been processed. With our diligent approach deposits are promptly made to owners.\n        </p>\n        <h4>Leasing/Tenant Screening:</h4>\n        <p>\n          We handle all tenant screening and leasing to ensure that only pre qualified individuals who passed credit screening\n          as well as criminal and evictions background  check are allowed to occupy your rental property.\n          Our systematic approach placing a tenant.\n        </p>\n      </div>\n      <div class=\"col-xss-12 col-sm-12 hidden-md hidden-lg\">\n        <h4>Emergency Repair Assistance:</h4>\n        <p>\n          The company’s trained and qualified service providers allows us to provide emergency services in a timely\n          and efficient manner.  On call maintenance and management personnel available on a 24/7/365 basis.\n        </p>\n        <h4>Marketing & Advertising:</h4>\n        <p>\n          We provide comprehensive marketing services, which include  targeted advertising and informational materials.\n          Our efforts are tailored to maximizing exposure of our properties to potential tenants local and across the US.\n        </p>\n        <h4>Tenant Management:</h4>\n        <p>\n          We establish strong relationships with tenants to ensure a mutually beneficial experience for the tenant and the owner.\n        </p>\n        <h4>Routine Property Inspections:</h4>\n        <p>\n          We perform regular inspections to detail property conditions and maintenance needs.\n          We facilitate all maintenance needs on the property in a cost effective and timely manner.\n        </p>\n        <h4>Comprehensive Accounting:</h4>\n        <p>\n          We keep an accurate account of all cash flow. Every month you’ll get an owner statement which describes what was received,\n          what was paid out for maintenance issues, and the amount being remitted to you.\n          All information to your property will be available 24/7 through your owner portal.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<!--<div class=\"row justify-content-md-center content-padding\">-->\n<!--<p>-->\n<!--We specialize in the management of residential and commercial properties.-->\n<!--Our business is designed to tailor an individual program that will suit your property-->\n<!--management needs. We operate our business with the highest degree of integrity,-->\n<!--ethics and professionalism while providing outstanding property management services.-->\n<!--e specialize in the management of residential and commercial properties.-->\n<!--Our business is designed to tailor an individual program that will suit your property-->\n<!--management needs. We operate our business with the highest degree of integrity,-->\n<!--ethics and professionalism while providing outstanding property management services.-->\n<!--</p>-->\n<!--</div>-->\n\n\n"

/***/ }),

/***/ "./src/app/single/single.component.ts":
/*!********************************************!*\
  !*** ./src/app/single/single.component.ts ***!
  \********************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleComponent = /** @class */ (function () {
    function SingleComponent() {
    }
    SingleComponent.prototype.ngOnInit = function () {
    };
    SingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single',
            template: __webpack_require__(/*! ./single.component.html */ "./src/app/single/single.component.html"),
            styles: [__webpack_require__(/*! ./single.component.css */ "./src/app/single/single.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleComponent);
    return SingleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaelmacbookpro13/WebstormProjects/jacobLei/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map