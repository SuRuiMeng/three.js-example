projectData.meshData = (function () {
    function meshData() {};
    meshData.prototype = {
        createLoader: function (scene,render) {
            var self = this;
            self._fbxLoader = new THREE.FBXLoader();
            self._fbxTextureLoader = new THREE.TextureLoader();
            projectUtil.meshUtil.prototype.envMapLoadUtil(render).then(function (value) {
                self._rgbmCubeRenderTarget = value;
            });
            
            self._scene = scene;
            projectUtil.meshUtil.prototype.fontLoadUtil().then(function (value) {
                self._font  = value;
            });
            
            return self;
        },
        fbxDate: function (array) {
            var fbxPath = "fbx/"
            var fbxParams = new Array();
            fbxParams[0] = {
                type: 1,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[2],
                text: "",
                rotation: "",
                position: "",
                scale: new THREE.Vector3(0.1, 0.1, 0.1),
                size: "",
                name: "",
                color: new THREE.Color(0xFDDFC5),
                fbxUrl: fbxPath + "WAT_tuzi.FBX",
                textureMapUrl: fbxPath + "WAT_tou_d.png",
                textureAoMapUrl: fbxPath + "WAT_di__AO.jpg",
                textureNormalMapUrl: fbxPath + "WAT_tou_n.png",
                texturealphaMapUrl: "",
                transparent: false,
                boxArray: "",
            };
            fbxParams[1] = {
                type: 1,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[2],
                text: "",
                rotation: "",
                position: "",
                scale: new THREE.Vector3(0.1, 0.1, 0.1),
                size: "",
                name: "",
                color: new THREE.Color(0xFDD7B7),
                fbxUrl: fbxPath + "WAT_yifu.FBX",
                textureMapUrl: fbxPath + "WAT_tou_d.png",
                textureAoMapUrl: fbxPath + "WAT_di__AO.jpg",
                textureNormalMapUrl: fbxPath + "WAT_shen_n.png",
                texturealphaMapUrl: "",
                transparent: false,
                boxArray: "",
            };
            fbxParams[2] = {
                type: 1,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[2],
                text: "",
                rotation: "",
                position: "",
                scale: new THREE.Vector3(0.01, 0.01, 0.01),
                size: "",
                name: "",
                color: "",
                fbxUrl: fbxPath + "WAT_yingzi.FBX",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: fbxPath + "WAT_yingzii_Ao.jpg",
                transparent: true,
                boxArray: "",
            };
            fbxParams[3] = {
                type: 3,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[0],
                text: "",
                rotation: "",
                position: "",
                scale: new THREE.Vector3(0.01, 0.01, 0.01),
                size: "",
                name: "",
                color: "",
                fbxUrl: fbxPath + "changjin.FBX",
                textureMapUrl: "",
                textureAoMapUrl: fbxPath + "changjing_AO.jpg",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[4] = {
                type: 2,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[1],
                text: "",
                rotation: new THREE.Euler(0, Math.PI / 2, 0),
                position: new THREE.Vector3(5, 5, 5),
                scale: new THREE.Vector3(40, 40, 40),
                size: "",
                name: "31",
                color: new THREE.Color(0x3f48cc),
                fbxUrl: fbxPath + "3.FBX",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: fbxPath + "bian.jpg",
                transparent: "",
                boxArray: array[5],
            };
            fbxParams[5] = {
                type: 2,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[1],
                text: "",
                rotation: new THREE.Euler(0, Math.PI / 2, 0),
                position: new THREE.Vector3(-5, 18, -5),
                scale: new THREE.Vector3(30, 30, 30),
                size: "",
                name: "32",
                color: new THREE.Color(0x3e8c85),
                fbxUrl: fbxPath + "3.FBX",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: fbxPath + "bian.jpg",
                transparent: "",
                boxArray: array[5],
            };
            fbxParams[6] = {
                type: 2,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[1],
                text: "",
                rotation: new THREE.Euler(Math.PI / 2, 0, 0),
                position: new THREE.Vector3(-5, 7, 2),
                scale: new THREE.Vector3(40, 40, 40),
                size: "",
                name: "5",
                color: new THREE.Color(0xffb59f),
                fbxUrl: fbxPath + "5.FBX",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: fbxPath + "bian.jpg",
                transparent: "",
                boxArray: array[5],
            };
            fbxParams[7] = {
                type: 2,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[1],
                text: "",
                rotation: new THREE.Euler(0, Math.PI / 2, 0),
                position: new THREE.Vector3(5, 14, -2),
                scale: new THREE.Vector3(30, 30, 30),
                size: "",
                name: "7",
                color: new THREE.Color(0xf4c760),
                fbxUrl: fbxPath + "7.FBX",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: fbxPath + "bian.jpg",
                transparent: "",
                boxArray: array[5],
            };
            fbxParams[8] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: "6cm",
                rotation: new THREE.Euler(0, -Math.PI / 2, 0),
                position: new THREE.Vector3(-4, 0, -1),
                scale: new THREE.Vector3(1, 1, 1),
                size: 1,
                name: "left6cm",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[9] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, -Math.PI / 2, 0),
                position: new THREE.Vector3(-4, 0, -3),
                scale: new THREE.Vector3(5, 1, 1),
                size: 1,
                name: "5heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[10] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, -Math.PI / 2, 0),
                position: new THREE.Vector3(-4, 0.2, 3),
                scale: new THREE.Vector3(5, 1, 1),
                size: 1,
                name: "5heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[11] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, -Math.PI / 2, 0),
                position: new THREE.Vector3(-4, 0.2, -3.2),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[12] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, -Math.PI / 2, 0),
                position: new THREE.Vector3(-4, 0.2, 3),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };

            fbxParams[13] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: "6cm",
                rotation: new THREE.Euler(0, 0, 0),
                position: new THREE.Vector3(-1, -1.5, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 1,
                name: "bottom6cm",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[14] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, 0, 0),
                position: new THREE.Vector3(-3, -1.5, 0),
                scale: new THREE.Vector3(5, 1, 1),
                size: 1,
                name: "5heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[15] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, 0, 0),
                position: new THREE.Vector3(1.5, -1.5, 0),
                scale: new THREE.Vector3(5, 1, 1),
                size: 1,
                name: "5heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[16] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, 0, 0),
                position: new THREE.Vector3(-3.2, -1.3, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[17] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, 0, 0),
                position: new THREE.Vector3(3.5, -1.3, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };

            fbxParams[18] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: "10cm",
                rotation: new THREE.Euler(0, 0, 0),
                position: new THREE.Vector3(-1.5, -1.5, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 1,
                name: "bottom6cm",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[19] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, 0, 0),
                position: new THREE.Vector3(-4, -1.5, 0),
                scale: new THREE.Vector3(5, 1, 1),
                size: 1,
                name: "5heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[20] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, 0, 0),
                position: new THREE.Vector3(1.5, -1.5, 0),
                scale: new THREE.Vector3(5, 1, 1),
                size: 1,
                name: "5heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[21] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, 0, 0),
                position: new THREE.Vector3(-4, -1.3, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[22] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, 0, 0),
                position: new THREE.Vector3(3.5, -1.3, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };

            fbxParams[23] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: "11cm",
                rotation: new THREE.Euler(0, -Math.PI / 2, 0),
                position: new THREE.Vector3(-4, 0, -1.5),
                scale: new THREE.Vector3(1, 1, 1),
                size: 1,
                name: "left6cm",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[24] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, -Math.PI / 2, 0),
                position: new THREE.Vector3(-4, 0, -3.5),
                scale: new THREE.Vector3(4, 1, 1),
                size: 1,
                name: "4heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[25] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, -Math.PI / 2, 0),
                position: new THREE.Vector3(-4, 0.2, 3),
                scale: new THREE.Vector3(4, 1, 1),
                size: 1,
                name: "4heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[26] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, -Math.PI / 2, 0),
                position: new THREE.Vector3(-4, 0.2, -3.7),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[27] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, -Math.PI / 2, 0),
                position: new THREE.Vector3(-4, 0.2, 3),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };

            fbxParams[28] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: "35cm",
                rotation: new THREE.Euler(0, 0, Math.PI / 2),
                position: new THREE.Vector3(5, 8, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 1,
                name: "left6cm",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[29] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, 0, Math.PI / 2),
                position: new THREE.Vector3(5, 11, 0),
                scale: new THREE.Vector3(20, 1, 1),
                size: 1,
                name: "20heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[30] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, 0, Math.PI / 2),
                position: new THREE.Vector3(4.8, -0.5, 0),
                scale: new THREE.Vector3(20, 1, 1),
                size: 1,
                name: "20heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[31] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, 0, Math.PI / 2),
                position: new THREE.Vector3(4.8, 19.5, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[32] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[4],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, 0, -Math.PI / 2),
                position: new THREE.Vector3(4.8, -0.5, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };

            fbxParams[33] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: "22cm",
                rotation: new THREE.Euler(0, 0, Math.PI / 2),
                position: new THREE.Vector3(5, 8, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 1,
                name: "left6cm",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[34] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, 0, Math.PI / 2),
                position: new THREE.Vector3(5, 11, 0),
                scale: new THREE.Vector3(20, 1, 1),
                size: 1,
                name: "20heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[35] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: "-",
                rotation: new THREE.Euler(0, 0, Math.PI / 2),
                position: new THREE.Vector3(4.8, -0.5, 0),
                scale: new THREE.Vector3(20, 1, 1),
                size: 1,
                name: "20heng",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[36] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, 0, Math.PI / 2),
                position: new THREE.Vector3(4.8, 19.5, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            fbxParams[37] = {
                type: 0,
                scene: this._scene,
                rgbmCubeRenderTarget: this._rgbmCubeRenderTarget,
                fbxTextureLoader: this._fbxTextureLoader,
                fbxLoader: this._fbxLoader,
                arr: array[3],
                font: this._font,
                text: ".",
                rotation: new THREE.Euler(0, 0, -Math.PI / 2),
                position: new THREE.Vector3(4.8, -0.5, 0),
                scale: new THREE.Vector3(1, 1, 1),
                size: 2,
                name: "dian",
                color: "",
                fbxUrl: "",
                textureMapUrl: "",
                textureAoMapUrl: "",
                textureNormalMapUrl: "",
                texturealphaMapUrl: "",
                transparent: "",
                boxArray: "",
            };
            return fbxParams;
        }
    }
    return meshData;
})();