    shadeColor(srcColor, targetColor, point) {
      const colors = []

      srcColor = this.hexToRgb(srcColor)
      targetColor = this.hexToRgb(targetColor)

      const RAmount = Math.round((targetColor.R - srcColor.R) / (point + 1))
      const GAmount = Math.round((targetColor.G - srcColor.G) / (point + 1))
      const BAmount = Math.round((targetColor.B - srcColor.B) / (point + 1))

      for (let i = 0; i < point; i++) {
        srcColor.R += RAmount
        srcColor.G += GAmount
        srcColor.B += BAmount

        colors.push(this.rgbToHex(srcColor.R, srcColor.G, srcColor.B))
      }

      this.colors = colors
    },

    rgbToHex(r, g, b) {
      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    },

    hexToRgb(hexColor) {
      const R = parseInt(hexColor.substring(1, 3), 16)
      const G = parseInt(hexColor.substring(3, 5), 16)
      const B = parseInt(hexColor.substring(5, 7), 16)

      return {
        R,
        G,
        B,
      }
    },
