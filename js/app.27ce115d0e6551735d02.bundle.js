(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,a,t)=>{const s=t(377),{FunnelChartTypes:n,FunnelLabelSide:i,SliceLabelFormatters:l,lightningChart:o,FunnelSliceModes:d,LegendBoxBuilders:r,Themes:c}=s,u=o({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).Funnel({theme:c[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0,type:n.LabelsOnSides}).setTitle("Customer contacts progression").setSliceMode(d.VariableHeight).setSliceGap(0).setHeadWidth(95).setNeckWidth(40).setLabelSide(i.Right).setPadding({bottom:45});u.addSlices([{name:"Prospects",value:2e3},{name:"Contacts",value:1540},{name:"Leads",value:1095},{name:"Customers",value:549}]),u.setLabelFormatter(l.NamePlusValue),u.addLegendBox(r.HorizontalLegendBox).setAutoDispose({type:"max-width",maxWidth:.8}).add(u,{toggleVisibilityOnClick:!1})}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);