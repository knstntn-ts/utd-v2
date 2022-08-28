import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, listID, onClicked, onUnclicked) {
  useEffect(() => {
    /**
     * Do something when element is clicked on or clicked away from
     */
    function handleClickOutside(event) {
      if (ref.current && ref.current.contains(event.target)) {
        // console.log("Clicked on the element " + ref.current.getAttribute("id"))
        onClicked(listID)
      }
      else if (ref.current && !ref.current.contains(event.target)) {
        // console.log("Clicked outside of the element " + ref.current.getAttribute("id"))
        onUnclicked(listID)
      }

    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function ClickAwayListener(props) {
  const wrapperRef = useRef(null);
  // substr(146) method passes the id of the parent, excluding the "clicklistener-" part
  useOutsideAlerter(wrapperRef, props.clickID.substr(14), props.whenClicked, props.whenUnClicked);
  return <div ref={wrapperRef} id={props.clickID}>{props.children}</div>;
}

ClickAwayListener.propTypes = {
  children: PropTypes.element.isRequired
};

export default ClickAwayListener;