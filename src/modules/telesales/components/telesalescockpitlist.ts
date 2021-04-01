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
 * @module ModuleTeleSales
 */
import {Component, Input, QueryList, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';
import {language} from '../../../services/language.service';
import {telecockpitservice} from '../services/telecockpit.service';
import {modellist} from '../../../services/modellist.service';
import {model} from '../../../services/model.service';
import {view} from "../../../services/view.service";
import {TeleSalesCockpitListItem} from "./telesalescockpitlistitem";

@Component({
    selector: 'tele-sales-cockpit-list',
    templateUrl: './src/modules/telesales/templates/telesalescockpitlist.html',
    providers: [view, model, modellist]
})
export class TeleSalesCockpitList {

    @ViewChild('listcontainer', {read: ViewContainerRef, static: true}) private listcontainer: ViewContainerRef;
    @ViewChild('itemscontainer', {read: ViewContainerRef, static: true}) private itemscontainer: ViewContainerRef;
    @ViewChildren(TeleSalesCockpitListItem) private itemsComponents: QueryList<TeleSalesCockpitListItem>;
    @Input() private selectedListItemId: string;

    constructor(private language: language,
                private telecockpitservice: telecockpitservice) {
    }

    get isLoading() {
        return this.telecockpitservice.isloading;
    }

    get listItems() {
        return this.telecockpitservice.listItems;
    }

    get listStyle() {
        let rect = this.listcontainer.element.nativeElement.getBoundingClientRect();
        return {
            height: 'calc(100vh - ' + rect.top + 'px)'
        };
    }

    public ngOnChanges() {
        this.setSelectedItem();
    }

    private setSelectedItem() {
        if (this.selectedListItemId) {
            this.itemsComponents.forEach(listItem => listItem.isSelected = listItem.item.data.id == this.selectedListItemId);
        }
    }

    private onScroll(e) {
        let element = this.listcontainer.element.nativeElement;
        if (element.scrollTop + element.clientHeight + 50 > element.scrollHeight) {
            this.telecockpitservice.loadMoreData();
        }
    }

    private trackByFn(index, item) {
        return item.id;
    }
}