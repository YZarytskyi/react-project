import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../HOC/withAuthRedirect";
import Dialogs from "./Dialogs";

const mapStateToPropsForRedirect = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  connect(mapStateToPropsForRedirect, mapDispatchToProps),
  withAuthRedirect)(Dialogs);
