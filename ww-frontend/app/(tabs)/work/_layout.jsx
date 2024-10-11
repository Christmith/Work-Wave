import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Header from "../../components/common/Header";

const PayLayout = () => {
  const headerOptions = Header();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerRight: headerOptions.headerRight,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold",
          fontFamily: "sans-serif-condensed",
          color: "#3498DB",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Work",
        }}
      />
      <Stack.Screen
        name="sheduledashboard"
        options={{

          title: "Dashboard",
        }}/>

          title: "Worker Dashboard",
        }}
      />


      <Stack.Screen
        name="availabledays"
        options={{
          title: "Available Days",
        }}
      />
      <Stack.Screen
        name="sheduledworks"
        options={{
          title: "Scheduled Works",
        }}
      />
      <Stack.Screen
        name="shedulecancel"
        options={{
          title: "Re-Scheduled Works",
        }}
      />
      <Stack.Screen
        name="earnedpoints"
        options={{

          title: "Customer Ratings",
          }}

          title: "Earned Points",
        }}
      />
      <Stack.Screen
        name="availableWorks"
        options={{
          title: "Available Works",
        }}
      />
      <Stack.Screen
        name="workDetails/[workId]"
        options={{
          title: "Work Details",
        }}

      />
    </Stack>
  );
};

export default PayLayout;

const styles = StyleSheet.create({});
