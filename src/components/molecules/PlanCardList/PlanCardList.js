import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlanCard from '@components/molecules/PlanCard'
import styles from './PlanCardList.scss'
// import Grid from '@vfuk/components/components/utilities/Grid'
// import GridRow from '@vfuk/components/components/utilities/GridRow/GridRow'
// import GridColumn from '@vfuk/components/components/utilities/GridColumn/GridColumn'

class PlanCardList extends Component {
  renderPlanCards () {
    const { plans } = this.props
    const cleanPlans = plans.map(({skuId, bundleType, priceInfo = {}, allowance = []}) => ({
      skuId,
      title: bundleType || 'Bundle',
      monthlyPrice: priceInfo.monthlyPrice ? priceInfo.monthlyPrice.gross : undefined,
      data: (allowance.find(({type = ''}) => type && type.toLowerCase() === 'data') || {}).value + (allowance.find(({type = ''}) => type && type.toLowerCase() === 'data') || {}).uom,
      minutes: (allowance.find(({type = ''}) => type && type.toLowerCase() === 'min') || {}).value ,
      texts: (allowance.find(({type = ''}) => type && type.toLowerCase() === 'text') || {}).value
    }))

    return cleanPlans.map((plan, index) => <PlanCard key={`${index}-${plan.skuId}`} {...plan} margin='vertical' />)
  }

  render () {
    return (
      <div className={styles.list}>
        {this.renderPlanCards()}
      </div>
    )
  }
}

PlanCardList.propTypes = {
  data: PropTypes.array
}

PlanCardList.defaultProps = {

}

export default PlanCardList
