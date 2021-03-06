/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './refresher-content';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './refresher';
import * as import9 from '../../config/config';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '../spinner/spinner';
import * as import13 from '../spinner/spinner.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '../icon/icon.ngfactory';
import * as import18 from '../icon/icon';
import * as import19 from '@angular/core/src/security';
export var Wrapper_RefresherContent = (function () {
    function Wrapper_RefresherContent(p0, p1) {
        this._changed = false;
        this.context = new import0.RefresherContent(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
    }
    Wrapper_RefresherContent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RefresherContent.prototype.ngOnDestroy = function () {
    };
    Wrapper_RefresherContent.prototype.check_pullingIcon = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.pullingIcon = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_RefresherContent.prototype.check_pullingText = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.pullingText = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_RefresherContent.prototype.check_refreshingSpinner = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.refreshingSpinner = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_RefresherContent.prototype.check_refreshingText = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.refreshingText = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_RefresherContent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_RefresherContent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_4 = this.context.r.state;
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementAttribute(el, 'state', ((currVal_4 == null) ? null : currVal_4.toString()));
            this._expr_4 = currVal_4;
        }
    };
    Wrapper_RefresherContent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RefresherContent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RefresherContent;
}());
var renderType_RefresherContent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_RefresherContent_Host0 = (function (_super) {
    __extends(View_RefresherContent_Host0, _super);
    function View_RefresherContent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_RefresherContent_Host0, renderType_RefresherContent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_RefresherContent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ion-refresher-content', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_RefresherContent0(this.viewUtils, this, 0, this._el_0);
        this._RefresherContent_0_3 = new Wrapper_RefresherContent(this.injectorGet(import8.Refresher, this.parentIndex), this.injectorGet(import9.Config, this.parentIndex));
        this.compView_0.create(this._RefresherContent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._RefresherContent_0_3.context);
    };
    View_RefresherContent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.RefresherContent) && (0 === requestNodeIndex))) {
            return this._RefresherContent_0_3.context;
        }
        return notFoundResult;
    };
    View_RefresherContent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._RefresherContent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._RefresherContent_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_RefresherContent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_RefresherContent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_RefresherContent_Host0;
}(import2.AppView));
export var RefresherContentNgFactory = new import7.ComponentFactory('ion-refresher-content', View_RefresherContent_Host0, import0.RefresherContent);
var styles_RefresherContent = [];
var renderType_RefresherContent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_RefresherContent, {});
export var View_RefresherContent0 = (function (_super) {
    __extends(View_RefresherContent0, _super);
    function View_RefresherContent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_RefresherContent0, renderType_RefresherContent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_RefresherContent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'refresher-pulling'), null);
        this._anchor_1 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_1 = new import10.ViewContainer(1, 0, this, this._anchor_1);
        this._TemplateRef_1_5 = new import14.TemplateRef_(this, 1, this._anchor_1);
        this._NgIf_1_6 = new import11.Wrapper_NgIf(this._vc_1.vcRef, this._TemplateRef_1_5);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import10.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import14.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import11.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'refresher-refreshing'), null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'refresher-refreshing-icon'), null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_4, 'ion-spinner', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_5 = new import13.View_Spinner0(this.viewUtils, this, 5, this._el_5);
        this._Spinner_5_3 = new import13.Wrapper_Spinner(this.parentView.injectorGet(import9.Config, this.parentIndex), new import15.ElementRef(this._el_5), this.renderer);
        this.compView_5.create(this._Spinner_5_3.context);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_6 = new import10.ViewContainer(6, 3, this, this._anchor_6);
        this._TemplateRef_6_5 = new import14.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import11.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._anchor_1,
            this._anchor_2,
            this._el_3,
            this._el_4,
            this._el_5,
            this._anchor_6
        ]), null);
        return null;
    };
    View_RefresherContent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (1 === requestNodeIndex))) {
            return this._TemplateRef_1_5;
        }
        if (((token === import16.NgIf) && (1 === requestNodeIndex))) {
            return this._NgIf_1_6.context;
        }
        if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import16.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        if (((token === import12.Spinner) && (5 === requestNodeIndex))) {
            return this._Spinner_5_3.context;
        }
        if (((token === import14.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import16.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    View_RefresherContent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this.context.pullingIcon;
        this._NgIf_1_6.check_ngIf(currVal_1_0_0, throwOnChange, false);
        this._NgIf_1_6.ngDoCheck(this, this._anchor_1, throwOnChange);
        var currVal_2_0_0 = this.context.pullingText;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        var currVal_5_0_0 = this.context.refreshingSpinner;
        this._Spinner_5_3.check_name(currVal_5_0_0, throwOnChange, false);
        if (this._Spinner_5_3.ngDoCheck(this, this._el_5, throwOnChange)) {
            this.compView_5.markAsCheckOnce();
        }
        var currVal_6_0_0 = this.context.refreshingText;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._Spinner_5_3.checkHost(this, this.compView_5, this._el_5, throwOnChange);
        this.compView_5.detectChanges(throwOnChange);
    };
    View_RefresherContent0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
        this._vc_2.destroyNestedViews();
        this._vc_6.destroyNestedViews();
        this.compView_5.destroy();
    };
    View_RefresherContent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 1)) {
            return new View_RefresherContent1(this.viewUtils, this, 1, this._anchor_1, this._vc_1);
        }
        if ((nodeIndex == 2)) {
            return new View_RefresherContent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        if ((nodeIndex == 6)) {
            return new View_RefresherContent3(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    return View_RefresherContent0;
}(import2.AppView));
var View_RefresherContent1 = (function (_super) {
    __extends(View_RefresherContent1, _super);
    function View_RefresherContent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_RefresherContent1, renderType_RefresherContent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_RefresherContent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'refresher-pulling-icon'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'ion-icon', new import3.InlineArray2(2, 'role', 'img'), null);
        this._Icon_1_3 = new import17.Wrapper_Icon(this.parentView.parentView.injectorGet(import9.Config, this.parentView.parentIndex), new import15.ElementRef(this._el_1), this.renderer);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1
        ]), null);
        return null;
    };
    View_RefresherContent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.Icon) && (1 === requestNodeIndex))) {
            return this._Icon_1_3.context;
        }
        return notFoundResult;
    };
    View_RefresherContent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this.parentView.context.pullingIcon;
        this._Icon_1_3.check_name(currVal_1_0_0, throwOnChange, false);
        this._Icon_1_3.ngDoCheck(this, this._el_1, throwOnChange);
        this._Icon_1_3.checkHost(this, this, this._el_1, throwOnChange);
    };
    View_RefresherContent1.prototype.destroyInternal = function () {
        this._Icon_1_3.ngOnDestroy();
    };
    View_RefresherContent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_RefresherContent1;
}(import2.AppView));
var View_RefresherContent2 = (function (_super) {
    __extends(View_RefresherContent2, _super);
    function View_RefresherContent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_RefresherContent2, renderType_RefresherContent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_1 = import1.UNINITIALIZED;
    }
    View_RefresherContent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'refresher-pulling-text'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_RefresherContent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.pullingText;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import19.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_RefresherContent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_RefresherContent2;
}(import2.AppView));
var View_RefresherContent3 = (function (_super) {
    __extends(View_RefresherContent3, _super);
    function View_RefresherContent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_RefresherContent3, renderType_RefresherContent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_1 = import1.UNINITIALIZED;
    }
    View_RefresherContent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'refresher-refreshing-text'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_RefresherContent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.refreshingText;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import19.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_RefresherContent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_RefresherContent3;
}(import2.AppView));
//# sourceMappingURL=refresher-content.ngfactory.js.map