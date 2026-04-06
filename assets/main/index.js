System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,t,r,n,o,l,a,s,p,c,u,d;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,a=e.SpriteFrame,s=e.Collider2D,p=e.Contact2DType,c=e.Vec3,u=e.Sprite,d=e.Component}],execute:function(){var h,v,f,g,m,B,b,y,C,w,z;o._RF.push({},"a636538ITtOGpLTjuv97Evs","Bird",void 0);var S=l.ccclass,F=l.property;e("Bird",(h=S("Bird"),v=F(a),f=F(a),g=F(a),m=F([Number]),h((y=i((b=function(e){function i(){for(var i,t=arguments.length,o=new Array(t),l=0;l<t;l++)o[l]=arguments[l];return i=e.call.apply(e,[this].concat(o))||this,r(i,"spriteBirdBiru",y,n(i)),r(i,"spriteBirdKuning",C,n(i)),r(i,"spriteBirdMerah",w,n(i)),r(i,"scales",z,n(i)),i.level=1,i}t(i,e);var o=i.prototype;return o.start=function(){var e=this.getComponent(s);e&&e.on(p.BEGIN_CONTACT,this.onBeginContact,this),this.updateSprite()},o.onBeginContact=function(e,t,r){var n=e.node.getComponent(i),o=t.node.getComponent(i);n&&o?n.level===o.level&&n.level<3&&this.mergeWith(o):console.warn("Node tanpa Bird:",e.node.name,t.node.name)},o.mergeWith=function(e){if(e.node.isValid){e.node.active=!1,this.levelUp();var i=this.node.getWorldPosition(),t=e.node.getWorldPosition(),r=new c((i.x+t.x)/2,(i.y+t.y)/2,(i.z+t.z)/2);this.node.setWorldPosition(r),console.log(this.node.name+" merged with "+e.node.name+" to level "+this.level)}},o.levelUp=function(){if(this.level<3){this.level++;var e=this.scales[this.level-1];void 0!==e&&this.node.setScale(e,e,1),this.updateSprite()}},o.updateSprite=function(){var e=this.getComponent(u);switch(this.level){case 1:e.spriteFrame=this.spriteBirdBiru;break;case 2:e.spriteFrame=this.spriteBirdKuning;break;case 3:e.spriteFrame=this.spriteBirdMerah}},i}(d)).prototype,"spriteBirdBiru",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=i(b.prototype,"spriteBirdKuning",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=i(b.prototype,"spriteBirdMerah",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=i(b.prototype,"scales",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=b))||B));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o,i,a,l,c,s,p,u,y,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,l=t.Prefab,c=t.input,s=t.Input,p=t.instantiate,u=t.RigidBody2D,y=t.ERigidBody2DType,f=t.Component}],execute:function(){var d,h,m,b,g;i._RF.push({},"08c79LdCeRKlJjRB+mmzfSK","GameController",void 0);var v=a.ccclass,C=a.property;t("GameController",(d=v("GameController"),h=C({type:l}),d((g=e((b=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",g,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){c.on(s.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){var e=p(this.birdPrefab),r=t.getUILocation();e.setParent(this.node),e.setWorldPosition(r.x,r.y,0),e.getComponent(u).type=y.Dynamic,e.getComponent(u).wakeUp()},e}(f)).prototype,"birdPrefab",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=b))||m));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});