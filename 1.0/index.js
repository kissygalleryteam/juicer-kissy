/**
 * @fileoverview 
 * @author liuhuo.gk<liuhuo.gk@taobao.com>
 * @module juicer-gallery
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class JuicerGallery
     * @constructor
     * @extends Base
     */
    function JuicerGallery(comConfig) {
        var self = this;
        //调用父类构造函数
        JuicerGallery.superclass.constructor.call(self, comConfig);
    }
    S.extend(JuicerGallery, Base, /** @lends JuicerGallery.prototype*/{

    }, {ATTRS : /** @lends JuicerGallery*/{

    }});
    return JuicerGallery;
}, {requires:['node', 'base']});



