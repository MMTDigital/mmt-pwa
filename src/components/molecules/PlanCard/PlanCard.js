import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withSpacingProps from '@vfuk/components/decorators/withSpacingProps'
import BlockContainer from '@web-components/molecules/BlockContainer'
import Button from '@web-components/atoms/Button'
import Sandwich from '@web-components/atoms/Sandwich'
import Heading from '@web-components/atoms/Heading'
import Grid from '@web-components/utilities/Grid'
import GridRow from '@web-components/utilities/GridRow/GridRow'
import GridColumn from '@web-components/utilities/GridColumn/GridColumn'
import styles from './PlanCard.scss'

@withSpacingProps
class PlanCard extends Component {
  renderTextAndMinutes () {
    const { texts, minutes } = this.props
    const minuteJsx = (
      <GridColumn justify='left' sm='2'>
        <Sandwich prefix='Minutes' main={minutes} />
      </GridColumn>
    )

    const textJsx = (
      <GridColumn justify='left' sm='2'>
        <Sandwich prefix='Text' main={texts} />
      </GridColumn>
    )

    if (minutes && texts && minutes === texts) {
      return (
        <GridColumn justify='left' sm='4'>
          <Sandwich prefix='Texts & Minutes' main={minutes} />
        </GridColumn>
      )
    } else if (minutes && texts) {
      return (
        <React.Fragment>
          {textJsx}
          {minuteJsx}
        </React.Fragment>
      )
    } else if (minutes && !texts) {
      return minuteJsx
    } else if (texts && !minutes) {
      return textJsx
    }
  }

  renderData () {
    const { data } = this.props

    return data && (
      <GridColumn justify='left' sm='2'>
        <Sandwich prefix='Data' main={data} />
      </GridColumn>
    )
  }

  renderOneOffCost () {
    const { oneOffCost } = this.props

    return oneOffCost && (
      <GridColumn justify='left' sm='2'>
        <Sandwich prefix='Upfront' main={oneOffCost} />
      </GridColumn>
    )
  }

  renderMonthlyPrice () {
    const { monthlyPrice } = this.props
    
    return monthlyPrice && (
      <GridColumn justify='left' sm='2'>
        <Sandwich prefix='Monthly' main={`£${monthlyPrice}`} />
      </GridColumn>
    )
  }

  render () {
    const { title } = this.props

    return (
      <div className={styles.card}>
        <BlockContainer style='light' borderStyle='shadow'>
          <Grid>
            <GridRow>
              <GridColumn justify='left'>
                <Heading level={3} size={4}>{title}</Heading>
              </GridColumn>
            </GridRow>
            <GridRow>
              {this.renderData()}
              {this.renderTextAndMinutes()}
              {this.renderOneOffCost()}
              {this.renderMonthlyPrice()}
              <GridColumn justify='right'>
                <Button style='overcast' width='auto'>Choose SIM only plan</Button>
              </GridColumn>
            </GridRow>
          </Grid>
        </BlockContainer>
      </div>
    )
  }
}

PlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string,
  texts: PropTypes.string,
  minutes: PropTypes.string,
  oneOffCost: PropTypes.string,
  monthlyPrice: PropTypes.string
}

PlanCard.defaultProps = {
  title: 'Plan'
}

export default PlanCard
