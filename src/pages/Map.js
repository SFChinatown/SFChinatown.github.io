import React from 'react';
import Footer from '../components/Footer';
import "./Map.css";

const Map = () => {
    return (
        <div>
            <Footer />
        </div>
    )
}

export default Map;

// (xhr=new XMLHttpRequest).open("GET","../assets/map.svg",!1),xhr.overrideMimeType("image/svg+xml"),xhr.onload=function(e){document.getElementById("svgContainer").appendChild(xhr.responseXML.documentElement)},xhr.send("");const outlineList=document.querySelectorAll('g[id$="Outline"]');for(const i of outlineList.values())i.style="display:none";var beforePan,sites={CCSF:"#f7b95e",Woh_Hei_Yuen:"#95d1a3",Ping_Yuen:"#f07b3b",Willie_Wong_Playground:"#95d1a3",Spofford_Alley:"#f07b3b",Kubla_Khan_Nightclub:"#cf2844",Mei_Lun_Yuen:"#f07b3b","I-Hotel":"#f07b3b",Portsmouth_Square:"##95d1a3",Chinese_for_Affirmative_Action:"#f7b95e",Chinese_Hospital:"#94cdd3"};$.each(sites,function(e,n){$("#"+e+"_Site").parent().hover(function(){$("#"+e+"_Outline").css("display","inline")},function(){$("#"+e+"_Outline").css("display","none")}),$("head").append('<style type="text/css"></style>'),$("head").children(":last").html(".hbg"+e+"{--bs-popover-header-bg:"+n+";}"),new bootstrap.Popover($("#"+e+"_Site").parent(),{trigger:"hover",placement:"top",title:$("#"+e+"_Site").attr("data-name").replace(" Site",""),content:null,container:"body",customClass:"hbg"+e})}),svgPanZoom("#SFChinatown2023",{zoomEnabled:!0,controlIconsEnabled:!0,fit:1,center:1,beforePan:beforePan=function(e,n){var o=this.getSizes(),t=-((o.viewBox.x+o.viewBox.width)*o.realZoom)+600,a=o.width-600-o.viewBox.x*o.realZoom,l=-((o.viewBox.y+o.viewBox.height)*o.realZoom)+600,s=o.height-600-o.viewBox.y*o.realZoom;return(customPan={}).x=Math.max(t,Math.min(a,n.x)),customPan.y=Math.max(l,Math.min(s,n.y)),customPan},minZoom:1,maxZoom:10,dblClickZoomEnabled:!1});
