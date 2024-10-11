# COMP-3170-Frontend_Web_Development_2-Lab-Week_03

## Q1. 3 things you want to try during this course:

*   [x] Add a **New Tab and New Router Link** for my mobile app
*   [x] Change **Tab Button Icon** for my mobile app
*   [x] Recall **How to Create a New Branch and GIT the Files** to the repository


## Q2. 2 things you learned today:

### 1. Create a New tab, router link and Change the icon
#### Create a new Tab
```js
  <Tabs.Screen
    name="cheese"
    options={{
      title: 'Cheese',
      tabBarIcon: ({ color }) => <FontAwesome size={28} name="table" color={color} />,
    }}
  />
```
Change "name" of the code (It includes popular icon sets you can browse at <a href="https://icons.expo.fyi/Index">icons.expo.fyi</a>.)

```js
<FontAwesome size={28} name="table" color={color} />
```

#### Change to the branch Lesson-03
```
git checkout ＜branchname＞ 
```
OR
#### Change back to Main
```
git checkout main
```


### 2. New Branch - lesson 03
#### Create a new branch
```
git checkout -b ＜new-branch＞ ＜existing-branch＞
```
#### Change to the branch Lesson-03
```
git checkout ＜branchname＞ 
```
OR
#### Change back to Main
```
git checkout main
```
## Q3. 1 word for how you’re feeling:
Tired~


# COMP-3170-Frontend_Web_Development_2-Lab-Week_04 - lesson 04 (2024.09.24)
## tailwind CSS

Edited Cheese page with tailwind css.
