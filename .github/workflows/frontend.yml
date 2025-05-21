name: Artifact Upload Test

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Create file
        run: |
          mkdir -p out && echo "Hello" > out/test.txt
      - name: Upload
        uses: actions/upload-artifact@v3
        with:
          name: test-artifact
          path: out/test.txt
