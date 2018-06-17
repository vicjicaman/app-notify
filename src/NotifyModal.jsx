import React from 'react';
import {compose, withStateHandlers, lifecycle} from 'recompose';
import {toast} from 'react-toastify';

const HOC = ({}) => BaseComponent => compose(
/**/
withStateHandlers(({}) => ({open: false, toastId: null}),
/**/
{
  contentNotifyModal: (current) => ({content}) => {
    const {toastId, open} = current;
    if (open) {
      toast.update(toastId, {
        render: content,
        autoClose: false
      });
    }

    return current;
  },
  openNotifyModal: (current) => () => {
    const {toastId, open} = current;
    if (!open) {
      const tid = toast("...", {autoClose: false})
      return {toastId: tid, open: true}
    }

    return current;
  },
  closeNotifyModal: (current) => () => {
    const {toastId, open} = current;
    if (open) {
      toast.dismiss(toastId);
      return {open: false, toastId: null}
    }
    return current
  }
}),
/**/
lifecycle({
  /**/
  componentDidUpdate: function(prevProps) {},
  /**/
  componentDidMount: function(prev) {}
})
/***/)((props) => {
  return (<BaseComponent { ...props }/>);
});

export {
  HOC as NotifyModal
};
