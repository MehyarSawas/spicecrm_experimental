/*
SpiceUI 2018.10.001

Copyright (c) 2016-present, aac services.k.s - All rights reserved.
Redistribution and use in source and binary forms, without modification, are permitted provided that the following conditions are met:
- Redistributions of source code must retain this copyright and license notice, this list of conditions and the following disclaimer.
- Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
- If used the SpiceCRM Logo needs to be displayed in the upper left corner of the screen in a minimum dimension of 31x31 pixels and be clearly visible, the icon needs to provide a link to http://www.spicecrm.io
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/

/**
 * @module ModuleGSuite
 */
import {
    Component,
    Injectable,
    Input,
    OnInit,
    ChangeDetectorRef,
    enableProdMode,
    SystemJsNgModuleLoader
} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {BrowserModule, Title} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpClientModule, HttpHeaders, HttpClient} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes, Router, ActivatedRoute} from '@angular/router';
import {Subject, Observable} from 'rxjs';


// spicecrm generic modules
import {SystemComponents} from "../../systemcomponents/systemcomponents";
import {ObjectComponents} from "../../objectcomponents/objectcomponents";
import {DirectivesModule} from "../../directives/directives";
import {GlobalComponents} from "../../globalcomponents/globalcomponents";

// various services we need on global app level
import {configurationService} from "../../services/configuration.service";
import {helper} from "../../services/helper.service";
import {loginService, loginCheck} from "../../services/login.service";
import {session} from "../../services/session.service";
import {
    metadata,
    aclCheck
} from "../../services/metadata.service";
import {MathExpressionCompilerService} from "../../services/mathexpressioncompiler";
import {language} from "../../services/language.service";
import {recent} from "../../services/recent.service";
import {userpreferences} from "../../services/userpreferences.service";
import {fts} from "../../services/fts.service";
import {loader} from "../../services/loader.service";
import {libloader} from "../../services/libloader.service";
import {broadcast} from "../../services/broadcast.service";
import {dockedComposer} from "../../services/dockedcomposer.service";
import {backend} from "../../services/backend.service";
import {navigation} from "../../services/navigation.service";
import {modelutilities} from "../../services/modelutilities.service";
import {toast} from "../../services/toast.service";
import {favorite} from "../../services/favorite.service";
import {reminder} from "../../services/reminder.service";
import {territories} from "../../services/territories.service";
import {currency} from "../../services/currency.service";
import {footer} from "../../services/footer.service";
import {cookie} from "../../services/cookie.service";
import {modal} from "../../services/modal.service";
import {layout} from "../../services/layout.service";
import {loggerService} from "../../services/logger.service";
import {telephony} from "../../services/telephony.service";
import {socket} from "../../services/socket.service";
import {SystemDynamicRouteInterceptor} from "../../systemcomponents/components/systemdynamicrouteinterceptor";

import {model} from "../../services/model.service";
import {ModuleGroupware} from "../../include/groupware/groupware";
import {GroupwareService} from '../../include/groupware/services/groupware.service';

import /*embed*/ {GSuiteMessageI, GSuiteAttachmentI} from "./interfaces/gsuite.interfaces";

import /*embed*/ {GSuiteBrokerService} from '../../include/gsuite/services/gsuitebroker.service';
import /*embed*/ {GSuiteGroupware} from "./services/gsuitegroupware.service";

import /*embed*/ {GSuitePane} from './components/gsuitepane';
import /*embed*/ {GSuitePaneFooter} from './components/gsuitepanefooter';
import /*embed*/ {GSuitePaneDefault} from "./components/gsuitepanedefault";
import /*embed*/ {GSuiteLoginPane} from "./components/gsuiteloginpane";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        SystemComponents,
        ObjectComponents,
        DirectivesModule,
        GlobalComponents,
        ModuleGroupware,
        RouterModule.forRoot([
            {path: 'login', component: GSuiteLoginPane},
            {path: "", component: SystemDynamicRouteInterceptor, pathMatch: "full", canActivate: [loginCheck]},
            {path: '**', component: SystemDynamicRouteInterceptor, canActivate: [loginCheck]}
        ])
    ],
    declarations: [
        GSuitePane,
        GSuitePaneFooter,
        GSuiteLoginPane,
        GSuitePaneDefault,
    ],
    bootstrap: [GSuitePane],
    providers: [
        model,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: GroupwareService, useClass: GSuiteGroupware},
        GSuiteBrokerService,
        backend,
        broadcast,
        layout,
        navigation,
        session,
        metadata,
        aclCheck,
        helper,
        loginCheck,
        loginService,
        loader,
        libloader,
        configurationService,
        language,
        dockedComposer,
        telephony,
        socket,
        fts,
        recent,
        modelutilities,
        toast,
        favorite,
        reminder,
        territories,
        currency,
        footer,
        userpreferences,
        cookie,
        MathExpressionCompilerService,
        modal,
        loggerService
    ]
})
export class ModuleGSuite {
    constructor(private navigation: navigation) {
        this.navigation.enforceNavigationParadigm('simple');
    }
}

// set prod mode
enableProdMode();

platformBrowserDynamic().bootstrapModule(ModuleGSuite).catch(error => console.error(error));





