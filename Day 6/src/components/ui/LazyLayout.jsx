import React, { Suspense } from 'react'
import PropTypes from "prop-types";

const LazyLayout = ({component: Component, ...rest}) => {
  return (
    <Suspense fallback="Loading...">
        <Component {...rest} />
    </Suspense>
  )
}
LazyLayout.propTypes = {
    component:PropTypes.elementType.isRequired   //coz is use element like p tag,img ,loaderetc
}
export default LazyLayout