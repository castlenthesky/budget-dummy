<template>
  <v-container>
    <v-card>
      <v-card-title>
        Crafting Components
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        dense
        multi-sort
        single-line:sort-desc="[false, true]"
        :headers="headers"
        :items="materials"
        :search="search"
        item-key="name"
        hide-details
        class="elevation-1"
      >
        <template v-slot:body.append>
          <tr>
            <td>
              <v-text-field
                v-model="name"
                type="text"
                label="Name"
              ></v-text-field>
            </td>
            <td>
              <v-text-field
                v-model="category"
                type="text"
                label="Category"
              ></v-text-field>
            </td>
            <td>
              <v-text-field
                v-model="rarity"
                type="text"
                label="Rarity"
              ></v-text-field>
            </td>
            <td>
              <v-text-field
                v-model="description"
                type="text"
                label="Description"
              ></v-text-field>
            </td>
            <td>
              <v-text-field
                v-model="lootLocation"
                type="text"
                label="Found In"
              ></v-text-field>
            </td>
            <td>
              <v-text-field
                v-model="value"
                type="text"
                label="Value (gp)"
              ></v-text-field>
            </td>
            <td>
              <v-btn color="primary" dark class="mb-2" v-on="addItem">
                New Item
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Component Name",
          align: "start",
          filterable: true,
          value: "name",
        },
        {
          text: "Category",
          value: "category",
        },
        { text: "Rarity", value: "rarity" },
        { text: "Description", value: "description" },
        { text: "Found In", value: "lootLocation" },
        { text: "Value", value: "value" },
        {
          text: "Options",
          filterable: false,
          sortable: false,
          value: "options",
        },
      ],
      materials: [
        {
          name: "Clay",
          category: "Mineral",
          rarity: "Common",
          description:
            "Sediment and dirt which is uniquly suited for creating pottery and ceramic.",
          lootLocation: "Wetlands, Hills",
          value: "1 cp",
        },
        {
          name: "Ruby",
          category: "Mineral",
          rarity: "Uncommon",
          description: "... it's a red gem...",
          lootLocation: "Mountains",
          value: "8 sp",
        },
        {
          name: "Thisslewastle",
          category: "Herb",
          rarity: "Common",
          description: "A neon brown flower known to promote healing.",
          lootLocation: "Fields, Hills, Forests",
          value: "8 sp",
        },
        {
          name: "Yarrow",
          category: "Herb",
          rarity: "Common",
          description: "A spiney grass often used to fight infection.",
          lootLocation: "Fields, Hills, Forests",
          value: "8 sp",
        },
        {
          name: "Saunder Berry",
          category: "Herb",
          rarity: "Common",
          description:
            "This berry can dull the senses and even cause hallucinations.",
          lootLocation: "Grasslands, Forests, Jungle",
          value: "6 sp",
        },
        {
          name: "Almak Bark",
          category: "Herb",
          rarity: "Common",
          description:
            "The bark of the Almak tree can be brewed into a tea which serves as a mild laxitive.",
          lootLocation: "Forests, Jungle",
          value: "6 sp",
        },
        {
          name: "Dutara Root",
          category: "Herb",
          rarity: "Common",
          description: "A pink root that heightens the senses.",
          lootLocation: "Grasslands, Forests",
          value: "5 sp",
        },
      ],
    };
  },
  methods: {
    addItem: () => {
      return true;
    },
  },
};
</script>

<style></style>
