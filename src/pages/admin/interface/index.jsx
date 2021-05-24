import React, { Component } from 'react'
import './index.less'
import AdminTopbar from "../../../components/admin-topbar"
import {reqListStaticImg} from '@/api/index'
import UploadImg from './upload'
export default class Interface extends Component {
   
    render() {
        return (
            <div className="interface-msg">
                <AdminTopbar tag="界面管理" timeShow='false' />
               <div className="img-content">
                   <div className="img-content-part1">
                        <div>
                            <div className="title">轮播图管理：</div>
                            <UploadImg num='3' type="1"/>
                        </div>
                        <div>
                            <div className="title" >系统默认头像：</div>
                            <UploadImg num='1' type="2"/>
                        </div>
                        <div>
                            <div className="title" >小程序背景图片和简介：</div>
                            <UploadImg num='1' type="3"/>
                        </div>
                    </div>
                    <div className="img-content-part2">
                        <div>
                            <div className="title" >用户信息背景图：</div>
                            <UploadImg num='1' type="4"/>
                        </div>
                        <div>
                            <div className="title" >成长总积分背景图：</div>
                            <UploadImg num='1' type="5"/>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}
