"use strict";(self.webpackChunkvnanikalyan_github_io=self.webpackChunkvnanikalyan_github_io||[]).push([[9924],{9853:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var l=t(7294),n=t(4161),c=t(9960),s=t(3616),r=t(5999);function g(e){var a=e.doc;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(c.Z,{to:a.permalink},l.createElement("h2",null,a.title)),a.description&&l.createElement("p",null,a.description))}function i(e){var a,t=e.tag,i=(a=(0,s.c2)().selectMessage,function(e){return a(e,(0,r.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),o=(0,r.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:i(t.docs.length),tagName:t.name});return l.createElement(n.Z,{title:o,wrapperClassName:s.kM.wrapper.docsPages,pageClassName:s.kM.page.docsTagDocListPage,searchMetadata:{tag:"doc_tag_doc_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,o),l.createElement(c.Z,{href:t.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},t.docs.map((function(e){return l.createElement(g,{key:e.id,doc:e})})))))))}}}]);