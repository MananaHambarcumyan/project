function createRegistrationLayout() {
  const container = UI.createElement("div", { class: "container-root" }, [
    UI.createElement("header", { class: "header" }, [
      UI.createElement("a", { href: "index.html" }, "Log In"),
      UI.createElement("a", { href: "index.html" }, "Sign Up")
    ]),
    UI.createElement("form", { class: "form-wrapper" },
      UI.createElement('div', { class: "form-container" }, [
        UI.createElement("input", { placeholder: "First Name" }),
        UI.createElement("input", { placeholder: "Last Name" }),
        UI.createElement("select", { class: "select-box" }, [
          UI.createElement("option", { value: "City" }, "City"),
        ]),
        UI.createElement("div", { class: "gender-group" }, [
          UI.createElement("input", { type: "radio", id: "male", name: "gender", value: "Male" }),
          UI.createElement("label", { for: "male" }, "Male"),
          UI.createElement("input", { type: "radio", id: "female", name: "gender", value: "Female" }),
          UI.createElement("label", { for: "female" }, "Female")
        ]),
        UI.createElement("div", { class: "form-footer" }, [
          UI.createElement("div", { class: "email-group" }, [
            UI.createElement("input", { id: "send-email", type: "checkbox" }),
            UI.createElement("label", { for: "send-email" }, "Send me Email"),
          ]),
          UI.createElement("button", { type: "submit" }, "Submit")
        ])
      ])
    ),
  ]);

  UI.render(container, document.body);
}

createRegistrationLayout();
