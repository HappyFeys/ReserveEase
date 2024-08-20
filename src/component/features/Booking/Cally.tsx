import {
    useEffect,
    useRef,
    ReactNode,
    forwardRef,
    useImperativeHandle,
    type RefObject,
    type PropsWithChildren,
  } from "react";
  
  import "cally";
  import type {
    CalendarRangeProps,
    CalendarMonthProps,
    CalendarDateProps,
  } from "cally";
  
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        "calendar-month": unknown;
        "calendar-range": unknown;
        "calendar-date": unknown;
      }
    }
  }
  
  function useListener(
    ref: RefObject<HTMLElement>,
    event: string,
    listener?: (e: Event) => void
  ) {
    useEffect(() => {
      const current = ref.current;
  
      if (current && listener) {
        current.addEventListener(event, listener);
        return () => current.removeEventListener(event, listener);
      }
    }, [ref, event, listener]);
  }
  
  function useProperty(ref: RefObject<HTMLElement>, prop: string, value?: any) {
    useEffect(() => {
      if (ref.current) {
        // @ts-expect-error - TS doesn't know that `prop` is a key
        ref.current[prop] = value;
      }
    }, [ref, prop, value]);
  }
  
  export const CalendarMonth = forwardRef(function CalendarMonth(
    props: CalendarMonthProps,
    forwardedRef
  ) {
    return <calendar-month offset={props.offset} ref={forwardedRef} />;
  });
  
  export const CalendarRange = forwardRef(function CalendarRange(
    {
      onChange,
      showOutsideDays,
      firstDayOfWeek,
      isDateDisallowed,
      ...props
    }: PropsWithChildren<CalendarRangeProps>,
    forwardedRef
  ) {
    const ref = useRef<HTMLElement>(null);
    useImperativeHandle(forwardedRef, () => ref.current, []);
    useListener(ref, "change", onChange);
    useProperty(ref, "isDateDisallowed", isDateDisallowed);
  
    return (
      <calendar-range
        ref={ref}
        show-outside-days={showOutsideDays || undefined}
        first-day-of-week={firstDayOfWeek}
        {...props}
      />
    );
  });
  
  export const CalendarDate = forwardRef(function CalendarDate(
    {
      onChange,
      showOutsideDays,
      firstDayOfWeek,
      isDateDisallowed,
      ...props
    }: PropsWithChildren<CalendarDateProps>,
    forwardedRef
  ) {
    const ref = useRef<HTMLElement>(null);
    useImperativeHandle(forwardedRef, () => ref.current, []);
    useListener(ref, "change", onChange);
    useProperty(ref, "isDateDisallowed", isDateDisallowed);
  
    return (
      <calendar-date
        ref={forwardRef}
        show-outside-days={showOutsideDays ? "" : undefined}
        first-day-of-week={firstDayOfWeek}
        {...props}
      />
    );
  });