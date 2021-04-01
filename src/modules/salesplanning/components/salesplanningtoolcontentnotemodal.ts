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
 * @module ModuleSalesPlanning
 */
import {Component, Injector} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {language} from "../../../services/language.service";
import {metadata} from "../../../services/metadata.service";

@Component({
    templateUrl: './src/modules/salesplanning/templates/salesplanningtoolcontentnotemodal.html',
})

export class SalesPlanningToolContentNoteModal {
    public self: any = {};
    public canEdit: boolean = false;
    public nodeInfo: any = {};
    public doSave: Observable<boolean> = new Observable<boolean>();
    public doSaveSubject: Subject<boolean> = new Subject<boolean>();

    constructor(private language: language) {
        this.doSave = this.doSaveSubject.asObservable();

    }

    /*
    * @reset notice
    */
    private clear() {
        if (!this.canEdit) return;
        this.nodeInfo.notice = '';
    }

    /*
    * @destroy self
    */
    private close() {
        this.self.destroy();
    }

    /*
    * @next doSaveSubject: boolean = true
    * @complete doSaveSubject
    * @close
    */
    private save() {
        if (!this.canEdit) return;
        this.doSaveSubject.next(true);
        this.doSaveSubject.complete();
        this.close();
    }
}