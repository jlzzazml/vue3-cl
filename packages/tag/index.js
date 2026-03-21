import ClTag from './tag.vue'

ClTag.install = (app) => {
    app.component(ClTag.name, ClTag)
}

export default ClTag
export { ClTag }