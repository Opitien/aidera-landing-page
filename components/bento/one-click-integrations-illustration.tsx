import type React from "react"

interface OneClickIntegrationsIllustrationProps {
  className?: string
}

const OneClickIntegrationsIllustration: React.FC<OneClickIntegrationsIllustrationProps> = ({ className = "" }) => {
  const themeVars = {
    "--oci-primary-color": "hsl(var(--primary))",
    "--oci-background-color": "hsl(var(--background))",
    "--oci-foreground-color": "hsl(var(--foreground))",
    "--oci-muted-foreground-color": "hsl(var(--muted-foreground))",
    "--oci-border-color": "hsl(var(--border))",
    "--oci-shadow-color": "rgba(0, 0, 0, 0.12)",
    "--oci-gradient-light-gray-start": "hsl(var(--foreground) / 0.2)",
    "--oci-gradient-light-gray-end": "transparent",
  } as React.CSSProperties

  // Helper component for rendering each logo box
  const LogoBox: React.FC<{
    logoSvg?: React.ReactNode
    isGradientBg?: boolean
  }> = ({ logoSvg, isGradientBg }) => {
    const boxStyle: React.CSSProperties = {
      width: "60px",
      height: "60px",
      position: "relative",
      borderRadius: "9px",
      border: `1px ${themeVars["--oci-border-color"]} solid`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      flexShrink: 0,
    }

    const innerContentStyle: React.CSSProperties = {
      width: "36px",
      height: "36px",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }

    if (isGradientBg) {
      boxStyle.background = `linear-gradient(180deg, ${themeVars["--oci-gradient-light-gray-start"]} 0%, ${themeVars["--oci-gradient-light-gray-end"]} 100%)`
      boxStyle.boxShadow = `0px 1px 2px ${themeVars["--oci-shadow-color"]}`
      boxStyle.backdropFilter = "blur(18px)"
      boxStyle.padding = "6px 8px"
    }

    return <div style={boxStyle}>{logoSvg && <div style={innerContentStyle}>{logoSvg}</div>}</div>
  }

  const HeartIcon = (
    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 32.1113C18 32.1113 3 24.1113 3 13.1113C3 10.2848 4.12321 7.57394 6.13604 5.56111C8.14887 3.54828 10.8598 2.42507 13.6863 2.42507C15.6863 2.42507 17.4863 3.12507 18.8863 4.32507C19.5863 4.92507 20.1863 5.62507 20.6863 6.42507C21.1863 5.62507 21.7863 4.92507 22.4863 4.32507C23.8863 3.12507 25.6863 2.42507 27.6863 2.42507C30.5128 2.42507 33.2237 3.54828 35.2365 5.56111C37.2494 7.57394 38.3726 10.2848 38.3726 13.1113C38.3726 24.1113 18 32.1113 18 32.1113Z"
        fill="var(--oci-primary-color)"
        stroke="var(--oci-primary-color)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )

  const StethoscopeIcon = (
    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 4.11133V14.1113C8 18.5296 11.582 22.1113 16 22.1113C20.418 22.1113 24 18.5296 24 14.1113V4.11133M8 4.11133C8 2.00676 9.79086 0.111328 12 0.111328C14.2091 0.111328 16 2.00676 16 4.11133M8 4.11133C8 6.2159 9.79086 8.11133 12 8.11133C14.2091 8.11133 16 6.2159 16 4.11133M24 4.11133C24 2.00676 25.7909 0.111328 28 0.111328C30.2091 0.111328 32 2.00676 32 4.11133M24 4.11133C24 6.2159 25.7909 8.11133 28 8.11133C30.2091 8.11133 32 6.2159 32 4.11133M24 4.11133V14.1113M16 22.1113V28.1113C16 30.3204 17.7909 32.1113 20 32.1113H26M30 28.1113C30 30.3204 28.2091 32.1113 26 32.1113M30 28.1113C30 25.9022 28.2091 24.1113 26 24.1113M30 28.1113C30 25.9022 31.7909 24.1113 34 24.1113C36.2091 24.1113 38 25.9022 38 28.1113C38 30.3204 36.2091 32.1113 34 32.1113C31.7909 32.1113 30 30.3204 30 28.1113Z"
        stroke="var(--oci-primary-color)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )

  const PillIcon = (
    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 18.1113L25.4558 10.6555C27.4687 8.64258 30.7313 8.64258 32.7442 10.6555C34.7571 12.6684 34.7571 15.931 32.7442 17.9439L25.2884 25.3997C23.2755 27.4126 20.0129 27.4126 18 25.3997L10.5442 17.9439C8.53129 15.931 8.53129 12.6684 10.5442 10.6555C12.5571 8.64258 15.8197 8.64258 17.8326 10.6555L18 18.1113Z"
        fill="var(--oci-primary-color)"
      />
      <path
        d="M18 18.1113L10.5442 25.5671C8.53129 27.58 8.53129 30.8426 10.5442 32.8555C12.5571 34.8684 15.8197 34.8684 17.8326 32.8555L25.2884 25.3997C27.3013 23.3868 27.3013 20.1242 25.2884 18.1113L18 18.1113Z"
        fill="var(--oci-primary-color)"
        opacity="0.6"
      />
    </svg>
  )

  const ChartIcon = (
    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 32.1113H32M8 28.1113V20.1113M14 28.1113V16.1113M20 28.1113V12.1113M26 28.1113V8.11133M32 28.1113V4.11133"
        stroke="var(--oci-primary-color)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="20.1113" r="2" fill="var(--oci-primary-color)" />
      <circle cx="14" cy="16.1113" r="2" fill="var(--oci-primary-color)" />
      <circle cx="20" cy="12.1113" r="2" fill="var(--oci-primary-color)" />
      <circle cx="26" cy="8.11133" r="2" fill="var(--oci-primary-color)" />
      <circle cx="32" cy="4.11133" r="2" fill="var(--oci-primary-color)" />
    </svg>
  )

  const ShieldIcon = (
    <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 2.11133L6 8.11133V16.1113C6 24.9473 11.64 32.7113 18 34.1113C24.36 32.7113 30 24.9473 30 16.1113V8.11133L18 2.11133Z"
        fill="var(--oci-primary-color)"
        stroke="var(--oci-primary-color)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 18.1113L16 22.1113L24 14.1113"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  // Define the grid items with their respective logos and properties
  const gridItems = Array(40)
    .fill(null)
    .map((_, i) => {
      const item: { logoSvg?: React.ReactNode; isGradientBg?: boolean } = {}
      const row = Math.floor(i / 10)
      const col = i % 10

      // Assign medical icons to specific positions
      if (row === 0 && col === 3) {
        item.logoSvg = HeartIcon
        item.isGradientBg = true
      } else if (row === 1 && col === 5) {
        item.logoSvg = StethoscopeIcon
        item.isGradientBg = true
      } else if (row === 2 && col === 3) {
        item.logoSvg = PillIcon
        item.isGradientBg = true
      } else if (row === 2 && col === 7) {
        item.logoSvg = ChartIcon
        item.isGradientBg = true
      } else if (row === 3 && col === 5) {
        item.logoSvg = ShieldIcon
        item.isGradientBg = true
      }
      return item
    })

  return (
    <div
      className={`w-full h-full relative ${className}`}
      style={{
        ...themeVars,
      }}
      role="img"
      aria-label="Health data integrations illustration showing medical icons in a connected grid"
    >
      {/* Background radial gradient */}
      <div
        style={{
          width: "377.33px",
          height: "278.08px",
          left: "0px",
          top: "24px",
          position: "absolute",
          background: `radial-gradient(ellipse 103.87% 77.04% at 52.56% -1.80%, 
            ${themeVars["--oci-foreground-color"]}00 0%, 
            ${themeVars["--oci-foreground-color"]}F5 15%, 
            ${themeVars["--oci-foreground-color"]}66 49%, 
            ${themeVars["--oci-foreground-color"]}F5 87%, 
            ${themeVars["--oci-foreground-color"]}00 100%)`,
        }}
      />

      {/* Main content container with backdrop blur */}
      <div
        style={{
          width: "377px",
          height: "265px",
          left: "0.34px",
          top: "43.42px",
          position: "absolute",
          backdropFilter: "blur(7.91px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {/* Render rows of logo boxes */}
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: "16px" }}
          >
            {gridItems.slice(rowIndex * 10, (rowIndex + 1) * 10).map((item, colIndex) => (
              <LogoBox key={colIndex} {...item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default OneClickIntegrationsIllustration
