<template>
<div class="amap-page-container" style="height:500px">
      <el-amap  @dragend='getMap()' ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
      <!-- <el-amap-marker vid="component-marker" :position="componentMarker.position" :content-render="componentMarker.contentRender" ></el-amap-marker> -->
       <el-amap-marker v-for="(marker, index) in markers" :key='index' :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :title="marker.title" :vid="index" ></el-amap-marker>
      </el-amap>

      <div class="toolbar">
        <button @click="getMap()">get map</button>
      </div>
    </div>

</template>

<script>
import VueAMap from 'vue-amap'; // 高德

let amapManager = new VueAMap.AMapManager();
export default {
   data: function() {
        return {
          amapManager,
          zoom: 14,
          center: [113.543606,22.274116],
              markers: [
            {
              position: [113.543606,22.274116],
              events: {
                click: () => {
                  alert('click marker');
                },
                // dragend: (e) => {
                //   console.log('---event---: dragend')
                //   this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
                // }
              },
              visible: true,
              draggable: false,
             title:'我在这里'
            }
          ],
          events: {
            init: (o) => {
              console.log(o.getCenter())
              console.log(this.$refs.map.$$getInstance())
              o.getCity(result => {
                console.log(result)
              })
            },
            'moveend': () => {
                console.log(1)
            },
            'zoomchange': () => {
            },
            // 'click': (e) => {
            //   alert('map clicked');
            // }
          },
          plugin: ['ToolBar', {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(o) {
                console.log(o);
              }
            }
          }],
            
        };
      },

      methods: {
        getMap() {
          // amap vue component
          console.log(amapManager._componentMap);
          // gaode map instance
          console.log(amapManager._map);
        }
      }
}
</script>

<style>

</style>