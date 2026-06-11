// styles.ts
import { Platform, StyleSheet } from "react-native";

export const theme = {
  name: "Fresh Utility",

  colors: {
    surface: "#f3fbf5",
    surfaceDim: "#d4dcd6",
    surfaceBright: "#f3fbf5",

    surfaceContainerLowest: "#ffffff",
    surfaceContainerLow: "#edf6ef",
    surfaceContainer: "#e8f0ea",
    surfaceContainerHigh: "#e2eae4",
    surfaceContainerHighest: "#dce5de",

    onSurface: "#191c1a",
    onSurfaceVariant: "#3b4a43",

    inverseSurface: "#2a322e",
    inverseOnSurface: "#eaf3ed",

    outline: "#6b7b73",
    outlineVariant: "#bacac1",

    surfaceTint: "#006c51",

    primary: "#006c51",
    onPrimary: "#ffffff",
    primaryContainer: "#00d1a0",
    onPrimaryContainer: "#00543e",
    inversePrimary: "#2ee0ad",

    secondary: "#4e5f7d",
    onSecondary: "#ffffff",
    secondaryContainer: "#cadaff",
    onSecondaryContainer: "#4f5f7e",

    tertiary: "#006496",
    onTertiary: "#ffffff",
    tertiaryContainer: "#71c0fd",
    onTertiaryContainer: "#004d76",

    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad6",
    onErrorContainer: "#93000a",

    background: "#BBFFE2",
    onBackground: "#161d1a",
    surfaceVariant: "#dce5de",

    white: "#ffffff",
    priceAlert: "#f59e0b",
    shadowMint: "rgba(0, 209, 160, 0.1)",

    cardBrandHeaderBg: '#e6faf6',
  },

  fonts: {
    headingRegular: "Sora-Regular",
    headingSemiBold: "Sora-SemiBold",
    headingBold: "Sora-Bold",

    bodyRegular: "HankenGrotesk-Regular",
    bodySemiBold: "HankenGrotesk-SemiBold",
    bodyBold: "HankenGrotesk-Bold",
  },

  typography: {
    displayLg: {
      fontFamily: "Sora-Bold",
      fontSize: 48,
      lineHeight: 56,
      letterSpacing: -0.96,
    },

    headlineLg: {
      fontFamily: "Sora-SemiBold",
      fontSize: 32,
      lineHeight: 40,
      letterSpacing: -0.32,
    },

    headlineLgMobile: {
      fontFamily: "Sora-SemiBold",
      fontSize: 24,
      lineHeight: 32,
    },

    headlineMd: {
      fontFamily: "Sora-SemiBold",
      fontSize: 20,
      lineHeight: 28,
    },

    bodyLg: {
      fontFamily: "HankenGrotesk-Regular",
      fontSize: 18,
      lineHeight: 28,
    },

    bodyMd: {
      fontFamily: "HankenGrotesk-Regular",
      fontSize: 16,
      lineHeight: 24,
    },

    priceDisplay: {
      fontFamily: "Sora-Bold",
      fontSize: 24,
      lineHeight: 0,
    },

    labelCaps: {
      fontFamily: "HankenGrotesk-Bold",
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 0.6,
      textTransform: "uppercase" as const,
    },
  },

  radius: {
    sm: 4,
    default: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },

  spacing: {
    xs: 4,
    base: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 40,
    gutter: 20,
    containerMax: 1280,
  },
} as const;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },

  containerWide: {
    width: "100%",
    maxWidth: theme.spacing.containerMax,
    alignSelf: "center",
    paddingHorizontal: theme.spacing.gutter,
  },

  section: {
    marginBottom: theme.spacing.lg,
  },

  headerSection: {
    marginBottom: theme.spacing.lg,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center'
  },

  sectionHeader: {
    marginBottom: theme.spacing.sm,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5
  },

  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  rowStart: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  column: {
    flexDirection: 'column',
    justifyContent: 'center'
  },

  columnCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  columnRight: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  },

  displayLg: {
    ...theme.typography.displayLg,
    color: theme.colors.onSurface,
  },

  headlineLg: {
    ...theme.typography.headlineLg,
    color: theme.colors.onSurface,
  },

  headlineLgMobile: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.onSurface,
  },

  brandName: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.primary,
  },

  headlineMd: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurface,
  },

  bodyLg: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurfaceVariant,
  },

  bodyMd: {
    ...theme.typography.bodyMd,
    color: theme.colors.onSurfaceVariant,
  },

  labelCaps: {
    ...theme.typography.labelCaps,
    color: theme.colors.onSurfaceVariant,
  },

  priceDisplay: {
    ...theme.typography.priceDisplay,
    color: theme.colors.primary,
  },

  mutedText: {
    color: theme.colors.outline,
  },

  linkText: {
    ...theme.typography.bodyMd,
    color: theme.colors.primary,
    fontFamily: theme.fonts.bodySemiBold,
  },

  card: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
  },

  cardPressed: {
    backgroundColor: theme.colors.surfaceContainerLow,
    borderColor: theme.colors.primaryContainer,
    ...Platform.select({
      ios: {
        shadowColor: theme.colors.primaryContainer,
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
      },
      android: {
        elevation: 2,
      },
    }),
  },

  brandCard: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.radius.default,
    overflow: 'hidden',
    marginBottom: 16,
  },

   brandEmphasisHeader: {
    backgroundColor: theme.colors.cardBrandHeaderBg,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  brandEmphasisHeaderText: {
    color: theme.colors.primary,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 24,
    letterSpacing: 0.05 * 14,
  },

  brandEmphasisBody: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  brandEmphasisInfo: {
    flexDirection: "column",
  },

  brandEmphasisStore: {
    fontWeight: "600",
    color: theme.colors.onSurface,
    fontSize: 20
  },

  brandEmphasisDistance: {
    fontSize: 16,
    color: theme.colors.onSurfaceVariant,
    marginTop: 4,
  },

  brandEmphasisPrice: {
    fontSize: 24,
    fontWeight: "700",
    color: theme.colors.onSurface,
  },

  productCard: {
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.radius.default,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    overflow: "hidden",
  },

  productCardContent: {
    flexDirection: "row",
    gap: theme.spacing.md,
  },

  productImageBox: {
    width: 70,
    height: 70,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.surfaceContainer,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    marginRight: 5,
  },

  productImage: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },

  productInfoCard: {
    backgroundColor: theme.colors.surfaceContainerLow,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    width: '100%',
    flexDirection: 'row',
    gap: 5
  },

  productInfoTitle: {
    fontFamily: theme.fonts.headingRegular,
    fontSize: 20,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.xs,
  },

  productTitle: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurface,
    marginBottom: theme.spacing.xs,
  },

  productSubtitle: {
    ...theme.typography.bodyMd,
    color: theme.colors.onSurfaceVariant,
  },

  productMetaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },

  productPrice: {
    ...theme.typography.priceDisplay,
    color: theme.colors.primary,
    textAlign: "right",
  },

  brandAccent: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: theme.colors.primaryContainer,
  },

  pointCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#91ceff8e',
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    borderColor: theme.colors.tertiaryContainer,
    borderWidth: 1,
    marginBottom: theme.spacing.lg
  },

  button: {
    minHeight: 44,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.default,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  buttonPrimary: {
    backgroundColor: theme.colors.primaryContainer,
  },

  buttonPrimaryText: {
    ...theme.typography.bodyMd,
    fontFamily: theme.fonts.bodyBold,
    color: theme.colors.onPrimaryContainer,
  },

  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },

  buttonSecondaryText: {
    ...theme.typography.bodyMd,
    fontFamily: theme.fonts.bodyBold,
    color: theme.colors.secondary,
  },

  buttonGhost: {
    backgroundColor: "transparent",
  },

  buttonGhostText: {
    ...theme.typography.bodyMd,
    fontFamily: theme.fonts.bodySemiBold,
    color: theme.colors.primary,
  },

  buttonDisabled: {
    opacity: 0.45,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: theme.colors.outlineVariant,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    minHeight: 56,
  },

  inputWrapperFocused: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: theme.colors.primaryContainer,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    minHeight: 56,
  },

  input: {
    flex: 1,
    ...theme.typography.bodyMd,
    color: theme.colors.onSurface,
    paddingVertical: theme.spacing.xs,
  },

  inputIcon: {
    marginRight: theme.spacing.sm,
    color: theme.colors.secondary,
  },

  chip: {
    alignSelf: "flex-start",
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.surfaceContainerHigh,
  },

  chipText: {
    ...theme.typography.labelCaps,
    color: theme.colors.onSurfaceVariant,
  },

  priceAlertChip: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.priceAlert,
  },

  priceAlertChipText: {
    ...theme.typography.labelCaps,
    color: theme.colors.white,
  },

    bestPriceBadge: {
        marginTop: theme.spacing.xs,
        backgroundColor: theme.colors.secondaryContainer,
        paddingHorizontal: theme.spacing.sm,
        paddingVertical: 5,
        borderRadius: theme.radius.sm,
    },

    bestPriceText: {
        fontFamily: theme.fonts.bodyBold,
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.8,
        color: theme.colors.secondary,
        textTransform: "uppercase" as const,
        textAlign: 'right'
    },

  successChip: {
    alignSelf: "flex-start",
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.primaryContainer,
  },

  successChipText: {
    ...theme.typography.labelCaps,
    color: theme.colors.onPrimaryContainer,
  },

  infoChip: {
    alignSelf: "flex-start",
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.tertiaryContainer,
  },

  infoChipText: {
    ...theme.typography.labelCaps,
    color: theme.colors.onTertiaryContainer,
  },

  priceTag: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primaryContainer,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: theme.radius.full,
    borderBottomRightRadius: theme.radius.full,
  },

  priceTagText: {
    fontFamily: theme.fonts.headingBold,
    fontSize: 18,
    lineHeight: 20,
    color: theme.colors.onPrimaryContainer,
  },

  glassNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "rgba(243, 251, 245, 0)",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.outlineVariant,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },

  navTitle: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurface,
  },

  navSubtitle: {
    ...theme.typography.bodyMd,
    color: theme.colors.onSurfaceVariant,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.outlineVariant,
    marginVertical: theme.spacing.md,
  },

  textDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: theme.radius.sm,
    borderWidth: 2,
    borderColor: theme.colors.outline,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxChecked: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },

  compareRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md,
  },

  compareText: {
    ...theme.typography.bodyMd,
    color: theme.colors.onSurfaceVariant,
  },

  listContent: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.lg,
  },

  tightListItem: {
    marginBottom: theme.spacing.md,
  },

  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.xl,
  },

  emptyStateTitle: {
    ...theme.typography.headlineMd,
    color: theme.colors.onSurface,
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },

  emptyStateText: {
    ...theme.typography.bodyMd,
    color: theme.colors.onSurfaceVariant,
    textAlign: "center",
  },
});