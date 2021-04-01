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
 * @module ModulePriceConditions
 */
import {Injectable} from '@angular/core';
import {backend} from '../../../services/backend.service';
import {configurationService} from '../../../services/configuration.service';
import {BehaviorSubject} from "rxjs";

declare var _: any;

@Injectable()
export class priceconditonsconfiguration {

    public config: any = {};

    public loaded$: BehaviorSubject<boolean>;

    constructor(
        private backend: backend,
        private configuration: configurationService,
    ) {
        this.loaded$ = new BehaviorSubject<boolean>(false);

        // load the config
        this.getConfig();
    }

    /**
     * loads the config from the backend
     */
    private getConfig() {
        this.config = this.configuration.getData('priceconditonsconfiguration');
        if(_.isEmpty(this.config)) {
            this.backend.getRequest(`module/PriceConditions/configuration`).subscribe(config => {
                this.config = config;
                this.configuration.setData('priceconditonsconfiguration', config);
                this.loaded$.next(true);
            });
        } else {
            this.loaded$.next(true);
        }
    }

}