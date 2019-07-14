import bluebird from 'bluebird';
import threejsInitional from 'module/threejsInitional';
/**
 * @param {!Object} obj
 * @return {undefined}
 */
var Renderer = function (obj) {
    if (obj.manager) {
        this.manager = obj.manager;
    }
    if (obj.cubemaps) {
        this.cubemaps = obj.cubemaps;
    }
    if (obj.sh) {
        this.sh = obj.sh;
    }
    if (obj.textures) {
        this.textures = obj.textures;
    }
    if (obj.panoramas) {
        this.panoramas = obj.panoramas;
    }
    if (obj.geometries) {
        this.geometries = obj.geometries;
    }
};
/**
 * @return {?}
 */
Renderer.prototype.load = function () {
    var params = {};
    return this.cubemaps && (params.cubemap = threejsInitional.loadSpecularCubemaps(this.cubemaps)), this.panoramas && (params.panorama = threejsInitional.loadPanoramas(this.panoramas)), this.sh && (params.sh = threejsInitional.loadSH(this.sh)), this.textures && (params.texture = threejsInitional.loadTextures(this.textures, '')), this.geometries && (params.geometry = threejsInitional.loadGeometries(this.geometries)), bluebird.props(params);
};

/** @type {function(!Object): undefined} */
export default Renderer;
