// ==UserScript==
// @name         CiUI Scroll-wheel Animation Override
// @namespace    https://citri.one/
// @version      2024-02-05
// @description  Ease-In Style Scroll-wheel
// @author       Citrizon
// @match        *://*/*
// @icon         data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAACHFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8kB/h6AAAAs3RSTlMABxo5cpWrw97nACyA1P4FNqz6AUvQ0UwCHfwJnmT0rggZxccSA5OSa/1VyOztKSry8xDm4rG0TvCipvvCFBe492nZ3QutSBhH9sQNUV3L+cwjhASKM+O90r4n7yHObxEWODEvLRVh4fHoeXevWE/pkR+Hgw6c32hxBkRNQLM0uVz4v9oKJIjqi44cWvUbho+gmp8/OyvkPGepV1BBfeUwvCXNydaMPaWYX26WVJnVIFvPUrOWaLUAABFkSURBVHgB7NIHVsJAFAVQAoRQJ82WQCJKLLFXQLEs+m1Qd+DxmJn5I++u4ba2kdfudH2/FwT9wbd+EPR8v9tpe8Mt1BpuDW80nij8SE3GI48B/pMwihP8WhJHIQO4Lt3ZxZ/s7R8wgKOyOEcj8jhjAMdMZwqNUrMp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
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';

    Math.clamp = function ( v,m,x ) { return Math.max( m, Math.min( x, v ) ); }
    Math.lerp  = function ( a,b,t ) { return a + (b - a) * t; }
    Math.range = function ( c,m,x ) { return (c - m) / (x - m); }
    Math.sign  = function ( x     ) { return ((x > 0) - (x < 0)) || +x; }

    class WheelAnimationOverride {
        static override () {
            if ( window.CIUI && window.CIUI.animationOverrideList && window.CIUI.animationOverrideList.WheelAnimationOverride )
                return con.warn( `WheelAnimationOverride Instance already exists and it is managed by '${ window.CIUI.animationOverrideList.WheelAnimationOverride.manager }'` );
            document.scrollingElement.style.scrollBehavior = "unset";
            window.addEventListener( 'wheel', WheelAnimationOverride.event, {passive: false} );
            window.CIUI ??= {}; window.CIUI.animationOverrideList ??= {};
            window.CIUI.animationOverrideList.WheelAnimationOverride = ( { manager: instanceName } );
        }
        static recursiveTargetFind ( element, dX, dY ) {
            const scrollTopMax = element.scrollHeight - element.clientHeight;
            const scrollLeftMax = element.scrollWidth - element.clientWidth;
            const isElementScrollReady = ( element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight );

            const isXScrollable = ( dX == -1 && ( element.scrollLeft !== 0 ) ) || ( dX == 1 && ( element.scrollLeft <= ( scrollLeftMax - 1 ) ) ) && !!( element.scrollLeft || ( ++element.scrollLeft && element.scrollLeft-- ) );
            const isYScrollable = ( dY == -1 && ( element.scrollTop  !== 0 ) ) || ( dY == 1 && ( element.scrollTop  <= ( scrollTopMax  - 1 ) ) ) && !!( element.scrollTop  || ( ++element.scrollTop  && element.scrollTop--  ) );

            if ( !( isElementScrollReady && ( isYScrollable || isXScrollable ) ) ) return element.parentElement ?
                    WheelAnimationOverride.recursiveTargetFind( element.parentElement, dX, dY ) :
                    ( {
                            scrollx: false,
                            scrolly: false,
                            isXScrollable: false,
                            isYScrollable: false,
                            element: document.scrollingElement
                    } );

            element.computedStyle ??= window.getComputedStyle(element);

            const isXHidden = !element.parentElement ? false : !( element.computedStyle.overflowX == 'auto' || element.computedStyle.overflowX == 'scroll' );
            const isYHidden = !element.parentElement ? false : !( element.computedStyle.overflowY == 'auto' || element.computedStyle.overflowY == 'scroll' );

            if ( isElementScrollReady && ( ( !isXHidden && ( ( dX == 0 ) || ( dX !== 0 && isXScrollable ))  ) || ( !isYHidden && ( ( dY == 0 ) || ( dY !== 0 && isYScrollable ) ) ) ) )
                return {
                    scrollx: element.scrollWidth > element.clientWidth,
                    scrolly: element.scrollHeight > element.clientHeight,
                    scrollTopMax,
                    scrollLeftMax,
                    isXScrollable,
                    isYScrollable,
                    element
                };
            else return element.parentElement ? WheelAnimationOverride.recursiveTargetFind( element.parentElement, dX, dY ) : {
                scrollx: false,
                scrolly: false,
                isXScrollable: false,
                isYScrollable: false,
                element: document.scrollingElement
        };
        }
        static event ( e ) {
            if ( e.ctrlKey ) return;
            const directionY = !e.shiftKey ? Math.sign( e.deltaY ) : 0;
            const directionX = ( Math.sign( e.deltaX ) == 0 ) && e.shiftKey ? Math.sign( e.deltaY ) : Math.sign( e.deltaX );
            const obj = WheelAnimationOverride.recursiveTargetFind( e.target, directionX, directionY );
            obj.element.animationOverrides ??= {
                animPosX: obj.element.scrollLeft,
                animPosY: obj.element.scrollTop,
            };
            if ( !e.shiftKey && obj.scrolly && obj.isYScrollable && directionY !== 0 ) {
                e.preventDefault(); e.stopPropagation();
                obj.element.animationOverrides.animEnd = performance.now() + 300;
                obj.element.animationOverrides.animPosY = Math.clamp( obj.element.animationOverrides.animPosY + e.deltaY, 0, obj.scrollTopMax );
                if ( obj.element.animationOverrides.animFrame == null ) {
                    obj.element.animationOverrides.animPosY = Math.clamp( obj.element.scrollTop + e.deltaY, 0, obj.scrollTopMax );
                    requestAnimationFrame( WheelAnimationOverride.frame.bind( obj ) )
                };
            } else if ( e.shiftKey && obj.scrollx && obj.isXScrollable && directionX !== 0 ) {
                e.preventDefault(); e.stopPropagation();
                obj.element.animationOverrides.animEnd = performance.now() + 300;
                obj.element.animationOverrides.animPosX = Math.clamp( obj.element.animationOverrides.animPosX + e.deltaY, 0, obj.scrollLeftMax );
                if ( obj.element.animationOverrides.animFrame == null ) {
                    obj.element.animationOverrides.animPosX = Math.clamp( obj.element.scrollLeft + e.deltaY, 0, obj.scrollLeftMax );
                    requestAnimationFrame( WheelAnimationOverride.frame.bind( obj ) )
                };
            };
        }
        static frame () {
            if ( performance.now() > this.element.animationOverrides.animEnd ) {
                cancelAnimationFrame( this.element.animationOverrides.animFrame );
                this.element.animationOverrides.animFrame = null;
                this.element.animationOverrides.animPosX = this.element.scrollLeft;
                this.element.animationOverrides.animPosY = this.element.scrollTop;
                return;
            }
            this.element.scrollTop = Math.lerp( this.element.scrollTop, this.element.animationOverrides.animPosY, 0.3 );
            this.element.scrollLeft = Math.lerp( this.element.scrollLeft, this.element.animationOverrides.animPosX, 0.3 );
            this.element.animationOverrides.animFrame = requestAnimationFrame( WheelAnimationOverride.frame.bind( this ) );
        }
    };
    WheelAnimationOverride.override();
})();
