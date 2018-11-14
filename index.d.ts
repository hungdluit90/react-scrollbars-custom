import {Component, CSSProperties, SFC} from "react";

export interface ScrollValues {
    clientHeight?: number;
    clientWidth?: number;
    scrollHeight?: number;
    scrollWidth?: number;
    scrollTop?: number;
    scrollLeft?: number;
    scrollYBlocked?: boolean;
    scrollXBlocked?: boolean;
    scrollYPossible?: boolean;
    scrollXPossible?: boolean;
    trackYVisible?: boolean;
    trackXVisible?: boolean;
    isRtl?: boolean;
}

export enum TrackClickBehaviorPossibilities {
    Jump = "jump",
    Step = "step",
}

export interface ScrollbarProps {
    native?: boolean;

    minimalThumbsSize?: number;

    fallbackScrollbarWidth?: number;

    tagName?: string;
    className?: string;
    style?: CSSProperties;

    trackClickBehavior?: TrackClickBehaviorPossibilities;

    rtl?: boolean;

    momentum?: boolean;

    noDefaultStyles?: boolean;

    scrollDetectionThreshold?: number;

    translateContentSizesToHolder?: boolean;

    noScrollX?: boolean;
    noScrollY?: boolean;
    noScroll?: boolean;

    removeTracksWhenNotUsed?: boolean;
    removeTrackYWhenNotUsed?: boolean;
    removeTrackXWhenNotUsed?: boolean;

    permanentTrackX?: boolean;
    permanentTrackY?: boolean;
    permanentTracks?: boolean;

    wrapperProps?: object;
    contentProps?: object;
    trackXProps?: object;
    trackYProps?: object;
    thumbXProps?: object;
    thumbYProps?: object;

    wrapperRenderer?: SFC;
    contentRenderer?: SFC;
    trackXRenderer?: SFC;
    trackYRenderer?: SFC;
    thumbXRenderer?: SFC;
    thumbYRenderer?: SFC;

    onScroll?(current: ScrollValues, instance: Scrollbar): void;

    onScrollStart?(current: ScrollValues, instance: Scrollbar): void;

    onScrollStop?(current: ScrollValues, instance: Scrollbar): void;
}

declare class Scrollbar extends Component<ScrollbarProps> {
    public scrollTop: number;
    public scrollLeft: number;
    public readonly scrollHeight: number;
    public readonly scrollWidth: number;
    public readonly clientHeight: number;
    public readonly clientWidth: number;

    public scrollToTop(): Scrollbar;

    public scrollToBottom(): Scrollbar;

    public scrollToLeft(): Scrollbar;

    public scrollToRight(): Scrollbar;

    /**
     * Return the scroll values actual for the last update.
     *
     * @param force If true - method will return actual values, but it will cause layout reflow.
     */
    public getScrollValues(force?: boolean): ScrollValues;

    /**
     * Actualizes scroll values and scrollbars.
     *
     * @param force If true - will perform update even if nothing has changed (can cause re-rendering).
     */
    public update(force?: boolean): ScrollValues

    /**
     * Compute the thumb size
     */
    public static computeThumbSize(trackSize: number, scrollableSize: number, viewportSize: number, minimalSize: number): number

    /**
     * Compute the thumb offset from scroll value
     */
    public static computeThumbOffset(trackSize: number, thumbSize: number, scrollableSize: number, viewportSize: number, scrollValue: number): number

    /**
     * Compute the scroll value depending on thumb offset
     */
    public static computeScrollForOffset(trackSize: number, thumbSize: number, offset: number, scrollableSize: number, viewportSize: number): number
}

export default Scrollbar;
