if(!self.define){let s,l={};const e=(e,n)=>(e=new URL(e+".js",n).href,l[e]||new Promise((l=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=l,document.head.appendChild(s)}else s=e,importScripts(e),l()})).then((()=>{let s=l[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(l[r])return;let u={};const v=s=>e(s,r),a={module:{uri:r},exports:u,require:v};l[r]=Promise.all(n.map((s=>a[s]||v(s)))).then((s=>(i(...s),u)))}}define(["./workbox-17eed999"],(function(s){"use strict";s.setCacheNameDetails({prefix:"ODIN"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"c9cfc228971b7c03ac2a56441410ca2d"},{url:"assets/ad-5f301eee.svg",revision:null},{url:"assets/ad-af21bc50.svg",revision:null},{url:"assets/ae-09943e35.svg",revision:null},{url:"assets/ae-660f6001.svg",revision:null},{url:"assets/af-c7bfd83d.svg",revision:null},{url:"assets/af-f0fe67d6.svg",revision:null},{url:"assets/ag-a986cf9b.svg",revision:null},{url:"assets/ag-b0ee8dc5.svg",revision:null},{url:"assets/ai-b6ba8568.svg",revision:null},{url:"assets/ai-efd0c274.svg",revision:null},{url:"assets/Air-9360fd0a.svg",revision:null},{url:"assets/al-87476e4c.svg",revision:null},{url:"assets/al-b8c66c9d.svg",revision:null},{url:"assets/am-48d3c9b6.svg",revision:null},{url:"assets/am-8244966d.svg",revision:null},{url:"assets/Antarctica_(ATA)-fa7aa721.svg",revision:null},{url:"assets/ao-7ac46e1c.svg",revision:null},{url:"assets/ao-b4bdbc41.svg",revision:null},{url:"assets/aq-2fd9279b.svg",revision:null},{url:"assets/aq-62ee1988.svg",revision:null},{url:"assets/ar-036d9c34.svg",revision:null},{url:"assets/ar-3c7a866d.svg",revision:null},{url:"assets/Arctic-77adfd5e.svg",revision:null},{url:"assets/arrow-693e0144.svg",revision:null},{url:"assets/arrow-down-s-fill-ad57025c.svg",revision:null},{url:"assets/arrow-right-s-fill-30241079.svg",revision:null},{url:"assets/as-3193ab22.svg",revision:null},{url:"assets/as-e8ce581d.svg",revision:null},{url:"assets/at-1e513e59.svg",revision:null},{url:"assets/at-73ae6b3c.svg",revision:null},{url:"assets/au-213bcc5e.svg",revision:null},{url:"assets/au-dfc984d3.svg",revision:null},{url:"assets/aw-424db29f.svg",revision:null},{url:"assets/aw-b5162dba.svg",revision:null},{url:"assets/ax-952771b3.svg",revision:null},{url:"assets/ax-e0b7f6dd.svg",revision:null},{url:"assets/az-3a16ff22.svg",revision:null},{url:"assets/az-ce76ab74.svg",revision:null},{url:"assets/ba-0145a56b.svg",revision:null},{url:"assets/ba-b4466a08.svg",revision:null},{url:"assets/Back-c3d19564.svg",revision:null},{url:"assets/bb-2ce0c4f5.svg",revision:null},{url:"assets/bb-667b79ca.svg",revision:null},{url:"assets/bd-749b63aa.svg",revision:null},{url:"assets/bd-d5ee762b.svg",revision:null},{url:"assets/be-b3df2b94.svg",revision:null},{url:"assets/be-b998bdfa.svg",revision:null},{url:"assets/BebasNeue-Regular-830ea186.ttf",revision:null},{url:"assets/bf-8f795ecc.svg",revision:null},{url:"assets/bf-bb500b07.svg",revision:null},{url:"assets/bg-9ddbc7b6.svg",revision:null},{url:"assets/bg-c67e049a.svg",revision:null},{url:"assets/bh-9a6f53af.svg",revision:null},{url:"assets/bh-b89b1dd1.svg",revision:null},{url:"assets/bi-78476c66.svg",revision:null},{url:"assets/bi-d9cc0b58.svg",revision:null},{url:"assets/bj-126f6103.svg",revision:null},{url:"assets/bj-9085e2dc.svg",revision:null},{url:"assets/bl-1c0fc0dc.svg",revision:null},{url:"assets/bl-b41eb06e.svg",revision:null},{url:"assets/bm-13cb511d.svg",revision:null},{url:"assets/bm-1af07e53.svg",revision:null},{url:"assets/bn-58930c25.svg",revision:null},{url:"assets/bn-7c5eafd9.svg",revision:null},{url:"assets/bo-2a091af9.svg",revision:null},{url:"assets/bo-4ab35795.svg",revision:null},{url:"assets/bq-21e4c616.svg",revision:null},{url:"assets/bq-4f69e04a.svg",revision:null},{url:"assets/br-38e5114c.svg",revision:null},{url:"assets/br-56265452.svg",revision:null},{url:"assets/bs-d45540c1.svg",revision:null},{url:"assets/bs-f10d6485.svg",revision:null},{url:"assets/bt-569e1341.svg",revision:null},{url:"assets/bt-6f109e6e.svg",revision:null},{url:"assets/bv-6be2ac5c.svg",revision:null},{url:"assets/bv-f2517551.svg",revision:null},{url:"assets/bw-115b2165.svg",revision:null},{url:"assets/bw-df92e4d6.svg",revision:null},{url:"assets/by-91b26dd7.svg",revision:null},{url:"assets/by-b7ada8d1.svg",revision:null},{url:"assets/bz-173ecf7b.svg",revision:null},{url:"assets/bz-1d05349d.svg",revision:null},{url:"assets/ca-5bda9056.svg",revision:null},{url:"assets/ca-85ee89fa.svg",revision:null},{url:"assets/cc-7c46b5f3.svg",revision:null},{url:"assets/cc-d49eb373.svg",revision:null},{url:"assets/cd-3e5799ff.svg",revision:null},{url:"assets/cd-600e7369.svg",revision:null},{url:"assets/cf-44e68fe8.svg",revision:null},{url:"assets/cf-b3a61e22.svg",revision:null},{url:"assets/cg-20a742a2.svg",revision:null},{url:"assets/cg-7e4f9efc.svg",revision:null},{url:"assets/ch-4e94e5c3.svg",revision:null},{url:"assets/ch-a0660f73.svg",revision:null},{url:"assets/chapter-a45994e1.svg",revision:null},{url:"assets/chevron-e4bd6106.svg",revision:null},{url:"assets/ci-ba7f7635.svg",revision:null},{url:"assets/ci-d7fd4124.svg",revision:null},{url:"assets/ck-95e850b0.svg",revision:null},{url:"assets/ck-a60ec48d.svg",revision:null},{url:"assets/cl-250f409f.svg",revision:null},{url:"assets/cl-b0c3f433.svg",revision:null},{url:"assets/close-95ecf99e.svg",revision:null},{url:"assets/close-circle-2681cd94.svg",revision:null},{url:"assets/close2-69603a02.svg",revision:null},{url:"assets/cm-1b2e52b5.svg",revision:null},{url:"assets/cm-809ea5ab.svg",revision:null},{url:"assets/cn-ab9a2dc6.svg",revision:null},{url:"assets/cn-e80d7144.svg",revision:null},{url:"assets/co-bc15eabb.svg",revision:null},{url:"assets/co-cb36ae40.svg",revision:null},{url:"assets/Country-a9cd6a45.svg",revision:null},{url:"assets/cr-12fe80c8.svg",revision:null},{url:"assets/cr-c7830f0e.svg",revision:null},{url:"assets/ctc-7d31174c.svg",revision:null},{url:"assets/cu-0a09bdca.svg",revision:null},{url:"assets/cu-f5f7e6c5.svg",revision:null},{url:"assets/cv-3ab6aaaf.svg",revision:null},{url:"assets/cv-698aea34.svg",revision:null},{url:"assets/cw-186b6d23.svg",revision:null},{url:"assets/cw-e1c281f4.svg",revision:null},{url:"assets/cx-8af706f9.svg",revision:null},{url:"assets/cx-aaf17168.svg",revision:null},{url:"assets/cy-0e1f361e.svg",revision:null},{url:"assets/cy-88d041c0.svg",revision:null},{url:"assets/Cyber-3de15ab8.svg",revision:null},{url:"assets/cz-265906e2.svg",revision:null},{url:"assets/cz-4f34f92e.svg",revision:null},{url:"assets/date-4d5d1e1a.svg",revision:null},{url:"assets/de-226631a8.svg",revision:null},{url:"assets/de-d7cc619b.svg",revision:null},{url:"assets/Desert-71cfc3ca.svg",revision:null},{url:"assets/dj-55b23581.svg",revision:null},{url:"assets/dj-ffd9ebcb.svg",revision:null},{url:"assets/dk-c29517b4.svg",revision:null},{url:"assets/dk-feeb2768.svg",revision:null},{url:"assets/dm-80221b92.svg",revision:null},{url:"assets/dm-e5d72576.svg",revision:null},{url:"assets/do-2af33aac.svg",revision:null},{url:"assets/do-d399ea93.svg",revision:null},{url:"assets/Domain-ecd20923.svg",revision:null},{url:"assets/double-chevron-3901d1a1.svg",revision:null},{url:"assets/download-2-261a952b.svg",revision:null},{url:"assets/download-file-icon-36f7af90.svg",revision:null},{url:"assets/dz-6a1e2abb.svg",revision:null},{url:"assets/dz-75568129.svg",revision:null},{url:"assets/ec-63bf6e3a.svg",revision:null},{url:"assets/ec-672567f4.svg",revision:null},{url:"assets/edit-8ab0347f.svg",revision:null},{url:"assets/ee-53df0c62.svg",revision:null},{url:"assets/ee-b4c2ebcd.svg",revision:null},{url:"assets/eg-6234c774.svg",revision:null},{url:"assets/eg-83f4a01c.svg",revision:null},{url:"assets/eh-15abbba2.svg",revision:null},{url:"assets/eh-62f153a1.svg",revision:null},{url:"assets/equipment-ef2b582f.svg",revision:null},{url:"assets/equipment-embarked-fbda41e4.svg",revision:null},{url:"assets/equipment-towed-282d69a0.svg",revision:null},{url:"assets/er-29ca0e1f.svg",revision:null},{url:"assets/er-4c576859.svg",revision:null},{url:"assets/es-ab3d4388.svg",revision:null},{url:"assets/es-bfe2d95a.svg",revision:null},{url:"assets/es-ca-620053df.svg",revision:null},{url:"assets/es-ca-e6d65a5e.svg",revision:null},{url:"assets/es-ga-3318c783.svg",revision:null},{url:"assets/es-ga-f025ad04.svg",revision:null},{url:"assets/et-59795d6d.svg",revision:null},{url:"assets/et-e28f1f69.svg",revision:null},{url:"assets/eu-7085aed7.svg",revision:null},{url:"assets/eu-8c749ada.svg",revision:null},{url:"assets/export-7cc2a2f3.svg",revision:null},{url:"assets/external-link-36-fdd48a44.svg",revision:null},{url:"assets/faq-d9bb1339.svg",revision:null},{url:"assets/Feedback-4664ce5b.svg",revision:null},{url:"assets/fi-6c32372a.svg",revision:null},{url:"assets/fi-83783a7d.svg",revision:null},{url:"assets/file-94ffa8b5.svg",revision:null},{url:"assets/fj-36ff3e62.svg",revision:null},{url:"assets/fj-4972d31a.svg",revision:null},{url:"assets/fk-2705e5d9.svg",revision:null},{url:"assets/fk-6d11c1ec.svg",revision:null},{url:"assets/fm-0b0d81c2.svg",revision:null},{url:"assets/fm-88145846.svg",revision:null},{url:"assets/fo-5910fc80.svg",revision:null},{url:"assets/fo-c0b32df5.svg",revision:null},{url:"assets/force-structure-a80888cf.svg",revision:null},{url:"assets/fr-5d247ee3.svg",revision:null},{url:"assets/fr-63667b36.svg",revision:null},{url:"assets/ga-2b2ea508.svg",revision:null},{url:"assets/ga-6cf1908e.svg",revision:null},{url:"assets/gb-6ce6ebb0.svg",revision:null},{url:"assets/gb-825310f9.svg",revision:null},{url:"assets/gb-eng-83388730.svg",revision:null},{url:"assets/gb-eng-d2de597c.svg",revision:null},{url:"assets/gb-nir-5130c70b.svg",revision:null},{url:"assets/gb-nir-f5c0a725.svg",revision:null},{url:"assets/gb-sct-21234ce6.svg",revision:null},{url:"assets/gb-sct-bc44f444.svg",revision:null},{url:"assets/gb-wls-23a0c563.svg",revision:null},{url:"assets/gb-wls-2e246733.svg",revision:null},{url:"assets/gd-407dac34.svg",revision:null},{url:"assets/gd-eb435c57.svg",revision:null},{url:"assets/ge-3054d4e6.svg",revision:null},{url:"assets/ge-3f7e3b70.svg",revision:null},{url:"assets/Gear-9a8092cb.svg",revision:null},{url:"assets/gf-7e25c5fd.svg",revision:null},{url:"assets/gf-8b1d049a.svg",revision:null},{url:"assets/gg-7a521b07.svg",revision:null},{url:"assets/gg-e01d6706.svg",revision:null},{url:"assets/gh-120554a5.svg",revision:null},{url:"assets/gh-b979935b.svg",revision:null},{url:"assets/gi-7283b9d6.svg",revision:null},{url:"assets/gi-c84fb25b.svg",revision:null},{url:"assets/gl-1149b6b3.svg",revision:null},{url:"assets/gl-5e6efacd.svg",revision:null},{url:"assets/globe-a1b2d5ab.svg",revision:null},{url:"assets/gm-5f8874f8.svg",revision:null},{url:"assets/gm-6d6da698.svg",revision:null},{url:"assets/gn-255e2c29.svg",revision:null},{url:"assets/gn-735109ba.svg",revision:null},{url:"assets/gp-8bf5d31f.svg",revision:null},{url:"assets/gp-b9c50994.svg",revision:null},{url:"assets/gq-52b8daea.svg",revision:null},{url:"assets/gq-f4a44fd2.svg",revision:null},{url:"assets/gr-565e017f.svg",revision:null},{url:"assets/gr-d22330d2.svg",revision:null},{url:"assets/gs-718e0e89.svg",revision:null},{url:"assets/gs-ad593ae4.svg",revision:null},{url:"assets/gt-66d29cdd.svg",revision:null},{url:"assets/gt-aa19f58a.svg",revision:null},{url:"assets/gu-390cbafa.svg",revision:null},{url:"assets/gu-6d39ec64.svg",revision:null},{url:"assets/gw-14078000.svg",revision:null},{url:"assets/gw-ef2b9b0a.svg",revision:null},{url:"assets/gy-0b13a177.svg",revision:null},{url:"assets/gy-7562ed6d.svg",revision:null},{url:"assets/hamburger-e723357f.svg",revision:null},{url:"assets/handcuffs-f8371e93.svg",revision:null},{url:"assets/help-8c4c3218.svg",revision:null},{url:"assets/hk-17c1c661.svg",revision:null},{url:"assets/hk-9f59b3d6.svg",revision:null},{url:"assets/hm-78ed36c6.svg",revision:null},{url:"assets/hm-d0e56b82.svg",revision:null},{url:"assets/hn-38a50286.svg",revision:null},{url:"assets/hn-79cc9790.svg",revision:null},{url:"assets/home-date-e4b1234a.svg",revision:null},{url:"assets/home-fs-a48db143.svg",revision:null},{url:"assets/home-tc-6c4a665f.svg",revision:null},{url:"assets/home-weg-5e10ce36.svg",revision:null},{url:"assets/hr-1041347a.svg",revision:null},{url:"assets/hr-b0b1d075.svg",revision:null},{url:"assets/ht-092fc65d.svg",revision:null},{url:"assets/ht-ba77c23d.svg",revision:null},{url:"assets/hu-470431d1.svg",revision:null},{url:"assets/hu-ac2bf428.svg",revision:null},{url:"assets/id-b4e34342.svg",revision:null},{url:"assets/id-c9871d91.svg",revision:null},{url:"assets/ie-4d73eedf.svg",revision:null},{url:"assets/ie-e8a2121f.svg",revision:null},{url:"assets/il-1dcc3e31.svg",revision:null},{url:"assets/il-343c0403.svg",revision:null},{url:"assets/im-5b256ebd.svg",revision:null},{url:"assets/im-6dd9078e.svg",revision:null},{url:"assets/imagePlaceholder-8bce870c.svg",revision:null},{url:"assets/in-cbc15f5f.svg",revision:null},{url:"assets/in-dd68b8ac.svg",revision:null},{url:"assets/index-ba6e16e7.css",revision:null},{url:"assets/index-de673336.js",revision:null},{url:"assets/Infantry_Weapons-0daa852b.png",revision:null},{url:"assets/InfoBox-89c1bfd3.svg",revision:null},{url:"assets/io-5b124813.svg",revision:null},{url:"assets/io-b942bddf.svg",revision:null},{url:"assets/iq-4a529e76.svg",revision:null},{url:"assets/iq-4b13b016.svg",revision:null},{url:"assets/ir-18b8f0da.svg",revision:null},{url:"assets/ir-2047b977.svg",revision:null},{url:"assets/is-74bbf9d0.svg",revision:null},{url:"assets/is-89b266e3.svg",revision:null},{url:"assets/it-28a4339b.svg",revision:null},{url:"assets/it-2d46fd7f.svg",revision:null},{url:"assets/je-48867f2e.svg",revision:null},{url:"assets/je-7927e413.svg",revision:null},{url:"assets/jm-1b80b0d1.svg",revision:null},{url:"assets/jm-fc7c5d90.svg",revision:null},{url:"assets/jo-c3109f9f.svg",revision:null},{url:"assets/jo-e183a9aa.svg",revision:null},{url:"assets/jp-0573d020.svg",revision:null},{url:"assets/jp-e759dccb.svg",revision:null},{url:"assets/Jungle-fe8ed00a.svg",revision:null},{url:"assets/ke-3cc6fb77.svg",revision:null},{url:"assets/ke-c6390bd1.svg",revision:null},{url:"assets/kg-059ee944.svg",revision:null},{url:"assets/kg-618432f0.svg",revision:null},{url:"assets/kh-16c097cc.svg",revision:null},{url:"assets/kh-ec1e0984.svg",revision:null},{url:"assets/ki-210537cc.svg",revision:null},{url:"assets/ki-591a87de.svg",revision:null},{url:"assets/km-a6a46732.svg",revision:null},{url:"assets/km-f6cd3ead.svg",revision:null},{url:"assets/kn-ae4abba1.svg",revision:null},{url:"assets/kn-d0f010da.svg",revision:null},{url:"assets/kp-8d34a3fd.svg",revision:null},{url:"assets/kp-d0cb4408.svg",revision:null},{url:"assets/kr-3162c67e.svg",revision:null},{url:"assets/kr-3f72f5b1.svg",revision:null},{url:"assets/kw-ac538e6c.svg",revision:null},{url:"assets/kw-c874c334.svg",revision:null},{url:"assets/ky-707d019e.svg",revision:null},{url:"assets/ky-fcecffb0.svg",revision:null},{url:"assets/kz-8214283b.svg",revision:null},{url:"assets/kz-af4496d2.svg",revision:null},{url:"assets/la-1f70bf38.svg",revision:null},{url:"assets/la-dafd3a02.svg",revision:null},{url:"assets/Land-143de82c.svg",revision:null},{url:"assets/lb-5da3263f.svg",revision:null},{url:"assets/lb-80a2aaa6.svg",revision:null},{url:"assets/lc-6f186589.svg",revision:null},{url:"assets/lc-c4afe173.svg",revision:null},{url:"assets/li-956ad507.svg",revision:null},{url:"assets/li-c97f90de.svg",revision:null},{url:"assets/link-0b32507d.svg",revision:null},{url:"assets/lk-379d62d2.svg",revision:null},{url:"assets/lk-599de52b.svg",revision:null},{url:"assets/loading-2244fff1.svg",revision:null},{url:"assets/login-f0f8b6b4.svg",revision:null},{url:"assets/logo-b12a2c65.png",revision:null},{url:"assets/lr-371f542a.svg",revision:null},{url:"assets/lr-66c008c2.svg",revision:null},{url:"assets/ls-28553445.svg",revision:null},{url:"assets/ls-80ad805e.svg",revision:null},{url:"assets/lt-74f423c6.svg",revision:null},{url:"assets/lt-9012691c.svg",revision:null},{url:"assets/lu-4622624d.svg",revision:null},{url:"assets/lu-67ceb25f.svg",revision:null},{url:"assets/lv-23e2589c.svg",revision:null},{url:"assets/lv-dc67526a.svg",revision:null},{url:"assets/ly-3ad0387c.svg",revision:null},{url:"assets/ly-5139e751.svg",revision:null},{url:"assets/ma-3190fa17.svg",revision:null},{url:"assets/ma-f40a79d7.svg",revision:null},{url:"assets/mail-2e9ed8e0.svg",revision:null},{url:"assets/map-d0d38f8f.svg",revision:null},{url:"assets/mc-65c30fed.svg",revision:null},{url:"assets/mc-83f9d4ff.svg",revision:null},{url:"assets/md-92475a70.svg",revision:null},{url:"assets/md-af363b16.svg",revision:null},{url:"assets/me-29052367.svg",revision:null},{url:"assets/me-551e531e.svg",revision:null},{url:"assets/menu-a6c2bed0.svg",revision:null},{url:"assets/mf-a07c29d6.svg",revision:null},{url:"assets/mf-bf59a29b.svg",revision:null},{url:"assets/mg-9e1ecee8.svg",revision:null},{url:"assets/mg-e87135a4.svg",revision:null},{url:"assets/mh-4785fd64.svg",revision:null},{url:"assets/mh-ab6f5513.svg",revision:null},{url:"assets/minus-95c8493e.svg",revision:null},{url:"assets/mk-3c703508.svg",revision:null},{url:"assets/mk-ebcd71d6.svg",revision:null},{url:"assets/ml-0f990fac.svg",revision:null},{url:"assets/ml-e8326589.svg",revision:null},{url:"assets/mm-f4df9e4b.svg",revision:null},{url:"assets/mm-f7ef4a34.svg",revision:null},{url:"assets/mn-00649cb5.svg",revision:null},{url:"assets/mn-ff5ea681.svg",revision:null},{url:"assets/mo-60571532.svg",revision:null},{url:"assets/mo-e1007d66.svg",revision:null},{url:"assets/Montserrat-Bold-c4c8cb57.ttf",revision:null},{url:"assets/Montserrat-BoldItalic-91371db4.ttf",revision:null},{url:"assets/Montserrat-Italic-48541677.ttf",revision:null},{url:"assets/Montserrat-Regular-81ebc391.ttf",revision:null},{url:"assets/Montserrat-SemiBold-bab583d3.ttf",revision:null},{url:"assets/Mountain-d168adcf.svg",revision:null},{url:"assets/mp-2e4af783.svg",revision:null},{url:"assets/mp-9b89316d.svg",revision:null},{url:"assets/mq-0e466f6d.svg",revision:null},{url:"assets/mq-297d268a.svg",revision:null},{url:"assets/mr-e41908b9.svg",revision:null},{url:"assets/mr-fa026604.svg",revision:null},{url:"assets/ms-c1ba2771.svg",revision:null},{url:"assets/ms-c2c0dfee.svg",revision:null},{url:"assets/mt-b841b8cd.svg",revision:null},{url:"assets/mt-fd6a6cbf.svg",revision:null},{url:"assets/mu-9e4e19a6.svg",revision:null},{url:"assets/mu-e3ce67e6.svg",revision:null},{url:"assets/mv-0f9b86ef.svg",revision:null},{url:"assets/mv-57323390.svg",revision:null},{url:"assets/mw-5baad155.svg",revision:null},{url:"assets/mw-c2c93e16.svg",revision:null},{url:"assets/mx-82585030.svg",revision:null},{url:"assets/mx-b67b689c.svg",revision:null},{url:"assets/my-c992340a.svg",revision:null},{url:"assets/my-cb10a925.svg",revision:null},{url:"assets/mz-cbc5741e.svg",revision:null},{url:"assets/mz-db6310ed.svg",revision:null},{url:"assets/na-37d8c89f.svg",revision:null},{url:"assets/na-7c734858.svg",revision:null},{url:"assets/nc-b0c095d3.svg",revision:null},{url:"assets/nc-d7a07223.svg",revision:null},{url:"assets/ne-54d7076d.svg",revision:null},{url:"assets/ne-bee088c4.svg",revision:null},{url:"assets/new-272fbde5.svg",revision:null},{url:"assets/nf-4880d7db.svg",revision:null},{url:"assets/nf-f0e0b96f.svg",revision:null},{url:"assets/ng-8b34a12b.svg",revision:null},{url:"assets/ng-f1ca02b4.svg",revision:null},{url:"assets/ni-a6c8d7f7.svg",revision:null},{url:"assets/ni-a9ead4b0.svg",revision:null},{url:"assets/nl-426beba2.svg",revision:null},{url:"assets/nl-a91174a3.svg",revision:null},{url:"assets/no-567df11f.svg",revision:null},{url:"assets/no-c59f156d.svg",revision:null},{url:"assets/np-d81adac4.svg",revision:null},{url:"assets/np-ddc042ba.svg",revision:null},{url:"assets/nr-2f19fb53.svg",revision:null},{url:"assets/nr-6e66f805.svg",revision:null},{url:"assets/nu-1bfa55a9.svg",revision:null},{url:"assets/nu-55390cc0.svg",revision:null},{url:"assets/nz-b7f4f096.svg",revision:null},{url:"assets/nz-b93a77fe.svg",revision:null},{url:"assets/OdinLogo-b9b69d48.svg",revision:null},{url:"assets/om-20669c3a.svg",revision:null},{url:"assets/om-d66047c0.svg",revision:null},{url:"assets/other-0a98c8e4.svg",revision:null},{url:"assets/pa-0bd4b670.svg",revision:null},{url:"assets/pa-6e0e2719.svg",revision:null},{url:"assets/pe-3fddfd9a.svg",revision:null},{url:"assets/pe-e0468f05.svg",revision:null},{url:"assets/personnel-crew-046b9b58.svg",revision:null},{url:"assets/personnel-dismounted-c7222679.svg",revision:null},{url:"assets/personnel-passenger-94805478.svg",revision:null},{url:"assets/pf-d68e024f.svg",revision:null},{url:"assets/pf-de72e06f.svg",revision:null},{url:"assets/pg-10ae837d.svg",revision:null},{url:"assets/pg-40cd6462.svg",revision:null},{url:"assets/ph-2f9dd37f.svg",revision:null},{url:"assets/ph-fd167a43.svg",revision:null},{url:"assets/phone-49201edf.svg",revision:null},{url:"assets/pk-0c5ada4d.svg",revision:null},{url:"assets/pk-637994c8.svg",revision:null},{url:"assets/pl-bd8c588c.svg",revision:null},{url:"assets/pl-d7c4aadb.svg",revision:null},{url:"assets/placeholder-a7063018.png",revision:null},{url:"assets/plus-bbacc73e.svg",revision:null},{url:"assets/pm-4e3a65b4.svg",revision:null},{url:"assets/pm-e1e1de44.svg",revision:null},{url:"assets/pn-c2f3565f.svg",revision:null},{url:"assets/pn-d05afc28.svg",revision:null},{url:"assets/pr-7a94e53d.svg",revision:null},{url:"assets/pr-f87e928e.svg",revision:null},{url:"assets/print-7845dd1c.svg",revision:null},{url:"assets/profile-a4d7f54b.svg",revision:null},{url:"assets/ps-31a06ee8.svg",revision:null},{url:"assets/ps-84421fd6.svg",revision:null},{url:"assets/pt-2fc8fb37.svg",revision:null},{url:"assets/pt-62137f64.svg",revision:null},{url:"assets/pw-21a677b7.svg",revision:null},{url:"assets/pw-c59cfacb.svg",revision:null},{url:"assets/py-22570d44.svg",revision:null},{url:"assets/py-da5901ec.svg",revision:null},{url:"assets/qa-a5e58fc7.svg",revision:null},{url:"assets/qa-ffa8cd4e.svg",revision:null},{url:"assets/re-37be9dc3.svg",revision:null},{url:"assets/re-5183af67.svg",revision:null},{url:"assets/refresh-0f01e620.svg",revision:null},{url:"assets/ro-854593a6.svg",revision:null},{url:"assets/ro-da9e0ce1.svg",revision:null},{url:"assets/rs-04c759a5.svg",revision:null},{url:"assets/rs-cbb54d60.svg",revision:null},{url:"assets/ru-5b51b57f.svg",revision:null},{url:"assets/ru-bb2782a9.svg",revision:null},{url:"assets/rw-8c27cde7.svg",revision:null},{url:"assets/rw-aeb9bc73.svg",revision:null},{url:"assets/sa-639ee1c1.svg",revision:null},{url:"assets/sa-d54e76d7.svg",revision:null},{url:"assets/sb-19048c26.svg",revision:null},{url:"assets/sb-651213df.svg",revision:null},{url:"assets/sc-2ed9272d.svg",revision:null},{url:"assets/sc-90424aaf.svg",revision:null},{url:"assets/sd-b8b9d971.svg",revision:null},{url:"assets/sd-da52cd7a.svg",revision:null},{url:"assets/se-e4880df5.svg",revision:null},{url:"assets/se-f15c8829.svg",revision:null},{url:"assets/Sea-69086abe.svg",revision:null},{url:"assets/search-chevron-37c1c124.svg",revision:null},{url:"assets/search-f133bd48.svg",revision:null},{url:"assets/Serbia_and_Montenegro_(Montenegro_to_separate-e6546c6a.svg",revision:null},{url:"assets/sg-f6f8ecdd.svg",revision:null},{url:"assets/sg-fa164984.svg",revision:null},{url:"assets/sh-c3a06107.svg",revision:null},{url:"assets/sh-e7b5e4dc.svg",revision:null},{url:"assets/Share-088b5f09.svg",revision:null},{url:"assets/si-25487f7a.svg",revision:null},{url:"assets/si-53973e8d.svg",revision:null},{url:"assets/sj-d764d5de.svg",revision:null},{url:"assets/sj-e64bad4f.svg",revision:null},{url:"assets/sk-48d976a9.svg",revision:null},{url:"assets/sk-4ca76c92.svg",revision:null},{url:"assets/sl-9b4b8d18.svg",revision:null},{url:"assets/sl-d8106777.svg",revision:null},{url:"assets/sm-2cc3fc6d.svg",revision:null},{url:"assets/sm-d8ebb104.svg",revision:null},{url:"assets/sn-1e2477f3.svg",revision:null},{url:"assets/sn-e8f288fc.svg",revision:null},{url:"assets/so-50c5153e.svg",revision:null},{url:"assets/so-74f68a59.svg",revision:null},{url:"assets/Space-be28b658.svg",revision:null},{url:"assets/sr-04f64ba6.svg",revision:null},{url:"assets/sr-e146a0cc.svg",revision:null},{url:"assets/ss-15466776.svg",revision:null},{url:"assets/ss-d0545941.svg",revision:null},{url:"assets/st-a866043a.svg",revision:null},{url:"assets/st-ebb813a8.svg",revision:null},{url:"assets/submit-963135a2.svg",revision:null},{url:"assets/subnav-book-9f409788.svg",revision:null},{url:"assets/subnav-chapter-d189c31d.svg",revision:null},{url:"assets/subnav-economic-4edc9647.svg",revision:null},{url:"assets/subnav-environment-16332aae.svg",revision:null},{url:"assets/subnav-information-56359094.svg",revision:null},{url:"assets/subnav-infrastructure-d3aca859.svg",revision:null},{url:"assets/subnav-military-02bfcbf3.svg",revision:null},{url:"assets/subnav-political-6bb8678b.svg",revision:null},{url:"assets/subnav-social-783061e6.svg",revision:null},{url:"assets/subnav-time-ae775f5c.svg",revision:null},{url:"assets/subnav-top-ac2f3e15.svg",revision:null},{url:"assets/Subsurface-f3ee6f39.svg",revision:null},{url:"assets/Surface-720bd9fa.svg",revision:null},{url:"assets/survey-22435b59.svg",revision:null},{url:"assets/sv-4a2c02ae.svg",revision:null},{url:"assets/sv-ece5f580.svg",revision:null},{url:"assets/sx-aa8a47e9.svg",revision:null},{url:"assets/sx-ac716ddb.svg",revision:null},{url:"assets/sy-3b78773e.svg",revision:null},{url:"assets/sy-fdec8ea0.svg",revision:null},{url:"assets/sz-57cefe0c.svg",revision:null},{url:"assets/sz-ad977a6b.svg",revision:null},{url:"assets/tc-c3e7a86e.svg",revision:null},{url:"assets/tc-d91ac6bc.svg",revision:null},{url:"assets/td-b6ce40af.svg",revision:null},{url:"assets/td-ef115b39.svg",revision:null},{url:"assets/tf-0681ec54.svg",revision:null},{url:"assets/tf-90ad184c.svg",revision:null},{url:"assets/tg-486dca24.svg",revision:null},{url:"assets/tg-830f49a5.svg",revision:null},{url:"assets/th-4e206b56.svg",revision:null},{url:"assets/th-cb480908.svg",revision:null},{url:"assets/ticket-8d4a3792.svg",revision:null},{url:"assets/tier1_modal-9b3826ad.svg",revision:null},{url:"assets/tier1-8b3692b9.svg",revision:null},{url:"assets/tier1.new-95f08153.svg",revision:null},{url:"assets/tier2_modal-79c3f6df.svg",revision:null},{url:"assets/tier2-75dedff0.svg",revision:null},{url:"assets/tier2.new-1932ce74.svg",revision:null},{url:"assets/tier3_modal-aa9a9fd5.svg",revision:null},{url:"assets/tier3-447e75e4.svg",revision:null},{url:"assets/tier3.new-234935d2.svg",revision:null},{url:"assets/tier4_modal-a3f5574d.svg",revision:null},{url:"assets/tier4-e60eb673.svg",revision:null},{url:"assets/tier4.new-fc6c7285.svg",revision:null},{url:"assets/tile_toggle-7e886d08.svg",revision:null},{url:"assets/tile_toggle-hover-a418b29a.svg",revision:null},{url:"assets/tj-1a8979f0.svg",revision:null},{url:"assets/tj-a133d52c.svg",revision:null},{url:"assets/tk-137c7ebb.svg",revision:null},{url:"assets/tk-3e49a632.svg",revision:null},{url:"assets/tl-8662a8d0.svg",revision:null},{url:"assets/tl-d26071dd.svg",revision:null},{url:"assets/tm-22b811ff.svg",revision:null},{url:"assets/tm-42c8536f.svg",revision:null},{url:"assets/tn-5d05bcd6.svg",revision:null},{url:"assets/tn-84116fb5.svg",revision:null},{url:"assets/to-5e87ab54.svg",revision:null},{url:"assets/to-a2007667.svg",revision:null},{url:"assets/TOC-4d7b9d53.svg",revision:null},{url:"assets/tr-033a416e.svg",revision:null},{url:"assets/tr-74e60d09.svg",revision:null},{url:"assets/training-circulars-e31a380b.svg",revision:null},{url:"assets/tt-3d65dcbc.svg",revision:null},{url:"assets/tt-f6ac8857.svg",revision:null},{url:"assets/tv-6017cefb.svg",revision:null},{url:"assets/tv-add42a02.svg",revision:null},{url:"assets/tw-06af22c3.svg",revision:null},{url:"assets/tw-44b7d1f3.svg",revision:null},{url:"assets/tz-1d5e7fb7.svg",revision:null},{url:"assets/tz-ad4c35de.svg",revision:null},{url:"assets/ua-79092de6.svg",revision:null},{url:"assets/ua-fbbf0f0e.svg",revision:null},{url:"assets/ug-001fa554.svg",revision:null},{url:"assets/ug-59bc76de.svg",revision:null},{url:"assets/um-9674c828.svg",revision:null},{url:"assets/um-d2e8ac20.svg",revision:null},{url:"assets/un-6685994f.svg",revision:null},{url:"assets/un-774bae01.svg",revision:null},{url:"assets/Urban-a0f68626.svg",revision:null},{url:"assets/us-c4ffd045.svg",revision:null},{url:"assets/us-c70ba1cb.svg",revision:null},{url:"assets/uy-25c64033.svg",revision:null},{url:"assets/uy-4466c6f0.svg",revision:null},{url:"assets/uz-76a3658f.svg",revision:null},{url:"assets/uz-96eba693.svg",revision:null},{url:"assets/va-89b12d71.svg",revision:null},{url:"assets/va-bcc69d5a.svg",revision:null},{url:"assets/vc-3be977d9.svg",revision:null},{url:"assets/vc-55b7f903.svg",revision:null},{url:"assets/ve-2fe0f692.svg",revision:null},{url:"assets/ve-3079fd19.svg",revision:null},{url:"assets/vendor-46ae3862.js",revision:null},{url:"assets/vendor-bbcc8f84.css",revision:null},{url:"assets/vg-509967ce.svg",revision:null},{url:"assets/vg-caec07f0.svg",revision:null},{url:"assets/vi-0c181186.svg",revision:null},{url:"assets/vi-8112962d.svg",revision:null},{url:"assets/vn-1768f5ce.svg",revision:null},{url:"assets/vn-42db427a.svg",revision:null},{url:"assets/voa_nav-dc50a0b4.svg",revision:null},{url:"assets/voa-4d38173c.svg",revision:null},{url:"assets/vu-016c68fd.svg",revision:null},{url:"assets/vu-03a36a95.svg",revision:null},{url:"assets/weg-9a9298ba.svg",revision:null},{url:"assets/wf-58788743.svg",revision:null},{url:"assets/wf-e8360ce3.svg",revision:null},{url:"assets/ws-7cdc90f7.svg",revision:null},{url:"assets/ws-e77b5573.svg",revision:null},{url:"assets/xk-20140150.svg",revision:null},{url:"assets/xk-a63525c9.svg",revision:null},{url:"assets/ye-ccc0af8c.svg",revision:null},{url:"assets/ye-d7527d58.svg",revision:null},{url:"assets/yt-79459783.svg",revision:null},{url:"assets/yt-b1e78ed9.svg",revision:null},{url:"assets/za-3985889b.svg",revision:null},{url:"assets/za-d2d473f4.svg",revision:null},{url:"assets/zm-107a1d20.svg",revision:null},{url:"assets/zm-4b557cfd.svg",revision:null},{url:"assets/zoom-all-1e1fa01f.svg",revision:null},{url:"assets/zoom-in-aa5a2ec4.svg",revision:null},{url:"assets/zoom-out-e8c5c0c1.svg",revision:null},{url:"assets/zoom-reset-300a3a17.svg",revision:null},{url:"assets/zw-a357182e.svg",revision:null},{url:"assets/zw-c763d38c.svg",revision:null},{url:"favicon.png",revision:"8a71971a70fb242822127d983751b3e2"},{url:"favicon@2x.png",revision:"731333a2a0cdf0c8fe33fb28847b5dbb"},{url:"favicon@3x.png",revision:"e7f9847bed7dd9f6bd4e92747def768c"},{url:"index.html",revision:"5611708be33e5cb78fd083fbd673d805"},{url:"odin_512.png",revision:"f10642bb436bcba1e32af513e8ae7629"},{url:"Progressive_Web_Apps_Logo.svg",revision:"b50455e046f84b118de3f049b0f27e23"},{url:"pwa_install_desktop_2.png",revision:"1582b0351d416b76b2b603e08ec82bfd"},{url:"pwa_install_desktop_3.png",revision:"e27292d99ccaed2a433754af08aa6bcf"},{url:"pwa_install_desktop_4.png",revision:"a1cd7ebb3ec460d43310b2f4b71c6010"},{url:"pwa_install_desktop_5.png",revision:"adacff775169df5e1194ebc5dd4eb9cc"},{url:"pwa_install_desktop_6.png",revision:"0f5d08edbfdc373cec7cb65c0d218154"},{url:"pwa_install_desktop_7.png",revision:"b87c8ecb697c5003c8f169d958bb90ad"},{url:"pwa_install_desktop_8.png",revision:"007cac6bd4623bd266ed3ef918d8cab9"},{url:"pwa_install_desktop_9.png",revision:"e24d268bcdd7a644c9cba4468c99089e"},{url:"pwa_install_mobile_0.jpg",revision:"d2abaa197b2ab5f8ef2e7d04f0515173"},{url:"pwa_install_mobile_1.jpg",revision:"ab7b4c2145974077540dae48406374e7"},{url:"pwa_install_mobile_2.jpg",revision:"a84708e4b6cb0f6d906abf458d1e9ab8"},{url:"pwa_install_mobile_3.jpg",revision:"03db1950fba5cae34f82d775a4ed4d62"},{url:"pwa_install_mobile_4.jpg",revision:"6d8471df3c7bce18064eecec9218fb70"},{url:"pwa_install_mobile_5.jpg",revision:"c05ee40165089520392768898623d7c3"},{url:"pwa_install_mobile_6.jpg",revision:"75d8bfd925f9449ea96372c5bc2caf43"},{url:"odin_512.png",revision:"f10642bb436bcba1e32af513e8ae7629"},{url:"manifest.webmanifest",revision:"8d260ae1906734aeb5c00e46bd18c991"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/pwa-test/index.html"))),s.registerRoute((({request:s})=>"document"===s.destination||"navigate"===s.mode),new s.NetworkFirst({cacheName:"html-cache",plugins:[]}),"GET"),s.registerRoute((({request:s})=>"style"===s.destination||"script"===s.destination),new s.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET"),s.registerRoute((({request:s})=>"image"===s.destination||"font"===s.destination),new s.CacheFirst({cacheName:"assets-cache",plugins:[new s.ExpirationPlugin({maxEntries:50,maxAgeSeconds:3600})]}),"GET"),s.registerRoute(/\/data\/.*\.json$/,new s.CacheFirst({cacheName:"local-data",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:3600})]}),"GET")}));
