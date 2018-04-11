export const conditions = {
  "Digital Outputs": {
    checks: {
      "Equal To": {
        input: "select",
        options: ["High", "Low"]
      }
    },
    checksOptions: ["Equal To"]
  },
  "Digital Inputs": {
    checks: {
      "Equal To": {
        input: "select",
        options: ["Pressed", "Released", "Held Down", "Held Up"]
      }
    },
    checksOptions: ["Equal To"]
  },
  "Analog Inputs": {
    checks: {
      "Greater Than": {
        input: "number"
      },
      "Less Than": {
        input: "number"
      },
      "Equal To": {
        input: "number"
      }
    },
    checksOptions: ["Greater Than", "Less Than", "Equal To"]
  },
  Timers: {
    checks: {
      "Greater Than": {
        input: "timer"
      },

      "Less Than": {
        input: "timer"
      },

      "Equal To": {
        input: "timer"
      },
      "Get State": {
        input: "select",
        options: ["Running", "Paused", "Stopped"]
      }
    },
    checksOptions: ["Greater Than", "Less Than", "Equal To", "Get State"]
  },
  Counters: {
    checks: {
      "Greater Than": {
        input: "number"
      },

      "Less Than": {
        input: "number"
      },

      "Equal To": {
        input: "number"
      }
    },
    checksOptions: ["Greater Than", "Less Than", "Equal To"]
  }
};
