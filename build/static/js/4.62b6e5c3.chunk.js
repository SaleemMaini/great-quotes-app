(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{40:function(e,t,c){"use strict";var n=c(41),s=c.n(n),o=(c(0),c(1));t.a=function(){return Object(o.jsxs)("div",{className:s.a.noquotes,children:[Object(o.jsx)("p",{children:"No quotes found!"}),Object(o.jsx)("a",{href:"/new-quote",className:"btn",children:"Add a Quote"})]})}},41:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__1SUmS"}},49:function(e,t,c){e.exports={comments:"Comments_comments__2BHE-"}},50:function(e,t,c){e.exports={form:"NewCommentForm_form__3uHTb",loading:"NewCommentForm_loading__1myoy",control:"NewCommentForm_control__jU1Jr",actions:"NewCommentForm_actions__1kTPl"}},51:function(e,t,c){e.exports={item:"CommentItem_item__1QrSk"}},52:function(e,t,c){e.exports={comments:"CommentsList_comments__1s2Sg"}},53:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__11Mek"}},56:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(15),o=c(8),a=c(0),r=c(42),m=c(38),j=c(39),i=c(49),d=c.n(i),u=c(50),l=c.n(u),b=c(1),x=function(e){var t=Object(a.useRef)(),c=Object(m.a)(j.a),n=c.sendRequest,o=c.status,r=c.error,i=e.onAddedComment;Object(a.useEffect)((function(){"completed"!==o||r||i()}),[o,r,i]);var d=function(c){c.preventDefault();var s=t.current.value;n({commentData:{text:s},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:l.a.form,onSubmit:d,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(s.a,{})}),Object(b.jsxs)("div",{className:l.a.control,onSubmit:d,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:l.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(51),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(52),N=c.n(p),_=function(e){return Object(b.jsx)("ul",{className:N.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],o=t[1],i=Object(n.j)(),u=i.quoteId,l=Object(m.a)(j.c),O=l.sendRequest,h=l.status,f=l.data;Object(a.useEffect)((function(){O(u)}),[O,u]);var p,N=Object(a.useCallback)((function(){O(u)}),[O,u]);return"pending"===h&&(p=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(s.a,{})})),"completed"===h&&f.length>0&&(p=Object(b.jsx)(_,{comments:f})),"completed"!==h||f&&0!==f.length||(p=Object(b.jsx)("p",{className:"centered",children:"No comments found"})),Object(b.jsxs)("section",{className:d.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:i.quoteId,onAddedComment:N}),p]})},q=c(53),C=c.n(q),g=function(e){return Object(b.jsxs)("figure",{className:C.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})},w=c(40);t.default=function(){var e=Object(m.a)(j.e,!0),t=e.sendRequest,c=e.status,r=e.data,i=e.error,d=Object(n.j)(),u=Object(n.k)(),l=d.quoteId;return Object(a.useEffect)((function(){t(l)}),[t,l]),"pending"===c?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(s.a,{})}):i?Object(b.jsx)("p",{className:"centered focused",children:i.message}):r.text?Object(b.jsxs)("section",{children:[Object(b.jsx)(g,{text:r.text,author:r.author}),Object(b.jsx)(n.c,{path:u.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(u.url,"/comments"),children:"Show Comments"})})}),Object(b.jsxs)(n.c,{path:"".concat(u.path,"/comments"),children:[Object(b.jsx)(v,{}),Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(u.url),children:"Hide Comments"})})]})]}):Object(b.jsx)(w.a,{})}}}]);
//# sourceMappingURL=4.62b6e5c3.chunk.js.map