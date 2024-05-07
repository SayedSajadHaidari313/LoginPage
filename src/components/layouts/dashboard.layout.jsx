import { Fragment } from "react";
import PropTypes from "prop-types";

export function DashboardLayout({ children }) {
  return (
    <Fragment>
      <h1>Dashborad Layout</h1>
      {children}
      <h1>End Dashboard Layout</h1>
    </Fragment>
  );
}
DashboardLayout.propTypes = {
  children: PropTypes.any,
};

