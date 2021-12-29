/* eslint-disable no-undef */
const PageHeader = {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    breadcrumbs: {
      type: Array,
      default: () => [],
      required: false
    }
  },
  render () {
    const { title, breadcrumbs } = this
    const renderBreadcrumbs = () => {
      if (!breadcrumbs || breadcrumbs.length === 0) {
        return null
      } else {
        return (
          <a-breadcrumbs>
            {
              breadcrumbs.map((breadcrumb) => {
                return (
                  <a-breadcrumb-item>
                    { breadcrumb.label }
                  </a-breadcrumb-item>
                )
              })
            }
          </a-breadcrumbs>
        )
      }
    }
    return (
      <div class="sun-paper_page-header">
        {renderBreadcrumbs()}
        {title ? <h3>{title}</h3> : null}
        {$slots.default}
      </div>
    )
  }
}
export default PageHeader
