# Page snapshot

```yaml
- generic [ref=e2]:
  - status "oval-loading" [ref=e6]:
    - img [ref=e7]
  - main [ref=e14]:
    - generic [ref=e18]:
      - generic [ref=e19]:
        - heading "CMS/Admin" [level=6] [ref=e20]
        - heading "Login" [level=3] [ref=e21]
      - generic [ref=e23]:
        - generic [ref=e24]:
          - generic [ref=e26]: User Id
          - textbox "User Id" [disabled] [ref=e28]: Test123
        - generic [ref=e29]:
          - generic [ref=e31]: Password
          - generic [ref=e32]:
            - textbox "Password" [disabled] [ref=e33]: Test123
            - generic [ref=e34]: 
        - generic [ref=e35]:
          - link "Forgot Password?" [ref=e37] [cursor=pointer]:
            - /url: ""
          - generic [ref=e38]:
            - button "Login" [disabled]
```