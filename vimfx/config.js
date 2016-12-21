vimfx.addCommand({
    name: 'rp_menu',
    description: 'RequestPolicy',
}, ({vim}) => {
    vim.window.rpcontinued.overlay.openMenuAtToolbarButton()
})

vimfx.addCommand({
    name: 'noscript_menu',
    description: 'NoScript',
}, ({vim}) => {
    vim.window.noscriptOverlay.showUI()
})

vimfx.set('custom.mode.normal.rp_menu', ',')
vimfx.set('custom.mode.normal.noscript_menu', '.')
