
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
import { __extends } from "tslib";
import createSeriesDataSimply from '../helper/createSeriesDataSimply.js';
import SeriesModel from '../../model/Series.js';

var GaugeSeriesModel =
/** @class */
function (_super) {
  __extends(GaugeSeriesModel, _super);

  function GaugeSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.type = GaugeSeriesModel.type;
    _this.visualStyleAccessPath = 'itemStyle';
    return _this;
  }

  GaugeSeriesModel.prototype.getInitialData = function (option, ecModel) {
    return createSeriesDataSimply(this, ['value']);
  };

  GaugeSeriesModel.type = 'series.gauge';
  GaugeSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    colorBy: 'data',
    // ??????????????????
    center: ['50%', '50%'],
    legendHoverLink: true,
    radius: '75%',
    startAngle: 225,
    endAngle: -45,
    clockwise: true,
    // ?????????
    min: 0,
    // ?????????
    max: 100,
    // ????????????????????????10
    splitNumber: 10,
    // ????????????
    axisLine: {
      // ?????????????????????show??????????????????
      show: true,
      roundCap: false,
      lineStyle: {
        color: [[1, '#E6EBF8']],
        width: 10
      }
    },
    // ????????????
    progress: {
      // ?????????????????????show??????????????????
      show: false,
      overlap: true,
      width: 10,
      roundCap: false,
      clip: true
    },
    // ?????????
    splitLine: {
      // ?????????????????????show??????????????????
      show: true,
      // ??????length????????????
      length: 10,
      distance: 10,
      // ??????lineStyle?????????lineStyle?????????????????????
      lineStyle: {
        color: '#63677A',
        width: 3,
        type: 'solid'
      }
    },
    // ??????????????????
    axisTick: {
      // ??????show????????????????????????????????????
      show: true,
      // ??????split???????????????
      splitNumber: 5,
      // ??????length????????????
      length: 6,
      distance: 10,
      // ??????lineStyle??????????????????
      lineStyle: {
        color: '#63677A',
        width: 1,
        type: 'solid'
      }
    },
    axisLabel: {
      show: true,
      distance: 15,
      // formatter: null,
      color: '#464646',
      fontSize: 12,
      rotate: 0
    },
    pointer: {
      icon: null,
      offsetCenter: [0, 0],
      show: true,
      showAbove: true,
      length: '60%',
      width: 6,
      keepAspect: false
    },
    anchor: {
      show: false,
      showAbove: false,
      size: 6,
      icon: 'circle',
      offsetCenter: [0, 0],
      keepAspect: false,
      itemStyle: {
        color: '#fff',
        borderWidth: 0,
        borderColor: '#5470c6'
      }
    },
    title: {
      show: true,
      // x, y?????????px
      offsetCenter: [0, '20%'],
      // ???????????????????????????????????????????????????TEXTSTYLE
      color: '#464646',
      fontSize: 16,
      valueAnimation: false
    },
    detail: {
      show: true,
      backgroundColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      borderColor: '#ccc',
      width: 100,
      height: null,
      padding: [5, 10],
      // x, y?????????px
      offsetCenter: [0, '40%'],
      // formatter: null,
      // ???????????????????????????????????????????????????TEXTSTYLE
      color: '#464646',
      fontSize: 30,
      fontWeight: 'bold',
      lineHeight: 30,
      valueAnimation: false
    }
  };
  return GaugeSeriesModel;
}(SeriesModel);

export default GaugeSeriesModel;