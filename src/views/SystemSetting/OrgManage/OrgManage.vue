<template>
  <div>
    <a-row class="page-total-container">
      <a-breadcrumb>
        <a-breadcrumb-item>
          系统设置
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          企业认证
        </a-breadcrumb-item>
      </a-breadcrumb>
    </a-row>
    <div class="page-container">
      <div class="global-title-wrapper">
        <div class="extra">
          <i class="tip_dot">* </i><span class="tip_text">为必填项</span>
        </div>
      </div>
      <a-form :form="form">
        <div class="info_wrapper">
          <div class="enterprise_info content">
            <a-row :gutter="30">
              <a-col :span="8">
                <a-form-item
                  label="企业名称："
                  labelAlign="right"
                  v-bind="formItemLayout"
                >
                  <a-input
                    placeholder="请输入企业名称"
                    :disabled="disabled"
                    v-decorator="[
                      'unitName',
                      {
                        rules: [
                          { required: true, message: '企业名称为空', whitespace: true }
                        ]
                      }
                    ]"
                  />
                </a-form-item>
                <a-form-item
                  label="统一社会信用代码："
                  v-bind="formItemLayout"
                >
                  <a-input
                    :disabled="disabled"
                    @blur="serarchUnit"
                    placeholder="请输入统一社会信用代码"
                    v-decorator="[
                      'creditCode',
                      {
                        rules: [
                          {
                            required: true,
                            message: '统一社会信用代码为空或格式不正确',
                            whitespace: true,
                            pattern: REG.SOCIALCODE
                          }
                        ]
                      }
                    ]"
                  />
                </a-form-item>
                <a-form-item
                  label="企业类型："
                  v-bind="formItemLayout"
                  labelAlign="left"
                >
                  <a-select
                    :disabled="disabled"
                    @change="selectChange"
                    placeholder="请选择企业类型"
                    v-decorator="[
                      'unitType',
                      {
                        rules: [{required: true, message: '企业类型为空'}]
                      }
                    ]"
                  >
                    <a-select-option
                      v-for="(item, index) in unitTypes"
                      :key="index"
                      :value="item.dataVal"
                      :data="item.dataVal"
                    >
                      {{ item.dataName }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item
                  label="所属行业："
                  v-bind="formItemLayout"
                >
                  <a-cascader
                    :disabled="disabled"
                    :options="options"
                    placeholder="请选择所属行业"
                    @change="handleChange"
                    popupClassName="large"
                    :fieldNames="{ label: 'industryName', value: 'industryCode', children: 'children', code: 'industryCode' }"
                    v-decorator="[
                      'options',
                      {
                        rules: [{required: true, message: '所属行业为空'}]
                      }
                    ]"
                  />
                </a-form-item>
                <a-form-item
                  label="所在行政区："
                  v-bind="formItemLayout"
                >
                  <a-cascader
                    :disabled="disabled"
                    placeholder="请选择所在行政区"
                    v-decorator="[
                      'districts',
                      {
                        rules: [{required: true, message: '所在行政区为空'}]
                      }
                    ]"
                    :fieldNames="{ label: 'regionName', value: 'regionCode', children: 'children', code: 'regionCode' }"
                    :options="districts"
                    @change="onChange"
                    popupClassName="large"
                  >
                  </a-cascader>
                </a-form-item>
                <a-form-item
                  label="所在管辖区："
                  v-bind="formItemLayout"
                >
                  <a-select
                    :disabled="disabled"
                    placeholder="所在管辖区"
                    v-decorator="[
                      'statisticsAreaCodea',
                      {
                        rules: [{required: true, message: '所在管辖区为空'}]
                      }
                    ]"
                  >
                    <a-select-option
                      v-for="(item, index) in statisticsAreaCode"
                      :key="index"
                      :value="item.regionCode"
                    >
                      {{ item.regionName }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
                <a-form-item
                  label="详细地址："
                  v-bind="formItemLayout"
                >
                  <a-input
                    :disabled="disabled"
                    placeholder="请输入详细地址"
                    v-decorator="[
                      'address',
                      {
                        rules: [
                          {
                            required: true,
                            message: '详细地址为空或格式不正确',
                            whitespace: true
                          }
                        ]
                      }
                    ]"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :span="8"
                offset="0"
              >
                <a-form-item
                  style="padding-left:16px"
                  label="营业执照:"
                  v-bind="formItemLayout"
                >
                  <a-upload
                    style="display: block;"
                    :disabled="disabled"
                    :beforeUpload="beforeUploadBl"
                    v-decorator="[
                      'fileBlList',
                      {
                        valuePropName: 'fileList',
                        getValueFromEvent: handleUploadBlFile,
                        rules: [{ required: true, message: '请上传营业执照' }]
                      }
                    ]"
                    :showUploadList="{showRemoveIcon: !disabled, showPreviewIcon: true}"
                    listType="picture-card"
                    @preview="handleBlPreview"
                    :customRequest="selfUploadBl"
                    accept=".jpg,.jpeg"
                    :remove="handleRemoveBlFile"
                  >
                    <div v-if="fileBlList.length < 1">
                      <a-icon type="plus" />
                      <div class="ant-upload-text">上传图片</div>
                    </div>
                  </a-upload>
                  <a-modal
                    :visible="previewBlVisible"
                    :footer="null"
                    @cancel="handleBlCancel"
                  >
                    <img
                      style="width: 100%"
                      :src="previewBlImage"
                    />
                  </a-modal>
                  <span>只能上传 .jpg .jpeg ，且 ≤ 1M</span>
                </a-form-item>
                <a-form-item
                  label="法人代表姓名:"
                  v-bind="formItemLayout"
                >
                  <a-input
                    :disabled="disabled"
                    placeholder="请输入法人代表姓名"
                    v-decorator="[
                      'legalPersonName'
                      // {
                      //   rules: [{ required: true, message: '法人代表姓名为空', whitespace: true }]
                      // }
                    ]"
                  />
                </a-form-item>
                <a-form-item
                  label="法人代表身份证号:"
                  v-bind="formItemLayout"
                >
                  <a-input
                    :disabled="disabled"
                    placeholder="请输入法人代表身份证号"
                    v-decorator="[
                      'idCode'
                      // {
                      //   rules: [{ required: true, message: '身份证号码为空或格式错误', whitespace: true, pattern: REG.IDCARD }]
                      // }
                    ]"
                  />
                </a-form-item>
                <a-form-item
                  label="法人身份证正面、反面:"
                  v-bind="formItemLayout"
                  style="margin-bottom: 8px"
                >
                  <div style="display: flex;">
                    <a-form-item style="margin-bottom: 0">
                      <a-upload
                        style="flot:left"
                        :disabled="disabled"
                        :beforeUpload="beforeUploadCf"
                        v-decorator="[
                          'fileCfList',
                          {
                            valuePropName: 'fileList',
                            getValueFromEvent: handleUploadCfFile
                            // rules: [{ required: true, message: '请上传身份证头像面' }]
                          }
                        ]"
                        :showUploadList="{showRemoveIcon: !disabled, showPreviewIcon: true}"
                        listType="picture-card"
                        @preview="handleCfPreview"
                        :customRequest="selfUploadCf"
                        accept=".jpg,.jpeg,.png"
                        :remove="handleRemoveCfFile"
                        class="information-user"
                      >
                        <div v-if="fileCfList.length < 1">
                          <a-icon type="plus" />
                          <div class="ant-upload-text">上传头像面</div>
                        </div>
                      </a-upload>
                      <a-modal
                        :visible="previewCfVisible"
                        :footer="null"
                        @cancel="handleCfCancel"
                      >
                        <img
                          style="width: 100%"
                          :src="previewCfImage"
                        />
                      </a-modal>
                    </a-form-item>
                    <a-form-item style="margin-bottom: 0">
                      <a-upload
                        :disabled="disabled"
                        :beforeUpload="beforeUploadCb"
                        :showUploadList="{showRemoveIcon: !disabled, showPreviewIcon: true}"
                        listType="picture-card"
                        @preview="handleCbPreview"
                        :customRequest="selfUploadCb"
                        accept=".jpg,.jpeg,.png"
                        :remove="handleRemoveCbFile"
                        v-decorator="[
                          'fileCbList',
                          {
                            valuePropName: 'fileList',
                            getValueFromEvent: handleUploadCbFile
                            /*rules: [{ required: true, message: '请上传身份证国徽面' }]*/
                          }
                        ]"
                      >
                        <div v-if="fileCbList.length < 1">
                          <a-icon type="plus" />
                          <div class="ant-upload-text">上传国徽面</div>
                        </div>
                      </a-upload>
                      <a-modal
                        :visible="previewCbVisible"
                        :footer="null"
                        @cancel="handleCbCancel"
                      >
                        <img
                          style="width: 100%"
                          :src="previewCbImage"
                          alt="图片访问失败"
                        />
                      </a-modal>
                    </a-form-item>
                  </div>
                  <span>只能上传 .jpg .jpeg ，且 ≤ 1M</span>
                </a-form-item>
                <a-form-item
                  label="联系人姓名:"
                  v-bind="formItemLayout"
                >
                  <a-input
                    :disabled="disabled"
                    placeholder="请输入单位联系人姓名"
                    v-decorator="[
                      'unitContactName',
                      {
                        rules: [{required: true, message: '单位联系人姓名为空', whitespace: true}]
                      }
                    ]"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :span="8"
                offset="0"
              >
                <a-form-item
                  label="联系人手机号:"
                  v-bind="formItemLayout"
                >
                  <a-input
                    :disabled="disabled"
                    placeholder="请输入联系人手机号"
                    v-decorator="[
                      'mobile',
                      {
                        rules: [{required: true, message: '手机号为空或格式不正确', whitespace: true, pattern: REG.PHONE }]
                      }
                    ]"
                  />
                </a-form-item>
                <a-form-item
                  label="联系人邮箱:"
                  v-bind="formItemLayout"
                >
                  <a-input
                    :disabled="disabled"
                    placeholder="请输入联系人邮箱"
                    v-decorator="[
                      'email',
                      {
                        rules: [{required: true, message: '邮箱为空或格式不正确', whitespace: true, pattern: REG.EMAIL }]
                      }
                    ]"
                  />
                </a-form-item>
                <a-form-item
                  label="企业邮箱:"
                  v-bind="formItemLayout"
                >
                  <a-input
                    :disabled="disabled"
                    placeholder="请输入企业邮箱"
                    v-decorator="[
                      'csrEmail',
                      {
                        rules: [
                          { required: true,message: '邮箱为空或格式不正确', whitespace: true, pattern: REG.EMAIL}
                        ]
                      }
                    ]"
                  />
                </a-form-item>
                <a-form-item
                  label="企业固话:"
                  v-bind="formItemLayout"
                >
                  <a-input
                    :disabled="disabled"
                    placeholder="请输入企业固话"
                    v-decorator="[
                      'csrMobile',
                      {
                        rules: [
                          { required: true, validator: checkTelephone }
                        ]
                      }
                    ]"
                  />
                </a-form-item>
                <a-form-item
                  label="企业位置:"
                  v-bind="formItemLayout"
                  class="form-post-id"
                >
                  <div class="address-amap">
                    <el-amap-search-box
                      class="search-box"
                      :search-option="searchOption"
                      :on-search-result="onSearchResult"
                    ></el-amap-search-box>
                    <el-amap
                      ref="map"
                      vid="amapDemo"
                      :amap-manager="amapManager"
                      :center="center"
                      :zoom="zoom"
                      :plugin="plugin"
                      :events="events"
                      class="amap-demo"
                    >
                    </el-amap>
                    <!-- <p>{{ address }}</p>-->
                  </div>
                </a-form-item>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-form>
    </div>
    <div class="sun-paper_page-operation-wrapper">
      <!--      <a-button-->
      <!--        size="large"-->
      <!--        type="default"-->
      <!--        @click="handleBackTo"-->
      <!--      >-->
      <!--        取消-->
      <!--      </a-button>-->
      <a-button
        size="large"
        type="primary"
        @click="submitForm"
      >
        提交
      </a-button>
    </div>
  </div>
</template>

<script>
import { REG } from '@/config/validate.config'
import {
  getUnitCategory,
  getDistricts,
  getOtherDistrcts,
  uploadFile,
  getUnitApplyInfoAlert,
  doEnterpriseApply
} from '@/api/identification'
import { getDicData } from '@/api/equipment-manage'
import { AMapManager } from 'vue-amap'
import { getCurrentPosition } from '@/api/common'
const amapManager = new AMapManager()
export default {
  name: 'OrgManage',
  data() {
    const self = this
    return {
      REG: REG,
      form: this.$form.createForm(this, { name: 'meterForm' }),
      formItemLayout: {},
      disabled: false,
      unitTypes: [], // 单位类型
      options: [], // 行业大类数据源
      districts: [], // 省市区数据源
      curDtcode: '',
      statisticsAreaCode: [], // 所在其他辖区
      businessLicenseUrl: '', // 营业执照图片路径
      idCodeFrontUrl: '', // 身份证正面照图片路径
      idCodeBackUrl: '', // 身份证反面图片路径
      businessFk: '', // 营业执照图片fk
      fileCfFk: '', // 法人身份证头像图片fk
      fileCbFk: '', // 法人身份证国徽图片fk
      fileBlList: [], // 营业执照图片列表
      fileCfList: [], // 身份证正面照列表
      fileCbList: [], // 身份证反面照列表
      previewBlImage: '', // 营业执照查看的图片地址
      previewCfImage: '', // 身份证正面查看的图片地址
      previewCbImage: '', // 身份证反面查看的图片地址
      previewBlVisible: false, // 是否在modal中显示营业执照图片
      previewCfVisible: false, // 是否在modal中显示身份证正面照图片
      previewCbVisible: false, // 是否在modal中显示身份证反面照图片
      searchOption: {
        city: '全国',
        citylimit: true
      },
      lng: '',
      lat: '',
      address: '',
      marker: '',
      amapManager,
      zoom: 12,
      center: [117.141441, 36.679629],
      events: {
        init: (o) => {
          o.getCity((result) => {
            //  this.searchOption.city = result.city
          })
          var markerTemp = new AMap.Marker({
            position: self.center,
            offset: new AMap.Pixel(-21, -21) // 偏移量，默认以marker左上角位置为基准点
          })
          var markerContent = self.address
          markerTemp.setContent(markerContent)
          const par = document.getElementsByClassName('search-box-wrapper')[0]
          par.firstChild.setAttribute('placeholder', '输入要搜索的地址')
          self.$nextTick(() => {
            par.firstChild.addEventListener('input', function () {
              par.firstChild.setAttribute('title', par.firstChild.value)
              par.firstChild.style.overflow = 'hidden'
              par.firstChild.style.textOverflow = 'ellipsis'
              par.firstChild.style.whitespace = 'nowrap'
              setTimeout(() => {
                const tips = document.getElementsByClassName('search-tips')[0].children
                const tips1 = tips[0].children
                if (par.firstChild.value !== '') {
                  tips1.forEach(v => {
                    v.setAttribute('title', v.innerText)
                  })
                }
              }, 300)
            })
          })
        },
        moveend: () => {
        },
        zoomchange: () => {
        },
        click: (e) => {
          self.lng = e.lnglat.lng
          self.lat = e.lnglat.lat
          self.center = [self.lng, self.lat]
          sessionStorage.setItem('longitude', self.lng)
          sessionStorage.setItem('latitude', self.lat)
          const o = amapManager.getMap()
          if (!self.marker) {
            self.marker = new AMap.Marker({
              position: e.lnglat
            })
            self.marker.setMap(o)
          }
          self.marker.setPosition(e.lnglat)
          const geocoder = new AMap.Geocoder({})
          geocoder.getAddress(e.lnglat, function (status, result) {
            if (status === 'complete' && result.regeocode) {
              self.address = result.regeocode.formattedAddress
              self.marker.setLabel({
                offset: new AMap.Pixel(0, 0),
                content: result.regeocode.formattedAddress,
                direction: 'bottom'
              })
            } else {
              self.$message.error('根据经纬度查询地址失败')
            }
          })
        }
      },
      plugin: [
        {
          showButton: false, // 显示定位按钮，默认：true
          pName: 'Geolocation',
          events: {
            init(o) {
              getUnitApplyInfoAlert().then((res) => {
                if (res && res.status === 0) {
                  const map = []
                  map.push(res.data.longitude, res.data.latitude)
                  if (res.data.longitude !== null && res.data.latitude !== null) {
                    self.center = map
                    sessionStorage.setItem('longitude', res.data.longitude)
                    sessionStorage.setItem('latitude', res.data.latitude)
                    const o = amapManager.getMap()
                    if (!self.marker) {
                      self.marker = new AMap.Marker({
                        position: self.center
                      })
                      self.marker.setMap(o)
                    }
                    self.marker.setPosition(self.center)
                    // 近来补充  根据经纬度查询地址
                    const geocoder = new AMap.Geocoder({})
                    const that = this
                    geocoder.getAddress(self.center, function (status, result) {
                      if (status === 'complete' && result.regeocode) {
                        self.marker.setLabel({
                          offset: new AMap.Pixel(0, 0),
                          content: result.regeocode.formattedAddress,
                          direction: 'bottom'
                        })
                      } else {
                        that.$message.error('根据经纬度查询地址失败')
                      }
                    })
                  } else {
                    getCurrentPosition().then((res) => {
                      if (res && res.status === 0) {
                        self.lng = res.data.longitude
                        self.lat = res.data.latitude
                        self.center = [self.lng, self.lat]
                        sessionStorage.setItem('longitude', self.lng)
                        sessionStorage.setItem('latitude', self.lat)
                        const o = amapManager.getMap()
                        if (!self.marker) {
                          self.marker = new AMap.Marker({
                            position: self.center
                          })
                          self.marker.setMap(o)
                        }
                        self.marker.setPosition(self.center)
                        // 近来补充  根据经纬度查询地址
                        const geocoder = new AMap.Geocoder({})
                        const that = this
                        geocoder.getAddress(self.center, function (status, result) {
                          if (status === 'complete' && result.regeocode) {
                            self.marker.setLabel({
                              offset: new AMap.Pixel(0, 0),
                              content: result.regeocode.formattedAddress,
                              direction: 'bottom'
                            })
                          } else {
                            that.$message.error('根据经纬度查询地址失败')
                          }
                        })
                      }
                    })
                    // // o 是高德地图定位插件实例
                    // o.getCurrentPosition((status, result) => {
                    //   if (result && result.position) {
                    //     self.lng = result.position.lng
                    //     self.lat = result.position.lat
                    //     self.address = result.formattedAddress
                    //     self.center = [self.lng, self.lat]
                    //     sessionStorage.setItem('longitude', self.lng)
                    //     sessionStorage.setItem('latitude', self.lat)
                    //     const o = amapManager.getMap()
                    //     if (!self.marker) {
                    //       self.marker = new AMap.Marker({
                    //         position: self.center
                    //       })
                    //       self.marker.setMap(o)
                    //     }
                    //     self.marker.setPosition(self.center)
                    //     self.marker.setLabel({
                    //       offset: new AMap.Pixel(0, 0),
                    //       content: result.formattedAddress,
                    //       direction: 'bottom'
                    //     })
                    //   }
                    // })
                  }
                }
              })
            }
          }
        }
      ]
    }
  },
  created() {
    this.getManege()
  },
  methods: {
    getManege() {
      this.getOptions()
      this.getUnitType()
      this.getDistricts()
      this.getInformation()
    },
    onSearchResult(pois) {
      const par = document.getElementsByClassName('search-box-wrapper')[0]
      par.firstChild.setAttribute('title', par.firstChild.value)
      if (pois.length > 0) {
        const str = '济南大陆机电股份有限公司'
        if (str.indexOf(pois[0].name) !== -1) {
          this.lng = '117.141441'
          this.lat = '36.679629'
          this.lat = '36.679629'
          this.center = ['117.141441', '36.679629']
          sessionStorage.setItem('longitude', this.lng)
          sessionStorage.setItem('latitude', this.lat)
        } else {
          const { lng, lat } = pois[0]
          //  const center = [lng, lat]
          this.lng = lng
          this.lat = lat
          this.center = [lng, lat]
          sessionStorage.setItem('longitude', lng)
          sessionStorage.setItem('latitude', lat)
        }
        const o = amapManager.getMap()
        if (!this.marker) {
          this.marker = new AMap.Marker({
            position: this.center
          })
          this.marker.setMap(o)
        }
        this.marker.setPosition(this.center)
        // 近来补充  根据经纬度查询地址
        const geocoder = new AMap.Geocoder({})
        const that = this
        geocoder.getAddress(this.center, function (status, result) {
          if (status === 'complete' && result.regeocode) {
            that.address = result.regeocode.formattedAddress
            that.marker.setLabel({
              offset: new AMap.Pixel(0, 0),
              content: result.regeocode.formattedAddress,
              direction: 'bottom'
            })
          } else {
            that.$message.error('根据经纬度查询地址失败')
          }
        })
      }
    },
    checkTelephone(rule, value, callback) {
      const formatException = `电话号码格式不正确`
      const emptyException = `电话号码不能为空`
      if (!value) {
        callback(emptyException)
      }
      const regMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
      const regTelephone = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/
      const reg400 = /^400(-\d{3,4}){2}$/
      if (regMobile.test(value) || regTelephone.test(value) || reg400.test(value)) {
        callback()
      } else {
        callback(formatException)
      }
    },
    serarchUnit(e) {
      // var unitcode = this.form.getFieldValue('creditCode')
      // getUnitInfoByCreditCode(unitcode).then((res) => {
      //   if (res && res.status === 0) {
      //     this.form.setFieldsValue({
      //       unitName: res.data.Name,
      //       address: res.data.Address,
      //       legalPersonName: res.data.OperName,
      //       unitDescribe: res.data.Scope
      //     })
      //   }
      // })
    },
    // 获取企业类型
    getUnitType() {
      getDicData('unit_type').then(res => {
        if (res.status === this.constants.SUCCESS_CODE) {
          this.unitTypes = res.data
        }
      })
    },
    selectChange(val, opt) {
    },
    // 获取所属行业
    getOptions() {
      // 获取行业分类大类
      getUnitCategory().then((res) => {
        if (res && res.status === 0) {
          this.options = res.data
        } else {
          this.$notification.error({
            message: res.message
          })
        }
      })
    },
    handleChange(val, city) {
      //    console.log(val, 'val')
    },
    // 获取行政区
    getDistricts() {
      getDistricts().then((res) => {
        if (res && res.status === 0) {
          this.districts = res.data
        } else {
          this.$notification.error({
            message: res.message
          })
        }
      })
    },
    handleIndustryTypeChange(values, options) {
      this.form.resetFields(['tradeId']) // 重置行业小类已选值
      // getUnitCategory(options.data.attrs.data).then(res => {
      //   if (res && res.status === 0) {
      //     this.tradeType = res.data
      //   } else {
      //     this.$notification.error({
      //       message: res.message
      //     })
      //   }
      // })
    },
    onChange(val, city) {
      if (city && city[1]) {
        this.curDtcode = city[1].regionCode
        this.form.setFieldsValue({ statisticsAreaCodea: '' })
        this.getOtherAare(city[1].regionCode)
        this.statisticsAreaCode = []
      }
    },
    getOtherAare(citycode) {
      getOtherDistrcts(citycode).then((res) => {
        if (res && res.status === 0) {
          this.statisticsAreaCode = res.data
        } else {
          this.$notification.error({
            message: res.message
          })
        }
      })
    },
    // 营业执照
    beforeUploadBl(file) { // 在文件上传之前 对文件做限制处理
      const isLt1024k = (file.size / 1024) > 1024
      if (isLt1024k) {
        this.$message.error('营业执照大小不能超过1M')
        return false
      }
      const sliceFileName = file.name.split('.')
      const type = (sliceFileName[sliceFileName.length - 1]).toLowerCase()
      if (type !== 'jpg' && type !== 'jpeg') {
        this.$message.error('营业执照类型仅限.jpg、.jpeg格式类型！')
        return false
      }
    },
    handleUploadBlFile(e) { // 上传时onchang事件
      if (Array.isArray(e)) {
        return e
      }
      // 当文件对象存在状态时返回fileList,无状态时(beforeUploadBl返回false)不做返回处理
      if (e.file.status) {
        this.fileBlList = e.fileList
        return e && e.fileList
      }
    },
    handleBlPreview(file) { // 查看营业执照
      this.previewBlImage = file.url || file.response.data.decryptUrl
      this.previewBlVisible = true
    },
    selfUploadBl({ file, onSuccess }) {
      const formData = new FormData()
      this.businessFk = this.getUUID()
      formData.append('file', file)
      formData.append('fk', this.businessFk)
      uploadFile(formData).then(res => {
        if (res && res.status === this.constants.SUCCESS_CODE) {
          //  this.certificateFk = res.data.fk
          this.businessLicenseUrl = res.data.url
          onSuccess(res, file)
        } else {
          this.$notification.error({
            message: res.message
          })
        }
      })
    },
    handleRemoveBlFile() {
      this.businessLicenseUrl = ''
    },
    handleBlCancel() { // 隐藏营业执照model
      this.previewBlVisible = false
    },
    // 法人身份证
    beforeUploadCf(file) {
      const isLt1024k = (file.size / 1024) > 1024
      const sliceFileName = file.name.split('.')
      const type = (sliceFileName[sliceFileName.length - 1]).toLowerCase()
      if (type !== 'jpg' && type !== 'jpeg') {
        this.$message.error('证件照类型仅限.jpg、.jpeg格式类型！')
        return false
      }
      if (isLt1024k) {
        this.$message.error('证件照大小不能超过1M！')
        return false
      }
    },
    handleUploadCfFile(e) {
      if (Array.isArray(e)) {
        return e
      }
      if (e.file.status) {
        this.fileCfList = e.fileList
        return e && e.fileList
      }
    },
    handleCfPreview(file) {
      this.previewCfImage = file.url || file.thumbUrl
      this.previewCfVisible = true
    },
    selfUploadCf({ file, onSuccess }) {
      const formData = new FormData()
      this.fileCfFk = this.getUUID()
      formData.append('file', file)
      formData.append('fk', this.fileCfFk)
      uploadFile(formData).then(res => {
        if (res && res.status === this.constants.SUCCESS_CODE) {
          //  this.certificateFk = res.data.fk
          this.idCodeFrontUrl = res.data.url
          onSuccess(res, file)
        } else {
          this.$notification.error({
            message: res.message
          })
        }
      })
    },
    handleRemoveCfFile() {
      this.idCodeFrontUrl = ''
    },
    handleCfCancel() {
      this.previewCfVisible = false
    },
    handleCbPreview(file) {
      this.previewCbImage = file.url || file.thumbUrl
      this.previewCbVisible = true
    },
    selfUploadCb({ file, onSuccess }) {
      const formData = new FormData()
      this.fileCbFk = this.getUUID()
      formData.append('file', file)
      formData.append('fk', this.fileCbFk)
      uploadFile(formData).then(res => {
        if (res && res.status === this.constants.SUCCESS_CODE) {
          //  this.certificateFk = res.data.fk
          this.idCodeBackUrl = res.data.url
          onSuccess(res, file)
        } else {
          this.$notification.error({
            message: res.message
          })
        }
      })
    },
    handleRemoveCbFile() {
      this.idCodeBackUrl = ''
    },
    handleCbCancel() {
      this.previewCbVisible = false
    },
    handleUploadCbFile(e) {
      if (Array.isArray(e)) {
        return e
      }
      if (e.file.status) {
        this.fileCbList = e.fileList
        return e && e.fileList
      }
    },
    beforeUploadCb(file) {
      const isLt1024k = (file.size / 1024) > 1024
      if (isLt1024k) {
        this.$message.error('证件照大小不能超过1M')
        return false
      }
      const sliceFileName = file.name.split('.')
      const type = (sliceFileName[sliceFileName.length - 1]).toLowerCase()
      if (type !== 'jpg' && type !== 'jpeg') {
        this.$message.error('证件照类型仅限.jpg、.jpeg格式类型！')
        return false
      }
    },
    handleBackTo() {
      const self = this
      this.$confirm({
        title: '你即将离开菜单编辑页面',
        content: '离开页面会丢失当前编辑的内容，确定要离开吗？',
        onOk: function () {
          const params = {
            pageViewName: 'UserManageList',
            type: 'list'
          }
          self.$emit('on-page-view-change', params)
        }
      })
    },
    getInformation() {
      getUnitApplyInfoAlert().then((res) => {
        if (res && res.status === 0) {
          var list = []
          if (res.data.industryTypeCode) {
            list.push(res.data.industryTypeCode)
            list.push(res.data.tradeTypeCode)
          }
          var districts = []
          if (res.data.areaCode) {
            districts = res.data.areaCode.split(',')
            this.getOtherAare(districts[1])
          }
          this.$nextTick(() => {
            this.form.setFieldsValue({
              unitName: res.data.name,
              creditCode: res.data.creditCode,
              unitType: res.data.typeCode,
              options: list,
              districts: districts,
              statisticsAreaCodea: res.data.areaCode ? res.data.statisticsAreaCode : '',
              address: res.data.address,
              legalPersonName: res.data.legalPersonName,
              idCode: res.data.legalPersonIdCard,
              unitContactName: res.data.contactPersonName,
              mobile: res.data.contactPersonMobile,
              email: res.data.contactPersonEmail,
              csrEmail: res.data.email,
              csrMobile: res.data.telephone
            })
            if (res.data.decryptBusinessLicenseUrl && res.data.decryptBusinessLicenseUrl) {
              const result = [
                {
                  uid: -1,
                  name: '营业执照',
                  status: 'done',
                  url: res.data.decryptBusinessLicenseUrl
                }
              ]
              this.businessLicenseUrl = res.data.businessLicenseUrl
              this.fileBlList = result
              this.$nextTick(() => {
                this.form.setFieldsValue({
                  fileBlList: result
                })
              })
            }
            if (res.data.decryptIdPhotoFrontUrl && res.data.decryptIdPhotoFrontUrl) {
              const result = [
                {
                  uid: -2,
                  name: '身份证正面照',
                  status: 'done',
                  url: res.data.decryptIdPhotoFrontUrl
                }
              ]
              this.idCodeFrontUrl = res.data.idPhotoFrontUrl
              this.fileCfList = result
              this.$nextTick(() => {
                this.form.setFieldsValue({
                  fileCfList: result
                })
              })
            }
            if (res.data.decryptIdPhotoBackUrl && res.data.decryptIdPhotoBackUrl) {
              const result = [
                {
                  uid: -3,
                  name: '身份证反面照',
                  status: 'done',
                  url: res.data.decryptIdPhotoBackUrl
                }
              ]
              this.idCodeBackUrl = res.data.idPhotoBackUrl
              this.fileCbList = result
              this.$nextTick(() => {
                this.form.setFieldsValue({
                  fileCbList: result
                })
              })
            }
          })
        } else {
          this.$notification.error({
            message: res.message
          })
        }
      })
    },
    submitForm() {
      this.form.validateFields((err, values) => {
        if (sessionStorage.getItem('longitude') === null || sessionStorage.getItem('latitude') === null) {
          this.$message.error('企业位置不能为空')
          return false
        }
        if (!err) {
          const params = {}
          params.name = values.unitName
          params.creditCode = values.creditCode
          params.typeCode = values.unitType
          params.industryTypeCode = values.options[0]
          params.tradeTypeCode = values.options[1]
          params.areaCode = values.districts.toString()
          params.statisticsAreaCode = values.statisticsAreaCodea
          params.address = values.address
          params.businessLicenseUrl = this.businessLicenseUrl
          params.legalPersonName = values.legalPersonName
          params.legalPersonIdCard = values.idCode
          params.idPhotoFrontUrl = this.idCodeFrontUrl
          params.idPhotoBackUrl = this.idCodeBackUrl
          params.contactPersonName = values.unitContactName
          params.contactPersonMobile = values.mobile
          params.contactPersonEmail = values.email
          params.email = values.csrEmail
          params.telephone = values.csrMobile
          params.longitude = sessionStorage.getItem('longitude')
          params.latitude = sessionStorage.getItem('latitude')
          doEnterpriseApply(params)
            .then((res) => {
              if (res && res.status === 0) {
                this.$message.success('企业申请提交成功!')
              } else {
                this.$message.error({
                  message: res.message
                })
              }
            })
            .finally(() => {
              setTimeout(() => {
                this.btnLoading = false
              }, 1200)
            })
        }
      })
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="less">
.page-total-container {
  background-color: white;
  padding: 16px 24px;
}

.page-container {
  height: auto;
  margin: 10px 20px 20px 20px;
  padding: 15px;
  background-color: #ffffff;

  .global-title-wrapper {
    width: 100%;
    height: 34px;
    line-height: 34px;
    border-bottom: 1px solid #e9e9e9;
    padding: 0 24px;
    text-align: right;

    .tip_dot {
      color: rgba(245, 34, 45, 0.85);
    }

    .tip_text {
      color: #2f2f2f;
    }
  }

  .ant-form {
    padding: 16px;
  }

  .ant-upload-picture-card-wrapper {
    /deep/ .ant-upload {
      margin-bottom: 0 !important;
    }

    /deep/.ant-upload-list-picture-card-container {
      margin: 0 !important;

      a {
        display: inline-block;
        color: #2c3e50;
        font-size: 18px;
        line-height: 50px;
      }
    }
  }

  .information-user {
    width: auto;

    /deep/ .ant-upload {
      margin-right: 20px;
    }
  }
}

.address-amap {
  width: 100%;
  height: 245px;
  position: relative;
  border: 1px solid #ccc;

  .search-box {
    width: 200px;
    height: 30px;
    position: absolute;
    top: 0;
    left: 0;

    /deep/.search-tips {
      width: 200px;
      max-height: 150px;

      ul {
        li {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}

.form-post-id {
  /deep/.ant-form-item-label {
    label:before {
      display: inline-block;
      margin-right: 4px;
      color: #f5222d;
      font-size: 14px;
      font-family: SimSun, sans-serif;
      line-height: 1;
      content: '*';
    }
  }
}
</style>
