import React, { FC } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'


export const Header = ({
  style,
  Components,
  paginationSelectedColor,
  paginationColor,
  currentPage,
  goToNextPage,
  pages,
  ...props
}) => {
  const totalPages = pages?.length ?? 0
  console.log('using default header')

  return (
    <View style={[style]} {...props}>
      <Components.PaginationComponent
        paginationColor={paginationColor}
        paginationSelectedColor={paginationSelectedColor}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </View>
  )
}

const styles = StyleSheet.create({})