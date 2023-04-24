"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[7209],{77209:(e,t,n)=>{n.r(t);var o=n(69307),c=n(67221),s=n(9818),i=n(98817),r=n(65392),a=n(94333),l=n(65736),p=n(92819),m=n(86020),_=n(55609),g=n(14599),u=n(65972);const d=e=>{let{onConnect:t}=e;return(0,o.createElement)(u.Z,{onConnect:()=>{(0,g.recordEvent)("tasklist_shipping_recommendation_connect_store",{connect:!0}),null==t||t()}})};var S=n(78674),E=n(14812),k=n(37657);const h=e=>"object"==typeof e&&null!==e,w=e=>{let{nextStep:t,pluginsToActivate:n}=e;const{updateOptions:i}=(0,s.useDispatch)(c.OPTIONS_STORE_NAME),{isResolving:r,tosAccepted:a}=(0,s.useSelect)((e=>{const{getOption:t,hasFinishedResolution:n}=e(c.OPTIONS_STORE_NAME),o=t("wc_connect_options");return{isResolving:!n("getOption",["woocommerce_setup_jetpack_opted_in"])||!n("getOption",["wc_connect_options"]),tosAccepted:h(o)&&(null==o?void 0:o.tos_accepted)||"1"===t("woocommerce_setup_jetpack_opted_in")}}));(0,o.useEffect)((()=>{a&&!n.length&&t()}),[t,n,a]);const p=n.includes("woocommerce-services")?(0,l.__)("By installing Jetpack and WooCommerce Shipping you agree to the {{link}}Terms of Service{{/link}}.","woocommerce"):(0,l.__)("By installing Jetpack you agree to the {{link}}Terms of Service{{/link}}.","woocommerce");return r?null:(0,o.createElement)(o.Fragment,null,(0,o.createElement)(m.Plugins,{onComplete:(e,n)=>{(0,k.a)(n),(0,g.recordEvent)("tasklist_shipping_recommendation_install_extensions",{install_extensions:!0}),i({woocommerce_setup_jetpack_opted_in:!0}),t()},onError:(e,t)=>(0,k.a)(t),pluginSlugs:n}),!a&&(0,o.createElement)(E.Text,{variant:"caption",className:"woocommerce-task__caption",size:"12",lineHeight:"16px",style:{display:"block"}},(0,S.Z)({mixedString:p,components:{link:(0,o.createElement)(m.Link,{href:"https://wordpress.com/tos/",target:"_blank",type:"external"},(0,o.createElement)(o.Fragment,null))}})))};var v=n(2969),T=n(87539),C=n(99267);const N=e=>{let{nextStep:t,onLocationComplete:n}=e;const{createNotice:i}=(0,s.useDispatch)("core/notices"),{updateAndPersistSettingsForGroup:r}=(0,s.useDispatch)(c.SETTINGS_STORE_NAME),{generalSettings:a,isResolving:l}=(0,s.useSelect)((e=>{var t;const{getSettings:n,hasFinishedResolution:o}=e(c.SETTINGS_STORE_NAME);return{generalSettings:null===(t=n("general"))||void 0===t?void 0:t.general,isResolving:!o("getSettings",["general"])}}));return(0,o.useEffect)((()=>{!l&&(0,T.AO)(a||{})&&n()}),[a,n,l]),l?null:(0,o.createElement)(C.Z,{onComplete:e=>{const n=(0,v.so)(e.countryState);(0,g.recordEvent)("tasklist_shipping_recommendation_set_location",{country:n}),t()},isSettingsRequesting:!1,settings:a,updateAndPersistSettingsForGroup:r,createNotice:i,isSettingsError:!1})};var O=n(21546),y=n(74617);const A=["jetpack","woocommerce-services"],R=(0,a.compose)((0,s.withSelect)((e=>{var t;const{getSettings:n}=e(c.SETTINGS_STORE_NAME),{hasFinishedResolution:o}=e(c.OPTIONS_STORE_NAME),{getActivePlugins:s}=e(c.PLUGINS_STORE_NAME);return{activePlugins:s(),generalSettings:null===(t=n("general"))||void 0===t?void 0:t.general,isJetpackConnected:e(c.PLUGINS_STORE_NAME).isJetpackConnected(),isResolving:!o("getOption",["woocommerce_setup_jetpack_opted_in"])||!o("getOption",["wc_connect_options"])||!e(c.PLUGINS_STORE_NAME).hasFinishedResolution("isJetpackConnected")}})))((e=>{let{activePlugins:t,isJetpackConnected:n,isResolving:c}=e;const[s,i]=(0,o.useState)([]),[r,a]=(0,o.useState)(0),[g,u]=(0,o.useState)(!1),[S,E]=(0,o.useState)(!1),k=()=>{a(r+1)},h=()=>{var e;u(!0),null!==(e=window)&&void 0!==e&&e.location&&(window.location.href=(0,y.getAdminLink)("admin.php?page=wc-settings&tab=shipping&section=woocommerce-services-settings"))};(0,o.useEffect)((()=>{const e=(0,p.difference)(A,t);!c&&0===e.length&&n&&h(),e.length<=s.length||i(e)}),[t,n,c,s]);const v=[{key:"store_location",label:(0,l.__)("Set store location","woocommerce"),description:(0,l.__)("The address from which your business operates","woocommerce"),content:(0,o.createElement)(N,{nextStep:k,onLocationComplete:()=>{S||(E(!0),k())}}),onClick:()=>{a(0)}},{key:"plugins",label:s.includes("woocommerce-services")?(0,l.__)("Install Jetpack and WooCommerce Shipping","woocommerce"):(0,l.__)("Install Jetpack","woocommerce"),description:(0,l.__)("Enable shipping label printing and discounted rates","woocommerce"),content:(0,o.createElement)("div",null,(0,o.createElement)(O.c,null),(0,o.createElement)(w,{nextStep:k,pluginsToActivate:s}))},{key:"connect",label:(0,l.__)("Connect your store","woocommerce"),description:(0,l.__)("Connect your store to WordPress.com to enable WooCommerce Shipping","woocommerce"),content:n?(0,o.createElement)(_.Button,{onClick:h,isBusy:g,isPrimary:!0},(0,l.__)("Complete task","woocommerce")):(0,o.createElement)(d,{onConnect:h})}],T=v[r];return(0,o.createElement)("div",{className:"woocommerce-task-shipping-recommendation"},(0,o.createElement)(_.Card,{className:"woocommerce-task-card"},(0,o.createElement)(_.CardBody,null,(0,o.createElement)(m.Stepper,{isPending:c,isVertical:!0,currentStep:T.key,steps:v}))))}));(0,i.registerPlugin)("wc-admin-onboarding-task-shipping-recommendation",{scope:"woocommerce-tasks",render:()=>(0,o.createElement)(r.WooOnboardingTask,{id:"shipping-recommendation"},(e=>{let{onComplete:t,query:n,task:c}=e;return(0,o.createElement)(R,{onComplete:t,query:n,task:c})}))})}}]);