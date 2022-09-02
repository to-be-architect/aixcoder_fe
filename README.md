# aiXcoder

http://localhost:6888/aixcode

## 快速开始

```
// 初始化项目
npm install

// 开发模式
npm run dev

// 构建
npm run build
```

UI 组件库：

https://arco.design/react/components/button

## 代码生成实例

输入：

```go
type TreeNode struct{
    value int64
    left *TreeNode
    right *TreeNode
}
func RecursiveVisitTreeNode(root *TreeNode, vistor func(int64)) error
```

输出： 其中，最佳 Code 如下：

```go

// aiXCoder Output 5:
type TreeNode struct{
    value int64
    left *TreeNode
    right *TreeNode
}
func RecursiveVisitTreeNode(root *TreeNode, vistor func(int64)) error  {
    if root == nil {
        return nil
    }
    if root.value == 0 {
        return nil
    }
    vistor(root.value)
    if root.left!= nil {
        RecursiveVisitTreeNode(root.left, vistor)
    }
    if root.right!= nil {
        return vistor(root.value) // 只需要这里微调一下，基本就能满足常规的需求了。
        // RecursiveVisitTreeNode(root.right, vistor) // 改成这样
    }
    return nil
}

```

附：完整的 5 个候选 Code：

```go
// aiXCoder Output 1:
type TreeNode struct{
    value int64
    left *TreeNode
    right *TreeNode
}
func RecursiveVisitTreeNode(root *TreeNode, vistor func(int64)) error  {
    if root == nil {
        return nil
    }
    if root.left!= nil {
        if err := RecursiveVisitTreeNode(root.left, vistor); err!= nil {
            return err
        }
    }
    if root.right!= nil {
        if err := RecursiveVisitTreeNode(root.right, vistor); err!= nil {
            return err
        }
    }
    return nil
}

func main() {
    root := &TreeNode{value: 1}
    err := RecursiveVisitTreeNode(root, func(v int64) error {
        fmt.Println(v)
        return nil
    })
    if err!= nil {
        fmt.Println(err)
    } else {
        fmt.Println(root.value)
    }
}


// aiXCoder Output 2:
type TreeNode struct{
    value int64
    left *TreeNode
    right *TreeNode
}
func RecursiveVisitTreeNode(root *TreeNode, vistor func(int64)) error  {
    if root == nil {
        return nil
    }
    if root.left == nil {
        return nil
    }
    if root.value == 0 {
        return nil
    }
    if root.value < vistor(root.value) {
        return nil
    }
    if root.left!= nil {
        return RecursiveVisitTreeNode(root.left, vistor)
    }
    return nil
}

func main() {
    root, _ := TreeNode{1, nil, nil}, TreeNode{1, nil, nil}
    fmt.Println(RecursiveVisitTreeNode(&root, func(i int64) {
        fmt.Println(i)
    }))
}


// aiXCoder Output 3:
type TreeNode struct{
    value int64
    left *TreeNode
    right *TreeNode
}
func RecursiveVisitTreeNode(root *TreeNode, vistor func(int64)) error  {
    if root == nil {
        return nil
    }
    if root.value == 0 {
        return nil
    }
    return vistor(root.value)
}

func main() {
    root := &TreeNode{value: 1}
    root.left = &TreeNode{value: 2}
    root.right = &TreeNode{value: 3}
    err := RecursiveVisitTreeNode(root, func(i int64) error {
        return nil
    })
    if err!= nil {
        panic(err)
    }
    fmt.Println(root)
}


// aiXCoder Output 4:
type TreeNode struct{
    value int64
    left *TreeNode
    right *TreeNode
}
func RecursiveVisitTreeNode(root *TreeNode, vistor func(int64)) error  {
    if root == nil {
        return nil
    }
    if root.left == nil {
        return nil
    }
    if root.left.left == nil {
        return nil
    }
    if root.left.left.left == nil {
        return nil
    }
    return vistor(root.value)
}

func main() {
    root := &TreeNode{value: -1}
    root.left = &TreeNode{value: 1}
    root.right = &TreeNode{value: 2}
    root.left.left = &TreeNode{value: 3}
    root.left.left.left = &TreeNode{value: 4}
    root.left.left.left.left = &TreeNode{value: 5}
    root.left.left.left.left.left = &TreeNode{value: 6}
    root.left.left.left.left.left.left = &TreeNode{value: 7}
    root.left.left.left.left.left.left.left = &TreeNode{value: 8}
    root.left.left.left.left.left.left.left.left = &TreeNode{value: 9}
    root.left.left.left.left.left.left.left.left.left = &TreeNode{value: 10}
    root.left.left.left.left.left.left.left.left.left.left = &TreeNode{value: 11}
    root.left.left.left.left.left.left.left.left.left.left.left = &TreeNode{value: 12}
    root.left.left.left.left.left.left.left.left.left.left.left.left = &TreeNode{value: 13}
    root.left.left.left.left.left.left.left.left.left.left.left.left.left = &TreeNode{value: 14}
    root.left.left.left.left.left.left.left.left.left.left.left.left.left.left = &TreeNode{value: 15}
    root.left.left.left.left.left.left.left.left.left.left.left.left.left.left.left = &TreeNode{value: 16}
    root.left.left.left.left.left.left.left.left.left.left.left.left.left.left.left = &TreeNode{value: 17}
    root.left.left.left.left.left.left.left.left.left.left.left.left.left.left.left.left = &TreeNode{value: 18}
    root.left.left.left.left.left.left.left.left.

// aiXCoder Output 5:
type TreeNode struct{
    value int64
    left *TreeNode
    right *TreeNode
}
func RecursiveVisitTreeNode(root *TreeNode, vistor func(int64)) error  {
    if root == nil {
        return nil
    }
    if root.value == 0 {
        return nil
    }
    vistor(root.value)
    if root.left!= nil {
        RecursiveVisitTreeNode(root.left, vistor)
    }
    if root.right!= nil {
        return vistor(root.value)
    }
    return nil
}

```

## --allow-unrelated-histories

```shell
git pull o main --allow-unrelated-histories
```
